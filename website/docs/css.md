---
sidebar_position: 9
slug: '/css'
---

# CSS

Al utilizar **React** hay varias formas de usar **CSS** para dar estilo a los componentes.

:::info Docs
* [Estilo y CSS - React](https://es.reactjs.org/docs/faq-styling.html)
:::
<br />

Para poder activar **sass** es necesario instalar la librería, **Vite** ya viene preparado para su uso.

```bash
npm i --save sass
```

## Global CSS

La forma tradicional es tener archivos **scss** que contengan las clases y estilos de los componentes que construyen la aplicación. Solo hay que importar el archivo **scss**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.0-css/src/components/App.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.0-css/src/components/Table/Table.jsx
```
<br />

```sass reference
https://github.com/hondilla/react-course/blob/edge/7.0-css/src/styles.scss
```
<br />

:::tip
*Usualmente se utiliza el paquete **classnames** para poder **condicionar** cuando se aplica una clase según el **comportamiento** del **componente**.*
:::
:::info Docs
* [GitHub - JedWatson/classnames: A simple javascript utility for conditionally joining classNames together](https://github.com/JedWatson/classnames)
:::

## Inline CSS

Otra de las alternativas es aprovechar la propiedad `style` de **JSX** para contener los estilos en cada uno de los componentes. El **CSS** se define ahora de una manera ligeramente diferente.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.1-css/src/components/Table/Table.jsx
```
<br />

:::tip
*El valor que recibe la propiedad `style` va entre las **llaves dobles**, las **primeras llaves** indican que se va a utilizar **JavaScript**, las **segundas el objeto** que representan los estilos **CSS**. Las propiedades **CSS** se definen dentro del objeto en formato **camelCase**.*
:::

:::info Docs
* [Why you shouldn't use inline styling in production React apps - LogRocket Blog](https://blog.logrocket.com/why-you-shouldnt-use-inline-styling-in-production-react-apps/)
:::

## CSS Module

Un **módulo CSS** es un archivo CSS en el que todos los nombres de clase y de animación tienen un ámbito local por defecto.

Los **módulos CSS** permiten escribir estilos en archivos CSS pero consumirlos como objetos **JavaScript** para un procesamiento y seguridad adicionales. Los **módulos CSS** son muy populares porque hacen que los nombres de las clases y las animaciones sean **automáticamente únicos**, por lo que no hay que preocuparse por las colisiones de nombres de los selectores.

:::tip
*Por convención el nombre de los ficheros **CSS** se forma con el nombre del componente seguido de module. `Table.module.css`*
:::

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.2-css/src/components/Table/Table.jsx
```
<br />

```sass reference
https://github.com/hondilla/react-course/blob/edge/7.2-css/src/components/Table/Table.module.scss
```
<br />

:::tip
*Al tratar el **CSS** como un **objeto de JavaScript** se recomienda utilizar el nombre de las clases en formato **camelCase**.*
:::

## CSS-in-JS (styled components)

**CSS-in-JS** es una técnica de estilo en la que se utiliza **JavaScript** para dar estilo a los componentes. 

Cuando este **JavaScript** se analiza, se **genera CSS**. Permite **abstraer el CSS** al nivel del propio componente, utilizando **JavaScript** para describir los estilos de forma **declarativa** y **mantenible**.

Es capaz de otras cosas que no eran posibles utilizando las técnicas tradicionales de CSS. 

Es posible hacer que los **estilos** sean **dinámicos** en línea con sólo unas pocas **declaraciones condicionales**. También permite que los usuarios escriban un **código más modular** con su **CSS** **encapsulado** en el mismo bloque que el **JavaScript** del usuario, **delimitándolo** sólo a ese **módulo**.

### Beneficios

- Pensar en componentes. No es necesario que los usuarios tengan que **mantener** un montón de **hojas de estilo**. **CSS-in-JS** **abstrae el modelo CSS** al nivel de los componentes, en lugar de al nivel del documento (**modularidad**).
- **CSS-in-JS** aprovecha toda la potencia del ecosistema **JavaScript** para **mejorar** el **CSS**.
- Verdadero aislamiento de reglas. Los selectores de ámbito no son suficientes. CSS tiene propiedades que se heredan automáticamente del elemento padre, si no se definen explícitamente.
- Selectores de ámbito. CSS sólo tiene un espacio de nombres global. Es imposible evitar colisiones de selectores en aplicaciones no triviales. **CSS** en **JavaScript** genera **nombres** de clase **únicos** por defecto cuando se compila a CSS.
- Prefijación de proveedores. Las reglas CSS están prefijadas automáticamente por el proveedor, por lo que los usuarios no tienen que pensar en ello.
- **Compartir código**. **Comparte** fácilmente **constantes** y **funciones** entre **JavaScript** y **CSS**.
- Sólo los estilos que están actualmente en uso en las pantallas de los usuarios están en el DOM.
- Eliminación de código muerto.
<br />

:::info Docs
* [styled-components - Visual primitives for the component age](https://styled-components.com/)
:::
<br />

Instalación del paquete `styled-components`
```bash
npm i --save styled-components
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.3-css/src/components/Table/Table.jsx
```
<br />

Si el componente ya está creado y no es posible crearlo con `styled-component`, podemos **envolver** el componente utilizando el **HOC** `styled` y aplicar los estilos. El componente envuelto recibe por parámetro la **clase** con los estilos, esta debe usarse en la propiedad `className` del elemento envuelto.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/7.4-css/src/components/Table/Table.jsx
```
<br />

## Media Queries

:::info Docs
* [GitHub - yocontra/react-responsive: CSS media queries in react - for responsive design, and more.](https://github.com/yocontra/react-responsive/)
:::