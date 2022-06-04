---
sidebar_position: 10
slug: '/rendering'
---

# Renderizado
La renderización (**rendering**) es un proceso interno del ciclo de vida de los componentes y es utilizada en varias etapas, generalmente cuando se inicializa un componente por primera vez.

Una segunda renderización u otras posteriores, se conoce como **re-rendering**, y este nuevo renderizado entra en juego de manera automática cuando un componente cambia su estado o sus propiedades son actualizadas.

:::tip
*Cuando se produce una renderización a **React** no le importa si las propiedades cambiaron, renderizará los componentes secundarios incondicionalmente solo porque el padre los renderizó.*
:::

:::tip
*Una parte clave importante es que **rendering** no es lo mismo que **actualizar el DOM**, un componente puede renderizarse sin que ocurran cambios visibles como resultado.*
:::

## Hooks

Un **hook** ***(gancho)*** es una función de **JavaScript** que permite **“engancharse”** al estado, al ciclo de vida de un componente u otras características de **React**. Al utilizar los **hooks** hay que seguir dos reglas básicas.

- Deben ser llamados en el nivel superior del componente. Nunca deben llamarse dentro de bucles, condicionales o funciones anidadas, ya que la renderización de un componente debe de ser predecible.
- Deben de llamarse desde un componentes o desde otros hooks personalizados.

:::tip
*Por convención todos los **hooks** deben empezar con el prefijo **use**.*
:::

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.0-rendering/src/components/App.jsx
```
<br />

```jsx reference
https://github.com/hondilla/react-course/blob/edge/8.0-rendering/src/hooks/useCountries.jsx
```
<br />

:::tip
*Los **hooks** son funciones reutilizables. Cuando tienes una lógica de componente que necesita ser utilizada por múltiples componentes, podemos extraer esa lógica a un **hook** personalizado.*
:::
:::info Docs
* [Presentando Hooks - React](https://es.reactjs.org/docs/hooks-intro.html)
:::