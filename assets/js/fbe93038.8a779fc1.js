"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[432],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4534:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={sidebar_position:14,slug:"/testing"},o="Testing",c={unversionedId:"testing",id:"testing",title:"Testing",description:"Cuando el proyecto es creado mediante create-react-app est\xe1 configurado con todo el entorno de testing. Al utilizar vite es necesario instalar de manera manual todas las dependecias para preparar el entorno.",source:"@site/docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/react-course/testing",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,slug:"/testing"},sidebar:"reactSidebar",previous:{title:"ESLint / Prettier",permalink:"/react-course/eslint-prettier"},next:{title:"Redux",permalink:"/react-course/redux"}},u={},d=[{value:"Testing Library / Jest",id:"testing-library--jest",level:2},{value:"Cypress",id:"cypress",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Cuando el proyecto es creado mediante ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," est\xe1 configurado con todo el entorno de testing. Al utilizar ",(0,i.kt)("inlineCode",{parentName:"p"},"vite")," es necesario instalar de manera manual todas las dependecias para preparar el entorno."),(0,i.kt)("h2",{id:"testing-library--jest"},"Testing Library / Jest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom esbuild-jest identity-obj-proxy unplugin-clear-testid\n")),(0,i.kt)("br",null),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("table",{style:{display:"inline-block"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Dependencia"),(0,i.kt)("th",null,"Uso"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"@testing-library/react"),(0,i.kt)("td",null,"Set de utilidades de testing para React.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"@testing-library/jest-dom"),(0,i.kt)("td",null,"Conector de testing-library con Jest.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"@testing-library/user-event"),(0,i.kt)("td",null,"Simulador avanzado de interacciones con el navegador.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"jest"),(0,i.kt)("td",null,"Testing Framework.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"jest-environment-jsdom"),(0,i.kt)("td",null,"Implementaci\xf3n del DOM en JavaScript para Jest.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"esbuild-jest"),(0,i.kt)("td",null,"Permite usar Jest con esBuild.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"identity-obj-proxy"),(0,i.kt)("td",null,"Mockear m\xf3dulos.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"unplugin-clear-testid"),(0,i.kt)("td",null,"Permite eliminar todos los atributos test-id del HTML."))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/queries/about"},"Testing Library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro"},"Testing Library React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jestjs.io/es-ES/"},"Jest"))))),(0,i.kt)("h2",{id:"cypress"},"Cypress"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev cypress @testing-library/cypress\n")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("table",{style:{display:"inline-block"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Dependencia"),(0,i.kt)("th",null,"Uso"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"cypress"),(0,i.kt)("td",null,"e2e Testing Framework.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"@testing-library/cypress"),(0,i.kt)("td",null,"A\xf1ade compatibilidad con Testing Library."))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/cypress-testing-library/intro"},"Testing Library Cypress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cypress.io/"},"Cypress"))))))}m.isMDXComponent=!0}}]);