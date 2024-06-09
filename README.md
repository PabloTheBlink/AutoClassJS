# AutoClass Library

AutoClass es una librería que permite generar y aplicar estilos CSS dinámicos a elementos HTML utilizando atributos personalizados.

## Instalación

Incluye el script en tu documento HTML:

```html
<script src="https://cdn.devetty.es/AutoClassJS/js"></script>
```

## Uso

Para usar AutoClass, simplemente agrega el atributo `auto-class` a cualquier elemento HTML que desees estilizar automáticamente. El valor del atributo debe seguir el formato `propiedad:valor`.

## Ejemplo

```html
<script src="https://cdn.devetty.es/AutoClassJS/js"></script>

<div auto-class="margin-top:1rem border:1px-solid-red padding-left:1rem text-align:center">
  <h1>hola</h1>
</div>
```

## HTML resultante

Después de procesar el documento, el HTML se verá así:

```html
<div class="margin-top-1rem border-1px-solid-red padding-left-1rem text-align-center">
  <h1>hola</h1>
</div>
```

## CSS generado

La librería generará automáticamente los estilos CSS necesarios:

```css
.margin-top-1rem {
  margin-top: 1rem;
}
.border-1px-solid-red {
  border: 1px solid red;
}
.padding-left-1rem {
  padding-left: 1rem;
}
.text-align-center {
  text-align: center;
}
```

## Funcionamiento Interno

1. **Inicialización**: La librería se inicializa y crea un objeto `AutoClass` para almacenar las clases generadas.
2. **Estilos**: Se inserta una etiqueta `<style>` en el documento para contener los estilos generados.
3. **Generación de Clases**: Se procesan los elementos con el atributo `auto-class` y se generan las clases CSS correspondientes.
4. **Observador de Mutaciones**: Se utiliza un `MutationObserver` para observar cambios en el DOM y procesar nuevos elementos con el atributo `auto-class`.

## Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un issue o enviar un pull request en el repositorio de GitHub.
