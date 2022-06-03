"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[745],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,s(s({ref:t},l),{},{components:n})):a.createElement(k,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:4,slug:"/components"},m="Componentes",p={unversionedId:"components",id:"components",title:"Componentes",description:"Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y peque\xf1as, pensar en cada pieza de forma aislada donde cada uno de ellos se haga cargo de su responsabilidad.",source:"@site/docs/components.md",sourceDirName:".",slug:"/components",permalink:"/react-course/components",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/components"},sidebar:"reactSidebar",previous:{title:"JavaScript XML (JSX)",permalink:"/react-course/jsx"},next:{title:"Propiedades",permalink:"/react-course/properties"}},l={},c=[{value:"Modo Estricto",id:"modo-estricto",level:2},{value:"Composici\xf3n de Componentes",id:"composici\xf3n-de-componentes",level:2},{value:"Fragmentos",id:"fragmentos",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"componentes"},"Componentes"),(0,r.kt)("p",null,"Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y ",(0,r.kt)("strong",{parentName:"p"},"peque\xf1as"),", pensar en cada pieza de forma aislada donde cada uno de ellos se haga cargo de su ",(0,r.kt)("strong",{parentName:"p"},"responsabilidad"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSX")," es ",(0,r.kt)("strong",{parentName:"p"},"JavaScript")," y los componentes son exportados como ",(0,r.kt)("strong",{parentName:"p"},"funciones"),", las funciones en JavaScript solo pueden ",(0,r.kt)("strong",{parentName:"p"},"devolver un tipo de valor"),". "),(0,r.kt)("p",null,"Esto tambi\xe9n se aplica a ",(0,r.kt)("strong",{parentName:"p"},"React"),", es por eso por lo que ",(0,r.kt)("strong",{parentName:"p"},"un componente solo puede devolver un elemento o componente"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Elemento"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Componente"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Siempre es devuelto por un componente."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Retorna un elemento u otro componente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"No dispone de ning\xfan m\xe9todo."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Se pueden crear tantos m\xe9todos como sea necesario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Es una representaci\xf3n de objeto de un nodo ",(0,r.kt)("strong",{parentName:"td"},"DOM"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Encapsula un \xe1rbol ",(0,r.kt)("strong",{parentName:"td"},"DOM"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Son inmutables, una vez creados no pueden ser modificados."),(0,r.kt)("td",{parentName:"tr",align:"center"},"El estado de un componente es mutable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Puede ser creado usando ",(0,r.kt)("inlineCode",{parentName:"td"},"React.createElement")," mediante el primer par\xe1metro, ",(0,r.kt)("inlineCode",{parentName:"td"},"type"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Son creados mediante la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"td"},"render")," de manera transparente en el ",(0,r.kt)("inlineCode",{parentName:"td"},"return")," del componente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"No es posible utilizar ",(0,r.kt)("strong",{parentName:"td"},"Hooks")," ya que los elementos son inmutables."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Es posible el uso de ",(0,r.kt)("strong",{parentName:"td"},"Hooks"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Son ligeros, sin estado y m\xe1s r\xe1pido."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Son comparativamente m\xe1s lentos que los elementos.")))),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.0-components/src/main.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.0-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Si el fichero del m\xf3dulo es renombrado a\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"index.jsx")),", el componente es importado por defecto solo con especificar el nombre del directorio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.1-components/src/main.jsx#L3-L3\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Es indiferente utilizar la extensi\xf3n ",(0,r.kt)("strong",{parentName:"em"},".js")," o ",(0,r.kt)("strong",{parentName:"em"},".jsx"),", para mantener un orden se suele utilizar ",(0,r.kt)("strong",{parentName:"em"},".js")," cuando se utiliza ",(0,r.kt)("strong",{parentName:"em"},"Vanilla JS")," y ",(0,r.kt)("strong",{parentName:"em"},".jsx")," cuando contiene c\xf3digo espec\xedfico de ",(0,r.kt)("strong",{parentName:"em"},"React"),".")))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/components-and-props.html"},"Componentes y propiedades - React"))))),(0,r.kt)("h2",{id:"modo-estricto"},"Modo Estricto"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.StrictMode")," es un componente de ",(0,r.kt)("strong",{parentName:"p"},"React")," que no es renderizado en el ",(0,r.kt)("strong",{parentName:"p"},"HTML"),", permite envolver a otros componentes para ayudar a crearlos siguiendo las mejores pr\xe1cticas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identifica con ciclos de vida inseguros."),(0,r.kt)("li",{parentName:"ul"},"Avisos sobre el uso de la API obsoleta."),(0,r.kt)("li",{parentName:"ul"},"Detecci\xf3n de efectos secundarios inesperados."),(0,r.kt)("li",{parentName:"ul"},"Detecci\xf3n de efectos inseguros.")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/strict-mode.html"},"Modo estricto - React"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Es posible extraer ",(0,r.kt)("inlineCode",{parentName:"em"},"StrictMode")," directamente de ",(0,r.kt)("inlineCode",{parentName:"em"},"react"),".\nCuando un componente no tiene hijos pueden utilizarse con la etiqueta de cierre a la derecha.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.1-components/src/main.jsx#L1-L1\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"No confundir con ",(0,r.kt)("inlineCode",{parentName:"em"},"use strict")," de ",(0,r.kt)("strong",{parentName:"em"},"JavaScript"),", el cual se encuentra activo debido al uso de m\xf3dulos.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode"},"Modo estricto - JavaScript"))))),(0,r.kt)("h2",{id:"composici\xf3n-de-componentes"},"Composici\xf3n de Componentes"),(0,r.kt)("p",null,"La composici\xf3n en React es un patr\xf3n de desarrollo basado en el modelo de componentes ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"(modularidad, reusabilidad, reparto de responsabilidades, ...)")),", en el que se construyen componentes a partir de otros componentes m\xe1s peque\xf1os, para ensamblar una unidad cohesiva m\xe1s grande."),(0,r.kt)("p",null,"Utilizar la composici\xf3n facilita la reutilizaci\xf3n de componentes dentro de la aplicaci\xf3n haci\xe9ndolos m\xe1s f\xe1ciles de mantener y reduciendo su complejidad."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://es.reactjs.org/docs/composition-vs-inheritance.html"},"Composici\xf3n vs. herencia - React")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Por convenci\xf3n de nombres, todos los ",(0,r.kt)("strong",{parentName:"p"},"componentes")," se nombrar\xe1n en formato ",(0,r.kt)("strong",{parentName:"p"},"PascalCase"),",  independientemente de que sean ",(0,r.kt)("strong",{parentName:"p"},"funciones"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/* Especificaci\xf3n del componente */\nconst Table = () \u21d2 <table></table>;\n\n/* Uso del componente */\n<Table />\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"En la ",(0,r.kt)("strong",{parentName:"em"},"especificaci\xf3n de un componente"),", solo debe ",(0,r.kt)("strong",{parentName:"em"},"exportarse a s\xed mismo"),". No se recomienda exportar m\xe1s de uno para facilitar su ",(0,r.kt)("strong",{parentName:"em"},"reutilizaci\xf3n"),".")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Es posible definir ",(0,r.kt)("strong",{parentName:"em"},"varios componentes")," en la especificaci\xf3n de un componente para usarlo de forma ",(0,r.kt)("strong",{parentName:"em"},"privada")," dentro del mismo. Depender\xe1 de la ",(0,r.kt)("strong",{parentName:"em"},"complejidad")," del mismo.")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Del mismo modo que ",(0,r.kt)("strong",{parentName:"em"},"HTML")," permite anidar varios ",(0,r.kt)("strong",{parentName:"em"},"elementos")," bajo un mismo ",(0,r.kt)("strong",{parentName:"em"},"padre"),", con ",(0,r.kt)("strong",{parentName:"em"},"JSX")," es posible anidar uno o varios ",(0,r.kt)("strong",{parentName:"em"},"componentes")," bajo el mismo ",(0,r.kt)("strong",{parentName:"em"},"elemento")," ",(0,r.kt)("strong",{parentName:"em"},"HTML")," ",(0,r.kt)("strong",{parentName:"em"},"padre"),".")))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/2qbCoabLqDBLjLC80J4zKXDJk4BG19toKogvuD984ixvEQMvUSLSS5L8Sa7vvG00",alt:"Jerarqu\xeda de componentes"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udca1 ",(0,r.kt)("em",{parentName:"p"},"Las etiquetas de los componentes de ",(0,r.kt)("strong",{parentName:"em"},"React"),", no son ",(0,r.kt)("strong",{parentName:"em"},"renderizados")," en el ",(0,r.kt)("strong",{parentName:"em"},"HTML")," que recibe el navegador.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"El componente ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," de ",(0,r.kt)("strong",{parentName:"p"},"React"),", est\xe1 compuesto de un elemento ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," de ",(0,r.kt)("strong",{parentName:"p"},"JSX"),", junto con los componentes ",(0,r.kt)("inlineCode",{parentName:"p"},"TableHead")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"TableBody"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableHead.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableColumns.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableBody.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.2-components/src/components/Table/TableRow.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Es muy importante dise\xf1ar bien nuestros componentes, para reducir el acoplamiento y aumentar la cohesi\xf3n.")))),(0,r.kt)("h2",{id:"fragmentos"},"Fragmentos"),(0,r.kt)("p",null,"Un patr\xf3n com\xfan en ",(0,r.kt)("strong",{parentName:"p"},"React")," es que un componente retorne m\xfaltiples elementos o componentes. Los ",(0,r.kt)("strong",{parentName:"p"},"Fragments")," te permiten agrupar una lista de hijos sin agregar nodos extra al DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.3-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"No es posible utilizar el c\xf3digo anterior, debido a que la funci\xf3n est\xe1 devolviendo ",(0,r.kt)("strong",{parentName:"em"},"dos componentes"),".")))),(0,r.kt)("p",null,"Una de las soluciones para evitar este comportamiento ser\xeda envolverlos en un elemento ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.4-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Si bien soluciona el problema, debido a que la ",(0,r.kt)("strong",{parentName:"p"},"funci\xf3n solo devuelve un elemento")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),", a su vez genera un ",(0,r.kt)("strong",{parentName:"p"},"nuevo problema"),", la cantidad de ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," de envoltura que son generados en el ",(0,r.kt)("strong",{parentName:"p"},"HTML")," y que pueden ",(0,r.kt)("strong",{parentName:"p"},"afectar al comportamiento de los estilos y al rendimiento del c\xf3digo HTML.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.5-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Los ",(0,r.kt)("inlineCode",{parentName:"p"},"Fragments")," se pueden utilizar de forma reducida y no necesitan de ser importados."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/2.6-components/src/components/Table/Table.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/fragments.html"},"Fragmentos - React"))))))}u.isMDXComponent=!0}}]);