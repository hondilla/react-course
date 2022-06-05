---
sidebar_position: 3
slug: '/ref'
---

# Referencias
`useRef` es un **hook** que devuelve un objeto ***ref*** mutable cuya propiedad `current` se inicializa con el valor pasado como parámetro. 

El objeto devuelto se mantendrá persistente durante la vida completa del componente.

Un caso de uso común es para acceder a un elemento hijo de forma imperativa. Combinado con el **hook** `useEffect`, es posible aplicar el **foco** sobre el elemento referenciado.

`useRef` no notifica cuando su contenido a cambiado y como consecuencia no va a provocar un nuevo renderizado en los componentes. El input está asociado a la referencia `search` el valor contenido va a cambiar en el momento que el input sea rellenado.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.6-rendering/src/components/Table/TableRowSearcher.jsx
```

Cuando la referencia es creada desde un componente padre y está debe propagarse a otro componente hijo hasta llegar al elemento, debe usarse junto con el **HOC** `forwardRef`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.7-rendering/src/components/Table/TableRowSearcher.jsx
```

El este caso, el componente `TableRowSearchInput` recibe por propiedad la `ref` pero dentro del componente es el segundo parámetro de la función. No es posible acceder a la propiedad `ref` dentro del objetos `props`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.7-rendering/src/components/Table/TableRowSearcherInput.jsx
```

:::tip
*Un caso típico de uso de referencias son en los formularios, para evitar el continuo **rerendering** al rellenarlo.*
:::

:::info Docs
* [Referencia de la API de los Hooks - React](https://es.reactjs.org/docs/hooks-reference.html#useref)
:::