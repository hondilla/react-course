---
sidebar_position: 5
slug: '/reducer'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Estados complejos

`useReducer` es un **hook** alternativo al uso de `useState`, permite aislar toda la lógica de modificación del estado fuera de los componentes, se inspira en la librería **Redux** para proporcionar una manera de gestionar el estado por medio del uso de acciones.

`useReducer` recibe tres parámetros:

- Una función “reductora” (`reducer`) encargada de realizar los cambios en el estado.
- El estado inicial.
- Opcionalmente, una función encargada de calcular el estado de forma “perezosa”, permite extraer la lógica para calcular el estado inicial fuera de la función reductora

`useReducer` retorna un array con dos elementos, de forma similar a `useState`, el primer elemento es el estado actual, el segundo una función `dispatch`.

La función `dispatch` se encarga de disparar acciones las cuales le indican a la función reductora como se va a modificar el estado.

<div align="center">
  <img alt="Virtual DOM" src={useBaseUrl('/img/react/redux.png')} />
</div>

Se crea un estado usando `useReducer` igual que haría el **hook** `useState`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.9-rendering/src/hooks/useColumns.jsx
```

El componente `TableColumnsSelector` que anteriormente se encargaba de modificar el estado, va a utilizar la función `dispatch` para disparar una acción del tipo **SET_VISIBILITY** junto con los datos necesarios para alterar dicho estado, **payload.**

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.9-rendering/src/components/Table/TableColumnsSelector.jsx
```

:::tip
*Por convención, el objeto que recibe la función `dispatch` contiene dos propiedades, `type` que es la acción y `payload`, un objecto con todos los datos.*
:::

La función reductora (`reducer`) recibe por parámetro el estado actual junto con el contenido disparado por la función `dispatch`. Según la acción mediante el uso de `switch` se modifica el **estado** de una forma u otra.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.9-rendering/src/reducers/ColumnVisibility.jsx
```

Es posible combinar el uso de `useReducer` con `useContext` para crear un sistema de gestión de estados global, donde el estado de toda la aplicación este centralizado y se modifique desde cualquier componente envuelto por el contexto mediante acciones disparadas por la función `dispatch`.

Ahora `StateProvider` se encarga del contexto, de inicializar el estado y establece el acceso al mismo junto con la función `dispatch`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.10-rendering/src/context/StateProvider.jsx
```

El `reducer` por su parte tiene la capacidad de modificar las diferentes partes de las que se compone el estado mediante las acciones.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.10-rendering/src/reducers/StateReducer.jsx
```

:::tip
*Si bien esta combinación puede ser útil en aplicaciones pequeñas, no sustituye a **Redux** como gestor de estados a nivel de aplicación, tanto a nivel de rendimiento como otras herramientas de las que dispone.*
:::