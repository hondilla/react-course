---
sidebar_position: 4
slug: '/components'
---

# Componentes

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y **pequeñas**, pensar en cada pieza de forma aislada donde cada uno de ellos se haga cargo de su **responsabilidad**. 

**JSX** es **JavaScript** y los componentes son exportados como **funciones**, las funciones en JavaScript solo pueden **devolver un tipo de valor**. 

Esto también se aplica a **React**, es por eso por lo que **un componente solo puede devolver un elemento o componente**.

| Elemento | Componente |
|:-:|:-:|
| Siempre es devuelto por un componente. | Retorna un elemento u otro componente. |
| No dispone de ningún método. | Se pueden crear tantos métodos como sea necesario. | 
| Es una representación de objeto de un nodo **DOM**. | Encapsula un árbol **DOM**. | 
| Son inmutables, una vez creados no pueden ser modificados. | El estado de un componente es mutable. |
| Puede ser creado usando `React.createElement` con el parámetro type. | Son creados mediante la función `render`. |
| No es posible utilizar **React Hooks** ya que los elementos son inmutables. | Es posible el uso de **Hooks**. |
| Son ligeros, sin estado y más rápido. | Son comparativamente más lentos que los elementos. |

<br />

```jsx reference 
https://github.com/hondilla/react-course/blob/edge/2.0-components/src/main.jsx
```

<br />

```jsx reference 
https://github.com/hondilla/react-course/blob/edge/2.0-components/src/components/Table/Table.jsx
```

<br />

Si el fichero del módulo es renombrado a ***index.jsx***, el componente es importado por defecto solo con especificar el nombre del directorio.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.1-components/src/main.jsx#L3-L3
```

## Modo Estricto

`React.StrictMode` es un componente de **React** que no es renderizado en el **HTML**, permite envolver a otros componentes para ayudar a crearlos siguiendo las mejores prácticas.

* Identifica con ciclos de vida inseguros.
* Avisos sobre el uso de la API obsoleta.
* Detección de efectos secundarios inesperados.
* Detección de efectos inseguros.

<br />

:::info Docs
* [Modo estricto - React](https://es.reactjs.org/docs/strict-mode.html)
:::

:::tip
*Es posible extraer `StrictMode` directamente de `react`.
Cuando un componente no tiene hijos pueden utilizarse con la etiqueta de cierre a la derecha.*
:::
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.1-components/src/main.jsx#L1-L1
```
<br />

:::tip
*No confundir con `use strict` de **JavaScript**, el cual esta activado debido al uso de módulos.*
:::

:::info Docs
* [Modo estricto - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode)
:::

:::info Docs
* [Componentes y propiedades - React](https://es.reactjs.org/docs/components-and-props.html)
:::

## Composición de Componentes

La composición en React es un patrón de desarrollo basado en el modelo de componentes, en el que se construyen componentes a partir de otros componentes más pequeños, para ensamblar una unidad cohesiva más grande.

Utilizar la composición facilita la reutilización de componentes dentro de la aplicación haciéndolos más fáciles de mantener y reduciendo su complejidad.

:::info Docs
[Composición vs. herencia - React](https://es.reactjs.org/docs/composition-vs-inheritance.html)
:::

<br />

Por convención de nombres, todos los **componentes** se nombrarán en formato **PascalCase**,  independientemente de que sean **funciones**.

```jsx
/* Especificación del componente */
const Table = () ⇒ <table></table>;

/* Uso del componente */
<Table />
```

:::tip
*En la **especificación de un componente**, solo debe **exportarse a sí mismo**. No se recomienda exportar más de uno para facilitar su **reutilización**.*
:::

:::tip 
*Es posible definir **varios componentes** en la especificación de un componente para usarlo de forma **privada** dentro del mismo. Dependerá de la **complejidad** del mismo.*
:::

:::tip
*Del mismo modo que **HTML** permite anidar varios **elementos** bajo un mismo **padre**, con **JSX** es posible anidar uno o varios **componentes** bajo el mismo **elemento** **HTML** **padre**.*
:::

<div style={{textAlign:'center'}}>

```plantuml Jerarquía de componentes
Table *--> TableHead
Table *--> TableBody
TableHead *--> TableColumns
TableBody *--> TableRow
```
</div>
<br />

:::tip
💡 *Las etiquetas de los componentes de **React**, no son **renderizados** en el **HTML** que recibe el navegador.*
:::
<br />

El componente `Table` de **React**, está compuesto de un elemento `table` de **JSX**, junto con los componentes `TableHead` y `TableBody`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/Table.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableHead.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableColumns.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableBody.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableRow.jsx
```
<br />

:::tip
*Es muy importante diseñar bien nuestros componentes, para reducir el acoplamiento y aumentar la cohesión.*
:::

## Fragments

Un patrón común en **React** es que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.3-components/src/components/Table/Table.jsx
```
<br />

:::warning
*No es posible utilizar el código anterior, debido a que la función está devolviendo **dos componentes**.*
:::

Una de las soluciones para evitar este comportamiento sería envolverlos en un elemento `<div>`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.4-components/src/components/Table/Table.jsx
```
<br />

Si bien soluciona el problema, debido a que la **función solo devuelve un elemento** `<div>`, a su vez genera un **nuevo problema**, la cantidad de `<div>` de envoltura que son generados en el **HTML** y que pueden **afectar al comportamiento de los estilos y al rendimiento del código HTML.**

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.5-components/src/components/Table/Table.jsx
```
<br />

Los `Fragments` se pueden utilizar de forma reducida y no necesitan de ser importados.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/2.6-components/src/components/Table/Table.jsx
```
<br />

:::info Docs
* [Fragmentos - React](https://es.reactjs.org/docs/fragments.html)
:::