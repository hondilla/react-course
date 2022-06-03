---
sidebar_position: 7
slug: '/lists'
---

# Listados
Es posible hacer **colecciones de elementos** e incluirlos en ***JSX*** usando llaves `{}`.

Recorriendo los elementos de un `array` y usando la función `map` de **JavaScript**.

:::tip
*La propiedad `key` es obligatoria en los componentes dentro de bucles para que **React**, **de manera eficiente, trabaje con ellos**.*
:::
<br />

La `prop` `key` de **React** permite controlar las instancias de los componentes cada vez que se renderizan llamando a las funciones para recuperar los nuevos elementos que utiliza para actualizar el DOM, si devuelve los mismos tipos de elementos identificados con la `prop` `key` mantiene esos componentes/nodos del DOM, incluso si todas las `props` cambiaron.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/App.jsx
```
<br />

Haciendo uso de la función de orden superior `map` se devuelven los elementos que forman las columnas.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableColumns.jsx
```
<br />

A su vez, usando de nuevo `map` se devuelven los componentes que forman las filas de la tabla.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableBody.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableRow.jsx
```
<br />

:::tip
*La `prop` `key` siempre debe ser **única** entre **renderizados**, de lo contrario el **rendimiento** del **renderizado** de **React** puede verse **afectado**. Debe **evitarse** usar el **índice** del `array` como **valor**.*
:::

:::info Docs
* [Listas y keys - React](https://es.reactjs.org/docs/lists-and-keys.html)
* [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
:::