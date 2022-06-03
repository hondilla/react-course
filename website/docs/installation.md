---
sidebar_position: 2
slug: '/installation'
---

# Instalación
Para empezar un nuevo proyecto basado en **React** existen multitud de herramientas que proporcionan todo lo necesario para el desarrollo.

## React Create App

La herramienta oficial para la creación de proyectos en **React** es **React Create App**.

Añade un capa de abstracción alrededor de **Webpack** (*bundler*) y utiliza **Babel** (*compiler*).

Actualmente se considera una solución lenta y pesada en comparación con otras alternativas.

:::info Docs
* [Crear una nueva aplicación React - React](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app)
* [Webpack](https://webpack.js.org/)
* [BabelJS](https://babeljs.io/)
:::

```bash
npx create-react-app <app>
cd <app>
npm start
```

## Vite

**Vite** es una alternativa a la creación de proyectos en **JavaScript** de cualquier índole.

Durante el desarrollo se muestra un solución más rápida y eficiente, obteniendo un bundle final mucho más ligero.

Utiliza **Rollup** como *bundler* y **esBuild** como *compiler*.

:::info Docs
* [Vite](https://vitejs.dev/)
* [Rollup](https://rollupjs.org/guide/en/)
* [esBuild](https://esbuild.github.io/)
:::

```bash
npm create vite@latest
> y
> <app>
> react
> react
cd <app>
npm i
npm run dev
```

<br />

:::tip
* <i>Un <strong>bundler</strong> se utiliza para agrupar todos los ficheros JavaScript en uno solo, aunque también es posible agruparlos según el uso que se lo vaya a dar en cada una de las páginas.</i>
* <i>Los <strong>compiler/transpiler</strong> sirven para utilizar JavaScript <strong>moderno</strong> y convertirlo a código compatible en navegadores antiguos, además proporcionan la capacidad de <strong>extender</strong> JavaScript fuera del estándar como es el caso de <strong>JSX</strong></i>.
:::

:::tip
*La ejecución del proyecto en modo desarrollo desde el navegador en la dirección [localhost:3000](http://localhost:3000)*
:::