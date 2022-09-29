---
sidebar_position: 6
slug: '/optimization'
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ReactPlayer from 'react-player';

# Optimizaciones

Cuando se habla de **optimizaciones**, es importante entender que hace referencia al comportamiento de los **componentes** de la aplicación, **no** acerca del **algoritmo** de **reconciliación** interno del **React**.

Dentro de este concepto se encuentran todas las **acciones** que es posible **realizar** para conseguir **renderizados más rápidos y/o menos frecuentes**.

## ¿Cuántos re-renders son demasiados?

El número de **re-rendering** es una métrica de rendimiento deficiente. El largo árbol de componentes de **React** que solo devuelven JSX se puede volver a renderizar muchas veces sin ningún problema de rendimiento. 

Por otro lado, un componente que realiza un cálculo lento en el renderizado puede crear un cuello de botella de rendimiento en el primer montaje.

Es importante solucionar las renderizaciones lentas producidas por cálculos complejos o llamadas externas antes de evitar el **re-rendering**.

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/slow.mp4')} />
</div>

<br />

:::info Docs
* [How many re-renders is too many?](https://alexsidorenko.com/blog/react-how-many-rerenders/)
:::

## ¿Cuándo debo empezar a optimizar?

Es tentador comenzar a optimizar **re-renders** innecesarios al comienzo del proyecto. Puede parecer que, de no hacerlo, el proyecto se saldrá de control, y sería extremadamente difícil solucionar los problemas de rendimiento a posteriori. 

En la práctica, es posible corregir los cuellos de botella de rendimiento con la misma facilidad en las etapas posteriores del desarrollo.

Por lo tanto, una buena estrategia es, no micro-optimizar los reprocesamientos prematuramente y comenzar a solucionar los problemas de rendimiento cuando sean evidentes. Herramientas como la limitación de la CPU de Chrome DevTools para ver cómo se comporta la aplicación en dispositivos de gama baja, ayuda a detectar problemas de rendimiento reales.

<br />

<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/react-profiler.mp4')} />
</div>

<br />

:::info Docs
* [Analyze runtime performance - Chrome Developers](https://developer.chrome.com/docs/devtools/evaluate-performance/)
* [My React App is Slow and I Don't Know Why](https://alexsidorenko.com/blog/react-performance-tools/)
* [How to Detect Slow Renders in React?](https://alexsidorenko.com/blog/react-performance-slow-renders/)
:::

## memo

`memo` es un **HOC** que se utiliza para **memorizar** un **componente**. Al memorizarse, este **evita** **renderizarse** siempre que ninguna de sus **propiedades cambie**.

Una técnica para comprobar cuantas veces se renderiza un componente es añadiendo un efecto en cada uno de ellos que se ejecute en cada renderización.

Se añade el efecto al componente `<TableColumnsSelector>` y al componente `<Header>`.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Table/TableColumnsSelector.jsx#L3-L5
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Header/Header.jsx#21-29
```
<br />

Se observa mediante la consola del navegador como los componentes se renderizan cada vez que hay algún cambio que implique al componente padre `<App>`.
Para evitar este comportamiento, se envuelven mediante el **HOC** `memo`, consiguiendo que `<TableColumnsSelector>` y `<Header>` sean **memorizados** y solo se **rerenderizarán** cuando sus propiedades hayan sido **actualizadas** desde el componente padre `<App>`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Table/TableColumnsSelector.jsx#L31
```
<br />

Para acabar de entender el funcionamiento del **HOC** `memo` se reduce el ejemplo a una tabla a la que introducir países mediante un input.
Todos los componentes hacen uso de un efecto que mostrará por consola cuando son renderizados.

```bash
<Header />
<TableInputButton />
<TableColumns />
<TableHead />
<TableBody />
<Table />
```
<br />

Al aplicar `memo` a los componentes `<Header>`, `<TableColumns>` y `<TableInputButton>` el primero evita volver a renderizarse, pero en el caso de `<TableColumns>` y `<TableInputButton>` estos siguen renderizándose.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Header/Header.jsx#L31
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Table/TableInputButton.jsx#L24
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Table/TableColumns.jsx
```
<br />

```bash
<TableInputButton />
<TableColumns />
<TableHead />
<TableRow />
<TableBody />
<Table />
```

Es importante entender comó funciona el renderizado de React para comprender que sucede con los componentes `<TableColumns>` y `<TableInputButton>`. 
Al observar el componente `<App>` la constante `columns` encargada de definir las columnas que forman la tabla, se encuentra declarada dentro del componente `<App>`.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/App.jsx
```
<br />

Esto significa que cada vez que el componente `<App>` se renderice, este crea una nueva constante `columns`, una nueva referencia en memoria, el HOC `memo` del componente `<TableColumns>` lo interpreta como un cambio de propiedad y renderiza de nuevo el componente.

Lo mismo sucede con `<TableInputButton>`, la función encargada de cambiar el estado se vuelve a crear en cada renderizado del componente `<App>`.

<div align="center">

```plantuml re-rendering
class App {
 + columns
 + setCountry(country)
}

App --> App : re-rendering

package Memory {
  class ArrayColumns1 {
    +Id
    +Name
  }
  class ArrayColumns2 {
    +Id
    +Name
  }
  class ArrayColumnsN {
    +Id
    +Name
  }
  class setCountry1 {}
  class setCountry2 {}
  class setCountryN {}
}

App --> ArrayColumns1
App --> ArrayColumns2
App --> ArrayColumnsN
App --> setCountry1
App --> setCountry2
App --> setCountryN
```
</div>
<br />

:::tip
*En JavaScript, los objetos son de tipo de referencia. Dos objetos distintos, nunca son iguales, aunque tengan las mismas propiedades.*
:::

### Propiedades primitivas
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/primitive-value-v3.mp4')} />
</div>

### Propiedades no primitivas
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/non-primitive-prop-rerenders-v3.mp4')} />
</div>

<br />

Una de las soluciones sería mover la constante `columns` fuera del componente `<App>`. 
De esta manera el componente `<TableColumns>` no va a rerenderizarse.
```jsx
const columns = [ 'Id', 'Nombre' ];
const App = () => {}
```
<br />

En este caso la solución es perfectamente aceptable, pero no siempre es posible mover este tipo de datos fuera del componente, para ello React dispone del **hook** `useMemo`.
<br />

:::info Docs
* [API de Alto Nivel de React - React](https://es.reactjs.org/docs/react-api.html#reactmemo)
* [A Visual Guide to React Rendering - Props](https://alexsidorenko.com/blog/react-render-props/)
* [Comparing objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects)
:::

## useMemo
`useMemo` es un **hook** para memorizar valores, recibe dos parámetros:
* El primero es una función que retorna el valor a memorizar. 
* El segundo es un array con las dependencias a controlar. Si algúna cambia useMemo volverá a memorizar los valores. Con un array vacío solo se memoriza la primera vez que se renderice el componente.

<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.13-rendering/src/components/App.jsx#L11
```
<br />

Al tener la referencia al array memorizado, las propiedades del componente `<TableColumns>` no van a cambiar y junto con el **HOC** `memo` el componente no se va a volver a renderizar.
<br />

<div align="center">

```plantuml useMemo
class App {
 + columns
}

App --> App : re-rendering

package Memory {
  class ArrayColumns {
    +Id
    +Name
  }
}

App --> ArrayColumns: "  useMemo"
```
</div>

### Sin dependencias
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/no-dependencies.mp4')} />
</div>

### Con dependencias
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/final.mp4')} />
</div>

<br />

:::info Docs
* [Referencia de la API de los Hooks - React](https://es.reactjs.org/docs/hooks-reference.html#usememo)
* [A Visual Guide to React Rendering - useMemo](https://alexsidorenko.com/blog/react-render-usememo/)
:::

## useCallback
useCallback es un hook para memorizar funciones.
De la misma manera que `memo` se combina con `useMemo` para memorizar las referencias a propiedades, `useCallback` se encarga de recordar las referencias a funciones.
* El primer parámetro es la función a memorizar.
* El segundo es un array con las dependencias a controlar. Si algúna cambia useCallback volverá a memorizar la función. Con un array vacío solo se memoriza la primera vez que se renderice el componente.

Cada vez que el componente `<App>` es renderizado la función `setCountry` se crea de nuevo, creado una nueva referencia en memoria y provocando que el componente `<TableInputButton>` se renderice debido a que su propiedad `setCountry` ha sido actualizada.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.14-rendering/src/components/App.jsx#L14-L19
```
<br />

Al utilizar `useCallback` para memorizar la referencia de la función en conjunto con `memo` para memorizar las propiedades del componente `<TableInputButton>`, este no volverá a renderizarse cuando `<App>` se renderice al cambiar el estado provocado por añadir un nuevo país.
<br />

<div align="center">

```plantuml useCallback
class App {
 + setCountry(country)
}

App --> App : re-rendering

package Memory {
  class setCountry {}
}

App --> setCountry : "  useCallback"
```
</div>

### Sin dependencias
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/empty-dependencies.mp4')} />
</div>

### Con dependencias
<div align="center">
    <ReactPlayer height="100%" playing={true} loop url={useBaseUrl('/vids/react/declare-function.mp4')} />
</div>

<br />

El resultado final tendrá memorizado tanto la referencia a la función `setCountry` como el `array` `columns`.

<br />
<div align="center">

```plantuml useCallback
class App {
 + columns
 + setCountry(country)
}

App --> App : re-rendering

package Memory {
  class setCountry {}
  class ArrayColumns {
    +Id
    +Name
  }
}

App --> ArrayColumns: "  useMemo"
App --> setCountry : "  useCallback"
```
</div>

<br />

:::tip
*Se deben utilizar estas optimizaciones solo cuando sea necesario. El algoritmo de reconciliación **(React Fiber)** es muy rápido y añadir este tipo optimizaciones donde continuamente se están comparando las diferentes propiedades, funciones y componentes puede suponer ralentizar la aplicación.*
:::

:::info Docs
* [Referencia de la API de los Hooks - React](https://es.reactjs.org/docs/hooks-reference.html#usecallback)
* [Death by a thousand useCallbacks](https://royi-codes.vercel.app/thousand-usecallbacks/)
* [A Visual Guide to React Rendering - useCallback](https://alexsidorenko.com/blog/react-render-usecallback/)
:::

## Lazy & Suspense
A medida que la aplicación crece como consecuencia, el tamaño final del fichero .js también lo hace, esto provoca que el usuario deba esperarse a la descarga total de dicho fichero.
En ciertos casos este comportamiento puede no suponer un problema, por ejemplo, aplicaciones internas de la empresa, backoffice...
Pero en un entorno público el resultado deseado es poder ofrecer al usuario la página en la mayor brevedad posible.

React junto con la importación de módulos de JavaScript, proporciona un mecanismo para cargar componentes cuando el navegador los requiera.
Esto permite al navegador descargar solamente el código de los componentes que en ese momento está renderizando, el resto de componentes perezosos se quedarán a la espera hasta que el navegador los solicite.

El componente `<Table>` solo será importando si el navegador así lo requiere.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.15-rendering/src/components/App.jsx#L3
```
<br />

Si bien es una solución para el tamaño de los ficheros JavaScript, no mostrar nada durante la carga diferida de los componentes puede suponer un problema para la experiencia de usuario.

Para ello React dispone del componente `<Suspense>` mediante el cual envuelve aquellos componentes que son susceptibles de cargar de forma perezosa, recibe mediante la propiedad `fallback` un elemento o componente que será renderizado mientras dure la carga del componente perezoso.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.15-rendering/src/components/App.jsx#L32-L39
```
<br />

:::tip
*El comando `npm run build` genera el código listo para producción, al utilizar los componentes diferidos, el fichero final será divido por cada uno de estos.*
:::

:::info Docs
* [División de código - React](https://es.reactjs.org/docs/code-splitting.html)
:::
