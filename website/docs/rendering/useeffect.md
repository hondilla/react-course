---
sidebar_position: 2
slug: '/effect'
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ReactPlayer from 'react-player';

# Ciclo de vida

En **React**, cada componente pasa por diferentes fases durante su vida.

<p align="center">
  <img alt="Virtual DOM" width="100%" src={useBaseUrl('/img/react/life-cycle.png')} />
</p>

La fase de **Mounting** significa que el componente está en proceso de insertar su contenido en el DOM.

**Updating** se llama cuando el componente está siendo actualizado. La actualización de un componente se produce cuando hay un cambio en el estado del componente o de sus propiedades.

La última fase **Unmounting** se llama cuando un componente tiene que ser eliminado del DOM.

Con `useEffect` es posible acceder al ciclo de vida, recibe una función, como primer parámetro, que es ejecutada cada vez que un componente es renderizado, el segundo parámetro es opcional, es un `array` de dependencias que en caso de ser actualizadas provocan la ejecución de la función.

`useEffect` es ejecutado cuando se cumple una de las condiciones:

- Por un cambio de estado (`useState`) propio o de un ancestro.
- Por recibir propiedades nuevas
- La primera vez que el componente se monta.

:::tip
*Al añadir el **efecto**, la función es ejecutada cada vez que el componente se renderiza.*
:::
<br />

```jsx
import { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('mounting & updating')
  });
}

export default Component;
```
<br />


`useEffect` retorna una función que es ejecutada cuando el componente es renderizado o se desmonta.

```jsx
import { useEffect } from 'react';

const Component = () => {
  useEffect(() => {
    console.log('mounting & updating')
    return () => console.log('unmounting');
  });
}

export default Component;
```
<br />

Cada vez que el componente se renderiza se van acumulando nuevos intervalos.
<br />

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/accumulates.mp4')} />
</div>

<br />

La función de retorno de `useEffect` limpia el intervalo de manera que cada vez que el componente se renderiza lo detiene.

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/cleanup-2-v2.mp4')} />
</div>

<br />

:::tip
*La función ejecutada cuando el componente se desmonta, permite evitar comportamientos activos después de eliminar el componente del DOM.*
:::

<br />

Para evitar que `useEffect` sea ejecutado una vez el componente ha sido renderizado, se añade un `array` vacío como segundo parámetro de la función `useEffect`. Este uso del `useEffect` se suele relacionar con la carga de datos al renderizar componentes, en este caso, se modifica el **hook** que se encarga de los datos para cargar el listado de países de forma remota.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.4-rendering/src/hooks/useCountries.jsx
```

<br />

<div align="center">
    <ReactPlayer playing={true} loop url={useBaseUrl('/vids/react/effect-2.mp4')} />
</div>

<br />

`useEffect` no será ejecutado en los siguientes renderizados si no tiene un listado de dependencias que observar.

<div align="center">
    <ReactPlayer playing={true} loop url={useBaseUrl('/vids/react/props-1.mp4')} />
</div>

<br />

`useEffect` será ejecutado la primera vez que el componente se renderice y posteriormente cuando las dependencias se actualicen.

<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.5-rendering/src/hooks/useCountries.jsx
```

<br />

<div align="center">
    <ReactPlayer playing={true} loop url={useBaseUrl('/vids/react/props-2.mp4')} />
</div>

<br />

:::tip
*Al utilizar `useEffect` se pueden realizar cambios en el estado del componente y este a su vez volver a ejecutar `useEffect`, es decir, un bucle.*
:::
<br />

<div align="center">
    <ReactPlayer playing={true} loop url={useBaseUrl('/vids/react/effect-1.mp4')} />
</div>

<br />

:::info Docs
* [Usando el Hook de efecto](https://es.reactjs.org/docs/hooks-effect.html)
* [A Visual Guide to useEffect](https://alexsidorenko.com/blog/useeffect/)
* [How many re-renders is too many?](https://alexsidorenko.com/blog/react-how-many-rerenders/)
:::