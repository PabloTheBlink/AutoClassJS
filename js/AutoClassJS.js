window.AutoClass = new (function () {
  this.classes = {};
})();

const style = (function () {
  if (document.querySelector("style[auto-classes]")) return document.querySelector("style[auto-classes]");
  const element = document.createElement("style");
  element.setAttribute("auto-classes", "");
  document.head.appendChild(element);
  return element;
})();

function generateClasses(element) {
  const auto_classes = element.getAttribute("auto-class").split(" ");
  for (let auto_class of auto_classes) {
    const [key, value] = auto_class.split(":");
    const cls = auto_class.replaceAll(":", "-");
    if (!AutoClass.classes[cls]) {
      AutoClass.classes[cls] = `${key}: ${value.replaceAll("-", " ")}`;
    }
    element.classList.add(cls);
  }
  element.removeAttribute("auto-class");
}

function generateStyle() {
  style.innerHTML = `
      ${Object.entries(AutoClass.classes)
        .map(
          ([key, value]) => `
        .${key} {
          ${value};
        }
      `
        )
        .join("")}
    `;
}

function processNewElements() {
  document.querySelectorAll("*[auto-class]").forEach(function (e) {
    generateClasses(e);
  });
  generateStyle();
}

window.addEventListener("load", processNewElements);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1 && node.hasAttribute("auto-class")) {
        generateClasses(node);
      }
    });
  });
  generateStyle();
});

if (document.body) {
  observer.observe(document.body, { childList: true, subtree: true });
} else {
  window.addEventListener("load", () => observer.observe(document.body, { childList: true, subtree: true }));
}
