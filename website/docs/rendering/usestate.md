---
sidebar_position: 1
slug: '/state'
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ReactPlayer from 'react-player';

# Estado
El estado es el conjunto de valores que tiene la instancia de un componente mostrado en pantalla, es decir, contiene información que puede cambiar durante la vida útil del mismo. 

A diferencia de las `props` que no pueden ser alteradas desde el componente que las recibe, los estados si pueden ser modificados, pero son inmutables directamente, para cambiar su valor es esencial hacerlo mediante una función especial, los cambios en los valores se aplican de manera asíncrona.

Para poder trabajar con estados locales del componente, **React** dispone del **hook** `useState`.

El **hook** `useState` es una función que recibe por parámetro el valor por defecto que va a tener el estado concreto en el momento de inicializarse, dicha función devuelve un array con dos elementos, el primero es el valor del estado, el segundo es una referencia a la función que se encargará de alterar el valor del estado.
<br />

:::tip
*Por convención el nombre de la función debe empezar con el prefijo **set**.*
:::
:::tip
*A los componentes sin estado se les llama **Stateless Component**, son funciones puras.*
:::

## Eventos
Generalmente para cambiar el estado de un componente se realiza mediante la acción de un usuario. 

Estas acciones se producen mediante eventos, manejarlos es muy similar a trabajar con los eventos de elementos del DOM pero con ciertas diferencias.

- Se nombran en formato **camelCase**.
- Son **funciones** en vez de **strings**.
- No pueden retornar **false** para evitar el comportamiento por defecto, hay que utilizar `event.preventDefault`.
- No es necesario agregar observadores `addEventListener`.
- Los eventos son instancias de la clase `SyntethicEvent`, un contenedor agnóstico al navegador alrededor del evento nativo y tiene la misma interfaz.
- Es posible acceder al evento nativo a través del método `event.nativeEvent`.
<br />
<br />

:::info Docs
* [Manejando eventos - React](https://es.reactjs.org/docs/handling-events.html)
* [SyntheticEvent - React](https://es.reactjs.org/docs/events.html)
:::

## useState
Al utilizar la función `useState` esta retorna un array con dos valores `columns` y `setColumns`, `useState` recibe como parámetro un `array` con las distintas **columnas**. 

Ahora las `columns` tiene más propiedades, `name` para el nombre de la **columna**, `alias` para asociar la columna concreta con el valor de especificado en la **fila**, y una propiedad `isVisible` que se va a encargar de mostrar u ocultar la columna.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.1-rendering/src/components/App.jsx
```
<br />

Para modificar el estado de las columnas, es decir, su visibilidad, el componente `TableColumnsSelector` se va a encargar de esta responsabilidad. Va a recibir la propiedad `columns`, la cual contiene todas las **columnas**, y la función `setColumns` que es la encargada de modificar el estado.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.1-rendering/src/components/Table/TableColumnsSelector.jsx
```
<br />

El componente `TableColumnsSelector` va a renderizar mediante un `map` un listado de `checkboxs`, cada uno de ellos hace referencia a una **columna** concreta. El `checkbox` recibe el `alias` en el atributo `name`, `isVisible` en el atributo `checked` y tiene asignado un evento `onChange` observado por la función `onChangeHandler`. 

La función `onChangeHandle` recibe por parámetro el evento el cual contiene el elemento que lo ha disparado, a través de la propiedad del evento `target` y a su vez la propiedad `name` se identifica la columna concreta.

Mediante la función `onChangeHandle` se llama a la función recibida en la propiedad `setColumns`. 

La función `setColumns` recibe una función de `callback` con un parámetro que contiene el estado actual justo antes de hacer el cambio.

Cuando se desea modificar el estado de un componente, hay que crear una referencia nueva hacia los datos. Esto no es un problema al trabajar con valores **primitivos**, pero al trabajar con `arrays` u `objects` siempre deben ser **nuevas referencias**, de lo contrario **React** no actualizará el estado.

Se crea una copia del estado actual con la función `structuredClone` que recibe como parámetro el estado anterior. 

Sobre esta copia se busca la **columna** mediante la función `find` utilizando el atributo `name` del `checkbox` junto con el `alias` asignado a cada columna, una vez encontrada, se cambia el valor de `isVisible`, y se retorna el `array` con la columna modificada.
<br />

:::tip
*Este proceso se conoce como **comunicación de hijos a padres**.*
:::
<br />

**React** va a reaccionar a este cambio y va a volver a renderizar el componente padre `App` y por consiguiente a todos sus hijos manteniendo el estado modificado.
<br />

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/dom.mp4')} />
</div>

<br />

:::info Docs
* [A Visual Guide to React Rendering - Cheat Sheet](https://alexsidorenko.com/blog/react-render-cheat-sheet/)
:::
:::tip
*Utilizar el valor del estado, devuelto por la función `useState`, no garantiza que en el momento de realizar la modificación, dicho valor sea el correcto.*
:::
:::tip
*Es posible asignar un nuevo estado directamente al llamar a la función con el valor deseado.*
:::
<br />

```jsx
setColumns([ 
  {"name": "Id", "alias": "id", "isVisible": true},
  {"name": "Nombre", "alias": "name", "isVisible": true} 
]);
```
<br />

- Un **componente controlado** es aquel cuyo estado es manejado directamente por React, es decir, React le quita el control de estado a la implementación nativa del navegador y expone dicho control al desarrollador por medio de algunas simples API.

- En el otro lado del espectro un **componente no controlado** es aquel que almacena su propio estado, no es controlado por React y se lo consulta al DOM usando una referencia para encontrar su valor actual cuando se necesita, el estado se mantiene en el funcionamiento nativo del navegador.
<br />

:::tip
*Es posible tener multitud de `useState` según la necesidad del componente, aunque se recomienda agrupar los valores estrechamente relacionados.*
:::
<br />

Ahora que es posible cambiar la visibilidad de las columnas, en el componente `TableColumns` se deben de filtrar para que solo se rendericen aquellas columnas con la propiedad `isVisible` con valor `true`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.1-rendering/src/components/Table/TableColumns.jsx
```
<br />

De la misma manera, solo deben renderizarse los valores de las columnas visibles.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.1-rendering/src/components/Table/TableRow.jsx
```
<br />

Llegados a este punto la aplicación se comportará de la manera deseada, es posible mostrar u ocultar columnas, pero se ha introducido un problema, el componente `TableBody` se ha acoplado a la `prop` `columns` para poder filtrar los campos de una `row`, y el componente `TableColumns` tiene la responsabilidad de filtrar las columnas.

<div style={{textAlign:'center'}}>
<table style={{display: 'inline-block'}}>
<thead>
<tr>
<th>Antes</th>
<th>Después</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```plantuml Prop Drilling
    class App {
        + columns
        + rows
    }
    class Table {}
    class TableHead {}
    class TableColumns {
        + columns
    }
    class TableBody {
        + rows
    }
    class TableRow {
        + row
    }
    App *--> Table
    App --> TableColumns
    App --> TableBody
    Table *--> TableHead
    Table *--> TableBody
    TableHead *--> TableColumns
    TableBody *--> TableRow
    TableBody --> TableRow
```

</td>
<td>

```plantuml Prop Drilling
class App {
    + columns
    + rows
}
class Table {}
class TableHead {}
class TableColumns {
    + columns
}
class TableBody {
    + rows
}
class TableRow {
    + row
}
App *--> Table
App --> TableColumns
App --> TableBody
App --> TableBody
Table *--> TableHead
Table *--> TableBody
TableHead *--> TableColumns
TableBody *--> TableRow
TableBody --> TableRow
```

</td>
</tr>
</tbody>
</table>
</div>

Para solventar el problema se deshacen los cambios aplicados en `TableColumns`, `TableBody` y `TableRow` de manera que vuelven a su estado original y la lógica del manejo de las columnas se va a extraer a un **hook** llamado `useColumns`, y otro para las filas, `useRows`. El objetivo de estos dos **hooks** es preparar los datos en el formato exacto que la tabla espera.

El componente `App` va hacer uso de estos dos **hooks**, `useColumns` recibe un parámetro con el listado de las columnas y va a retornar un `array`:

- `columns` es son todas las columnas disponibles.
- `setColumns` es la función para cambiar el estado, esta vez el estado se encuentra dentro del **hook**.
- `visibleColumns` son las columnas visibles en el momento del renderizado.
- `excludedColumns` son las columnas que no se deben mostrar, este valor será utilizado por el **hook** `useRows` para filtrar los valores de las columnas excluidas.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.2-rendering/src/components/App.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.2-rendering/src/hooks/useColumns.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.2-rendering/src/hooks/useRows.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.2-rendering/src/components/Table/TableRow.jsx
```
<br />

También es posible crear un estado sobre las filas, por ejemplo, para realizar un filtrado dado un texto de entrada, es decir, un buscador.

Para ello el **hook** `useRows` retornará las filas filtradas junto con la función para modificar el estado que se encuentra dentro del mismo. El componente `TableBody` recibe por `props` las filas filtradas.

Se añade el componente `TableRowSearcher` que se va a encargar de hacer el filtrado de las `rows` recibe como propiedades la `rows` sin filtrar y la función para modificar el estado contenido en el **hook**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.3-rendering/src/components/App.jsx
```
<br />

Se aplica la función `filter` a las `rows` que recibe por `props` el **hook**, mediante la cual filtra aquellas filas que cumplan con la condición. El **hook** retorna un `array` con las `rows` filtradas y una función para alterar el estado interno del **hook** que se encarga de aplicar el filtro de búsqueda.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.3-rendering/src/hooks/useRows.jsx
```
<br />

El componente `TableRowSearcher` tiene su propio estado que se va a encargar del valor del `input` de entrada, al enlazar el valor del `input` con el estado se considera un **componente controlado**. 

La función `onChangeHandler` se va a encargar de modificar el estado asociado al `input` mediante la función `setSearch`, en este caso, no es necesario obtener el estado anterior con lo cual se le asigna el nuevo valor directamente.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.3-rendering/src/components/Table/TableRowSearcher.jsx
```
<br />

Al cambiar el estado en el componente `App`, este se renderiza junto con todos sus hijos.
<br />

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/state-new.mp4')} />
</div>

<br />

:::info Docs
* [A Visual Guide to React Rendering - It Always Re-renders](https://alexsidorenko.com/blog/react-render-always-rerenders/)
* [Estado y ciclo de vida - React](https://es.reactjs.org/docs/state-and-lifecycle.html)
:::