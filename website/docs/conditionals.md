---
sidebar_position: 6
slug: '/conditionals'
---

# Condicionales
La representación condicional es un término que describe la capacidad de renderizar diferentes elementos o componentes basados en una condición. Este concepto se aplica a menudo en los siguientes escenarios:

- Renderización de datos externos desde una API.
- Mostrar u ocultar elementos.
- Alternar la funcionalidad de la aplicación.
- Implementación de niveles de permiso.
- Manejar la autenticación y la autorización.

El renderizado condicional en **React** funciona de la misma forma que lo hacen las condiciones en **JavaScript**. Es posible utilizar la sentencia `if` o el **operador ternario** para crear elementos dinámicamente en base al valor del estado o las propiedades que recibe el componente.

El componente `App` contiene un **componente privado**, el componente `NoContentInTable` el cual devuelve un mensaje indicando que la tabla está vacía. La función `checkEmptyTable` hará la comprobación dado el valor de la **constante** `rows` para saber si debe renderizar el componente `Table` o el componente `NoContentInTable`.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/4.0-conditionals/src/components/App.jsx
```
<br />

:::tip
*Los `if` complejos deben estar fuera del `return` del componente por rendimiento.
Para favorecer la reusabilidad, el comportamiento de la función que envuelve al `if`, puede hacerse en otro componente.*
:::
<br />

## Ternarios

Mediante un **operador ternario** podemos acometer el mismo resultado **simplificando** el **componente**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/4.1-conditionals/src/components/App.jsx#L13-L25
```
<br />

## Short Circuit Evaluation
Con el **operador** `&&` ***(Short Circuit Evaluation)***, podemos **evitar** renderizar un **componente** según la **existencia** de un **valor** o **propiedad**.

La `const` `rows` tiene el valor `null` en el componente `App`, debido a que **condicionalmente** `null` es `falsy`, el componente `Table` no será **renderizado**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/4.2-conditionals/src/components/App.jsx
```
<br />

## Evitar ciclo de vida
Otra de las utilidades del uso de condicionales es **evitar el ciclo de vida del componente**, el componente **no será renderizado** y su **ciclo de vida** será **detenido**.

```jsx reference
https://github.com/hondilla/react-course/blob/edge/4.3-conditionals/src/components/App.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/4.3-conditionals/src/components/Table/TableBody.jsx
```
<br />

:::tip
*Una validación muy común al trabajar con la propiedad `children` es <br /> `{ children && children }` para renderizar los hijos si existen y evitar errores si estos no están presentes.*
:::

:::info Docs
* [Renderizado condicional - React](https://es.reactjs.org/docs/conditional-rendering.html)
:::