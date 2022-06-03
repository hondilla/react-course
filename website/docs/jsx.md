---
sidebar_position: 3
slug: '/jsx'
---

# JavaScript XML (JSX)
**JSX** (**JavaScript XML**) es un preprocesador que transforma el código a **JavaScript**.

## Sin JSX

```jsx reference
https://github.com/hondilla/react-course/blob/edge/1.0-jsx/src/main.jsx
```
<br />

```html reference
https://github.com/hondilla/react-course/blob/edge/1.0-jsx/index.html
```
<br />

La función `ReactDOM.createRoot` **recibe el elemento HTML** que hará de contenedor para uno o más componentes.

La función `render` es utilizada para renderizar un elemento de **React** en el DOM, recibe por parámetro dichos elementos de **React**.

La función `React.createElement` recibe 3 argumentos.

- Un elemento de **HTML**.
- Las propiedades del elemento.
- El contenido del elemento, otros elementos **HTML** o tipos primitivos.

## Con JSX

**JSX** nos permite escribir elementos **HTML** en **JavaScript** y añadirlos al **Virtual DOM** sin necesidad de la función `React.createElement`

Para poder utilizar **JSX**, es necesario utilizar un **transpilador** de **JavaScript.**

```jsx reference
https://github.com/hondilla/react-course/blob/edge/1.1-jsx/src/main.jsx
```

<br />

:::tip
*Parece **HTML**, se escribe como el **HTML** pero no es **HTML!**
Es una forma de crear código **JavaScript** de manera más práctica.*
:::

:::info Docs
* [Presentando JSX - React](https://es.reactjs.org/docs/introducing-jsx.html)
* [JSX en profundidad - React](https://es.reactjs.org/docs/jsx-in-depth.html)
:::
