---
sidebar_position: 4
slug: '/context'
---

# Contexto

El uso de **Context** permite definir un contexto de datos al cual puede acceder todos aquellos componentes que se encuentren dentro de dicho contexto sin necesidad de utilizar las `props`.

Su uso solo se recomienda en casos muy especiales donde haya datos realmente globales, como por ejemplo, datos de un usuario autenticado, configuración del **theme** de la aplicación o gestión de idiomas.

Otro caso muy común sería en la creación de librerías.

:::tip
*<strong>Context</strong> no es un gestor de estados a nivel global. Para crear estados usando **Context** se debería combinar con el **hook** `useState`.*
:::

<div align="center">

```plantuml
class App {
 + columns
 + rows
}

package TableProvider <<Context>> {
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
}

App *--> Table
Table *--> TableHead
Table *--> TableBody

TableHead *--> TableColumns
TableBody *--> TableRow

TableBody --> TableRow

App ---> TableProvider
```
</div>

El componente `Table` queda envuelto por el proveedor del contexto `TableProvider` al cual se le asignan los valores de `rows` y `columns`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.8-rendering/src/components/App.jsx
```
<br />

El componente `TableProvider` que se encarga de crear el **contexto** `TableContext` lo inicializa con los valores recibidos vía `props`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.8-rendering/src/context/TableProvider.jsx
```
<br />

Ahora `TableColumns` ya no recibe las **columnas** mediante `props`, en su lugar el propio componente accede al valor cuando lo necesita mediante el uso del **hook** `useContext` que recibe el **contexto** como parámetro.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.8-rendering/src/components/Table/TableColumns.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.8-rendering/src/components/Table/TableBody.jsx
```
<br />

:::tip
*Aunque puede usarse para evitar problemas con prop drilling hay que intentar solucionarlos mediante composición antes de usar **Context**.*
:::

:::info Docs
* [Context - React](https://es.reactjs.org/docs/context.html)
:::
