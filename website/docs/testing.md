---
sidebar_position: 14
slug: '/testing'
---

# Testing
Cuando el proyecto es creado mediante `create-react-app` está configurado con todo el entorno de testing. Al utilizar `vite` es necesario instalar de manera manual todas las dependecias para preparar el entorno.

## Testing Library / Jest

```bash
npm i --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom esbuild-jest identity-obj-proxy unplugin-clear-testid
```
<br />

<div style={{textAlign:'center'}}>
<table style={{display: 'inline-block'}}>
<thead>
<tr><th>Dependencia</th><th>Uso</th></tr>
</thead>
<tbody>
<tr><td>@testing-library/react</td><td>Set de utilidades de testing para React.</td></tr>
<tr><td>@testing-library/jest-dom</td><td>Conector de testing-library con Jest.</td></tr>
<tr><td>@testing-library/user-event</td><td>Simulador avanzado de interacciones con el navegador.</td></tr>
<tr><td>jest</td><td>Testing Framework.</td></tr>
<tr><td>jest-environment-jsdom</td><td>Implementación del DOM en JavaScript para Jest.</td></tr>
<tr><td>esbuild-jest</td><td>Permite usar Jest con esBuild.</td></tr>
<tr><td>identity-obj-proxy</td><td>Mockear módulos.</td></tr>
<tr><td>unplugin-clear-testid</td><td>Permite eliminar todos los atributos test-id del HTML.</td></tr>
</tbody>
</table>
</div>

:::info Docs
* [Testing Library](https://testing-library.com/docs/queries/about)
* [Testing Library React](https://testing-library.com/docs/react-testing-library/intro)
* [Jest](https://jestjs.io/es-ES/)
:::

## Cypress
```bash
npm i --save-dev cypress @testing-library/cypress
```

<div style={{textAlign:'center'}}>
<table style={{display: 'inline-block'}}>
<thead>
<tr><th>Dependencia</th><th>Uso</th></tr>
</thead>
<tbody>
<tr><td>cypress</td><td>e2e Testing Framework.</td></tr>
<tr><td>@testing-library/cypress</td><td>Añade compatibilidad con Testing Library.</td></tr>
</tbody>
</table>
</div>

:::info Docs
* [Testing Library Cypress](https://testing-library.com/docs/cypress-testing-library/intro)
* [Cypress](https://www.cypress.io/)
:::