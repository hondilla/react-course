"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[20],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7486:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:6,slug:"/conditionals"},c="Condicionales",s={unversionedId:"conditionals",id:"conditionals",title:"Condicionales",description:"La representaci\xf3n condicional es un t\xe9rmino que describe la capacidad de renderizar diferentes elementos o componentes basados en una condici\xf3n. Este concepto se aplica a menudo en los siguientes escenarios:",source:"@site/docs/conditionals.md",sourceDirName:".",slug:"/conditionals",permalink:"/react-course/conditionals",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/conditionals"},sidebar:"reactSidebar",previous:{title:"Propiedades",permalink:"/react-course/properties"},next:{title:"Listados",permalink:"/react-course/lists"}},p={},d=[{value:"Ternarios",id:"ternarios",level:2},{value:"Short Circuit Evaluation",id:"short-circuit-evaluation",level:2},{value:"Evitar ciclo de vida",id:"evitar-ciclo-de-vida",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"condicionales"},"Condicionales"),(0,o.kt)("p",null,"La representaci\xf3n condicional es un t\xe9rmino que describe la capacidad de renderizar diferentes elementos o componentes basados en una condici\xf3n. Este concepto se aplica a menudo en los siguientes escenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Renderizaci\xf3n de datos externos desde una API."),(0,o.kt)("li",{parentName:"ul"},"Mostrar u ocultar elementos."),(0,o.kt)("li",{parentName:"ul"},"Alternar la funcionalidad de la aplicaci\xf3n."),(0,o.kt)("li",{parentName:"ul"},"Implementaci\xf3n de niveles de permiso."),(0,o.kt)("li",{parentName:"ul"},"Manejar la autenticaci\xf3n y la autorizaci\xf3n.")),(0,o.kt)("p",null,"El renderizado condicional en\xa0",(0,o.kt)("strong",{parentName:"p"},"React")," funciona de la misma forma que lo hacen las condiciones en\xa0",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),". Puedes usar el condicional\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"if")," o el\xa0",(0,o.kt)("strong",{parentName:"p"},"operador ternario")," para crear elementos din\xe1micamente en base al valor del estado o las propiedades que recibe el componente."),(0,o.kt)("p",null,"El componente ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," contiene un ",(0,o.kt)("strong",{parentName:"p"},"componente privado"),", el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"NoContentInTable")," el cual devuelve un mensaje indicando que la tabla est\xe1 vac\xeda. La funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"checkEmptyTable")," har\xe1 la comprobaci\xf3n dado el valor de la ",(0,o.kt)("strong",{parentName:"p"},"constante")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," para saber si debe renderizar el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," o el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"NoContentInTable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/4.0-conditionals/src/components/App.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Los ",(0,o.kt)("inlineCode",{parentName:"em"},"if")," complejos deben estar fuera del ",(0,o.kt)("inlineCode",{parentName:"em"},"return")," del componente por rendimiento.\nPara favorecer la reusabilidad, el comportamiento de la funci\xf3n que envuelve al ",(0,o.kt)("inlineCode",{parentName:"em"},"if"),", puede hacerse en otro componente.")))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"ternarios"},"Ternarios"),(0,o.kt)("p",null,"Mediante un ",(0,o.kt)("strong",{parentName:"p"},"operador ternario")," podemos acometer el mismo resultado ",(0,o.kt)("strong",{parentName:"p"},"simplificando")," el ",(0,o.kt)("strong",{parentName:"p"},"componente"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/4.1-conditionals/src/components/App.jsx#L13-L25\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"short-circuit-evaluation"},"Short Circuit Evaluation"),(0,o.kt)("p",null,"Con el ",(0,o.kt)("strong",{parentName:"p"},"operador")," ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"(Short Circuit Evaluation)")),", podemos ",(0,o.kt)("strong",{parentName:"p"},"evitar")," renderizar un ",(0,o.kt)("strong",{parentName:"p"},"componente")," seg\xfan la ",(0,o.kt)("strong",{parentName:"p"},"existencia")," de un ",(0,o.kt)("strong",{parentName:"p"},"valor")," o ",(0,o.kt)("strong",{parentName:"p"},"propiedad"),"."),(0,o.kt)("p",null,"La ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rows")," tiene el valor ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," en el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),", debido a que ",(0,o.kt)("strong",{parentName:"p"},"condicionalmente")," ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," es ",(0,o.kt)("inlineCode",{parentName:"p"},"falsy"),", el componente ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," no ser\xe1 ",(0,o.kt)("strong",{parentName:"p"},"renderizado"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/4.2-conditionals/src/components/App.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"evitar-ciclo-de-vida"},"Evitar ciclo de vida"),(0,o.kt)("p",null,"Otra de las utilidades del uso de condicionales es ",(0,o.kt)("strong",{parentName:"p"},"evitar el ciclo de vida del componente"),", el componente ",(0,o.kt)("strong",{parentName:"p"},"no ser\xe1 renderizado")," y su ",(0,o.kt)("strong",{parentName:"p"},"ciclo de vida")," ser\xe1 ",(0,o.kt)("strong",{parentName:"p"},"detenido"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/4.3-conditionals/src/components/App.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/4.3-conditionals/src/components/Table/TableBody.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Una validaci\xf3n muy com\xfan al trabajar con la propiedad ",(0,o.kt)("inlineCode",{parentName:"em"},"children")," es ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"em"},"{ children && children }")," para renderizar los hijos si existen y evitar errores si estos no est\xe1n presentes.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/conditional-rendering.html"},"Renderizado condicional - React"))))))}u.isMDXComponent=!0}}]);