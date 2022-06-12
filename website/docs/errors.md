---
sidebar_position: 12
slug: '/errors'
---

# Limites de errores

Cuando se produce un error critico en **React** toda la aplicación deja de funcionar, se queda en blanco y hay que recargar la página.

Los límites de errores son **componentes** de **React** que capturan errores de **JavaScript** en cualquier parte de su árbol de componentes hijo, registran esos errores, y muestran una interfaz de repuesto en lugar del árbol de componentes que ha fallado. 

Los límites de errores capturan errores durante el renderizado, en métodos del ciclo de vida, y en constructores de todo el árbol bajo ellos.

Los límites de errores no capturan errores de:

* Manejadores de eventos
* Código asíncrono
* Renderizado en el servidor
* Errores lanzados en el propio límite de errores (en lugar de en sus hijos)

Los limites de errores solo puede utilizarse como componente de clase.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/10.0-error-boundary/src/components/App.jsx#L44-L51
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/10.0-error-boundary/src/components/Errors/ErrorBoundary.jsx
```
<br />

<iframe height="550" style={{width: '100%'}} scrolling="no" title="Untitled" src="https://codepen.io/gaearon/embed/wqvxGa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

<br /><br />

:::info Docs
* [Límites de errores - React](https://es.reactjs.org/docs/error-boundaries.html)
:::