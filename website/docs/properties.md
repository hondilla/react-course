---
sidebar_position: 5
slug: '/properties'
---

# Propiedades

Las propiedades son valores que recibe un componente hijo desde uno padre. Se agrupan en un objeto llamado `props`, el cual puede recibir diferentes tipos de datos, como:

- ***Strings***
- ***Numbers***
- ***Booleans***
- ***Arrays***
- ***Objects***
- ***Functions***
- ***React Elements***
- ***React Components***

:::tip
*Un **React Element** es la parte **JSX** de un **componente**.*
:::

Las `props` son **inmutables**, es decir, son valores de **sólo lectura**, no se pueden modificar.

:::tip
*Todos los **componentes** de **React** deben actuar como **funciones puras** con respecto a sus `props`.*
:::

El componente las recibe como atributos que se pasan a través de ***JSX***.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.0-properties/src/main.jsx
```

Para utilizar expresiones de **JavaScript** junto con la sintaxis de **JSX** se utilizan las llaves **{ expresión }**

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.0-properties/src/components/Table/Table.jsx
```

:::tip
*Una restricción de **JSX** es que no puedes utilizar `if`, `else`, `while` o `for`. Esto es debido a que no devuelven un valor.*
:::

:::tip
*Por convención de nombres, las props se escriben en formato **camelCase**.*
:::

Debido a que **JSX** es **JavaScript**, existen 2 atributos de **HTML** que no puede ser usados como propiedades dentro del código **JSX**, son `for` y `class`.

El atributo `for`, principalmente usado en los elementos `label` es utilizado como `htmlFor`

```jsx
/* HTML */
<label for="id">

/* JSX */
<label htmlFor="id">
```

En el caso de `class`, se utiliza `className`

```jsx
/* HTML */
<div class="mi-clase">

/* JSX */
<div className="mi-clase">
```

:::tip
*Las `props` se utilizan para **comunicar un dato** de **padres a hijos**.*
:::

:::info Docs
* [Presentando JSX - React](https://es.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)
* [Elementos DOM - React](https://es.reactjs.org/docs/dom-elements.html)
:::

## Propiedades por defecto

Es posible establecer **valores por defecto** para cada una de las **propiedades** que recibe un componente. En caso de que el componente `Table` no tenga la propiedad `title` definida, se le asignará un valor por defecto.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.1-properties/src/main.jsx
```

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.1-properties/src/components/Table/Table.jsx
```

:::tip
*Podemos **extraer** y utilizar directamente la **propiedad** `title`, del **objeto** de `props`.*
:::

:::info Docs
* [Verificación de tipos con PropTypes - React](https://es.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)
:::

## Precondiciones

A medida que una **aplicación crece** y esta empieza cada vez más a manejar un **mayor volumen de datos**, y por tanto hay un **mayor número de componentes**, crece la posibilidad de encontrarse con **errores de verificación de tipos** que afectan al comportamiento de la aplicación.

Por ello **React** incorpora un sistema de validación para las propiedades que reciben los componentes.

:::tip
*`React.PropTypes` se movió a un paquete diferente desde React v15.5.*
:::

Instalación del paquete `React.PropTypes`

```bash
npm i --save prop-types
```

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.2-properties/src/main.jsx
```

Al usar **propTypes**, el componente `Table` espera recibir un `string` de **manera obligatoria**. 

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.2-properties/src/components/Table/Table.jsx
```

:::tip
*Es importante remarcar que **`propTypes`** no va a interrumpir la ejecución de la aplicación, solo mostrará por **consola** de manera informativa los errores producidos por la validación. Los **errores de validación solo se muestran en entorno de desarrollo**, la aplicación en modo de producción no informará de los mismos.*
:::

:::warning
*Warning: Failed prop type: The prop `title` is marked as `required` in `Table`, but its value is `undefined`.*
:::

Es posible **combinar** las **propiedades** por **defecto**, con la **validación** de **propiedades**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.3-properties/src/components/Table/Table.jsx
```
:::info Docs
* [GitHub - facebook/prop-types: Runtime type checking for React props and similar objects](https://github.com/facebook/prop-types)
* [PropTypes in React: A complete guide - LogRocket Blog](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/#:~:text=Using%20PropTypes%20in%20React,-PropTypes%20is%20React's&text=When%20an%20invalid%20value%20is,to%20the%20prop%20type%20definitions)
:::

## dangerouslySetInnerHTML

`dangerouslySetInnerHTML` es un atributo que reemplaza a `innerHTML`. Hay que tener cuidado al utilizarlo, generalmente es un riesgo establecer código **HTML** directamente desde el código, ya que abre la puerta a ataques **XSS (Cross-Site-Scripting)**. 

El atributo `dangerouslySetInnerHTML` recibe un objeto con una propiedad `__html` cuyo valor será el contenido en **HTML**.

```jsx
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

Es recomendable el uso de librerías como **DOMPurify** para evitar **ataques XSS**.

:::info DOMPurify
* [GitHub - DOMPurify - a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.](https://github.com/cure53/DOMPurify)
:::

A nivel de **rendimiento**, durante el proceso de **reconciliación**, React **ignorará** el **elemento** que contenga dicho **atributo**.

:::tip
*Hay que evitar el uso de dicho atributo siempre que sea posible.*
:::

## Prop Drilling

La propagación de propiedades a través de padres a hijos puede provocar problemas de acoplamiento si la jerarquía de componentes no esta bien diseñada. 

Una forma sencilla de identificar la propagación de propiedades es, cuando existen componentes en la jerarquía con sus respectivas responsabilidades, pero que no interactúan con dichas propiedades y solo las vuelven a propagar a otros hijos.

:::tip
*Para favorecer la legibilidad, se introduce el componente `App`, se utiliza como componente raíz de toda la aplicación.*
:::

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/main.jsx
```

<div style={{textAlign:'center'}}>

```plantuml Prop Drilling
class App {
    + columns
    + rows
}
class Table {
    + columns
    + rows
}
class TableHead {
    + columns
}
class TableColumns {
    + columns
}
class TableBody {
    + rows
}
class TableRow {
    + row
}
App *--> Table
App --> Table
Table *--> TableHead
Table --> TableHead
Table *--> TableBody
Table --> TableBody
TableHead *--> TableColumns
TableHead --> TableColumns
TableBody *--> TableRow
TableBody --> TableRow
```

</div>

En el diseño anterior, `App`, encargado de obtener las filas y columnas para pintar la tabla, propaga las mismas hacia el componente hijo `Table`, a su vez este las vuelve a propagar hacia sus hijos `TableHead` y `TableBody`, que de nuevo las vuelven a propagar a sus hijos `TableColumms` y `TableRow`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/components/App.jsx
```

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/components/Table/Table.jsx
```

:::tip
*A pesar de tener un claro ejemplo de **Prop Drilling**, no existe un problema de acoplamiento. Los componentes `TableHead` y `TableBody` y sus hijos, no van a existir por si mismos, siempre van a necesitar de su padre `Table`.*
:::

:::tip
*Todo problema de **Prop Drilling** debe resolverse mediante composición.*
:::

Gracias a la composición mediante la propiedad `children`, la propagación de las propiedades se realiza hacia los componentes que las necesitan de forma exclusiva. Ahora `Table` no está acoplado a las propiedades `columns` y `rows`, y es posible eliminar el componente `TableHead` en caso de no necesitar las columnas.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/App.jsx
```

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/Table/Table.jsx
```

```jsx reference
https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/Table/TableHead.jsx
```

<div style={{textAlign:'center'}}>

```plantuml Prop Drilling
class App {
    + columns
    + rows
}
class Table {
    + columns
    + rows
}
class TableHead {
    + columns
}
class TableColumns {
    + columns
}
class TableBody {
    + rows
}
class TableRow {
    + row
}
App *--> Table
App --> TableColumns
App --> TableBody
Table *--> TableHead
Table *--> TableBody
TableHead *--> TableColumns
TableBody *--> TableRow
TableBody --> TableRow
```

</div>

:::tip
*La propiedad `children` existe por defecto en todos los componentes, y es posible utilizarla como si una propiedad normal se tratara.*
:::

```jsx
/* Propiedad children */
<Table children={<TableBody rows={ rows } />} />

/* Propiedad custom */
<Table custom={<TableBody rows={ rows } />} />
```