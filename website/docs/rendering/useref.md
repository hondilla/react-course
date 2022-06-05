---
sidebar_position: 3
slug: '/ref'
---

# Referencias
`useRef` es un **hook** que devuelve un objeto ***ref*** mutable cuya propiedad `current` se inicializa con el valor pasado como parámetro. 

El objeto devuelto se mantendrá persistente durante la vida completa del componente.

Un caso de uso común es acceder a un elemento hijo de forma imperativa. Combinado con el **hook** `useEffect`, es posible aplicar el **foco** sobre el elemento referenciado.

`useRef` no notifica cuando su contenido ha cambiado y como consecuencia no va a provocar un nuevo renderizado en los componentes. El input está asociado a la referencia `search` el valor contenido va a cambiar en el momento que el input sea rellenado.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.6-rendering/src/components/Table/TableRowSearcher.jsx
```
<br />

Cuando la referencia es creada desde un componente padre y ésta debe propagarse a otro componente hijo hasta llegar al elemento, debe usarse junto con el **HOC** `forwardRef`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.7-rendering/src/components/Table/TableRowSearcher.jsx
```
<br />

El este caso, el componente `TableRowSearchInput` recibe por propiedad la `ref` pero dentro del componente es el segundo parámetro de la función. No es posible acceder a la propiedad `ref` dentro del objetos `props`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.7-rendering/src/components/Table/TableRowSearcherInput.jsx
```
<br />

:::tip
*Un caso típico de uso de referencias son en los formularios, para evitar el continuo **rerendering** al rellenarlo.*
:::
<br />

## innerHTML
Una **referencia** hacia un elemento del **DOM** permite acceder a todos sus **métodos y propiedades** nativas del **navegador**, pero no quiere decir que su uso en todos los casos sea el correcto.

Con un elemento **referenciado** es posible acceder a la propiedad `innerHTML` e inyectar todo el **HTML** deseado, consiguiendo el mismo resultado que utilizando la propiedad `dangerouslySetInnerHTML` de **React**.

Mientras que la propiedad `dangerouslySetInnerHTML` le indica a **React** que todo el árbol DOM contenido dentro de esta debe ser ignorado por el algoritmo de **Reconciliación**, `innerHTML` no lo hace, provocando que el contenido se compare en cada renderizado, pero sin poder aplicar todo el sistema de optimizaciones propios de los componentes y elementos, debido a que el **HTML** se encuentra fuera del control de **React**.
<br />

:::info Docs
* [Referencia de la API de los Hooks - React](https://es.reactjs.org/docs/hooks-reference.html#useref)
:::