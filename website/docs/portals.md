---
sidebar_position: 11
slug: '/portals'
---

# Portales
Todas las aplicaciones realizas con **React** suelen colgar siempre de un `div` que se encuentra en el **HTML**.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/9.0-portals/index.html#L12
```
<br />

Uno de los inconvenientes que se puede presentar al usar este sistema, es la necesidad de tener un elemento por encima de los elementos del `div` principal.
Los portals permiten definir nuevos puntos de entrada para componentes de **React**, permitiendo abandonar el árbol DOM principal de la aplicación. 
```jsx reference
https://github.com/hondilla/react-course/blob/edge/9.0-portals/index.html#L11-L15
```
<br />

Para crear un portal **React DOM** dispone de la función `createPortal` que recibe dos parámetros:
* El primero es el componente a renderizar dentro del nuevo árbol.
* El segundo el elemento del DOM donde montar el componente.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/9.0-portals/src/components/Table/TableDetailsModal.jsx
```
<br />

Una vez configurado el portal, el componente se va a comportar como cualquier otro y es utilizable desde cualquier punto de la aplicación.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/9.0-portals/src/components/App.jsx#L38-L51
```
<br />

:::info Docs
* [Portales - React](https://es.reactjs.org/docs/portals.html)
:::