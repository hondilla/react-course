---
sidebar_position: 13
slug: '/eslint-prettier'
---

# ESLint / Prettier

Los ***linters*** son herramientas que **examinan** el **código** y ayudan a **corregir errores de sintaxis**, **código incorrecto**, **malas prácticas** y ayudan a seguir unas **normas de estilo**, favoreciendo escribir **código de calidad**.

Los ***formatters*** se encargan de formatear el código de manera automática siguiendo unas **normas de estilo** definidas por el **equipo de desarrollo**. Para ello, **analiza** el **código** y lo **re-escribe** cada vez que se ejecuta el formateador. Su objetivo es acabar con los debates sobre el estilo del código.

## ESLint 

**ESLint** es la herramienta predominante para la tarea de **examinar** código **JavaScript** tanto en el servidor como en el navegador.

### Instalación
```bash
npx eslint --init

> y
> y
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> React
> No
> Browser
> Use a popular style guide
> Standard: https://github.com/standard/standard
> JSON
> Yes
> npm
```

### Configuración

El *plugin* `plugin:react/jsx-runtime` indica a **ESLint** que el código funciona con **React** sin necesidad de incluir `import React from 'react'` en cada fichero de JSX.

```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.eslintrc.json#L6-L11
```
<br />

Se añade la opción `settings.react.version` para indicar a **ESLint** la versión de **React** utilizada en el proyecto.
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.eslintrc.json#L12-L16
```
<br />

El fichero `.eslintignore` especifica los *directorios* y *archivos* sobre los cuales no actuará **ESLint**.
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.eslintignore
```
<br />

### Ejecución
Para visualizar los problemas sin aplicar cambios.
```bash
npx eslint . --ext .js,.jsx
```
<br />

Para aplicar las correcciones que **ESLint** puede resolver automaticamente.
```bash
npx eslint . --fix --ext .js,.jsx
```

:::info Docs
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
:::

## Prettier
**Prettier** es una herramienta para formatear el código, tiene soporte para **HTML**, **CSS**, **JavaScript**, **JSX**, **TypeScript**, **GraphQL**... entre otros.

Se encarga de **garantizar** que el **código** se ajuste a un **estilo consistente** de manera automática. 

### Instalación

```bash
npm i --save-dev prettier
```
<br />

### Configuración
Reglas de **Prettier**.
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.prettierrc
```
<br />

El fichero `.prettierignore` especifica los *directorios* y *archivos* sobre los cuales no actuará **Prettier**.
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.prettierignore
```
<br />

### Conflictos con ESLint
Al utilizar **ESLint** junto con **Prettier** entran en **conflicto** las **reglas** establecidas por **ESLint** con las **reglas** **definidas** por el equipo en **Prettier**, para garantizar que la **prioridad** de las **reglas** de **Prettier** se añade la depedencia `eslint-config-prettier`.

```bash
npm i --save-dev eslint-config-prettier 
```
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/.eslintrc.json#L6-L11
```
<br />

### Ejecución
Analizar y visualizar el código formateado sin aplicar los cambios.
```bash
npx prettier .
```
<br />

Analizar y aplicar los cambios.
```bash
npx prettier . --write
```
<br />

:::info Docs
* [Prettier · Opinionated Code Formatter](https://prettier.io/)
:::
<br />

# Scripts
Es posible configurar `package.json` con los comandos para ejecutar tanto **ESLint** como **Prettier**.
```json reference
https://github.com/hondilla/react-course/tree/edge/11.0-eslint-prettier/package.json#L5-L11
```
<br />

```bash
npm run lint
npm run format
```