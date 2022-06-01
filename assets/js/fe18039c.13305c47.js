"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[621],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return N}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(t),N=r,k=c["".concat(p,".").concat(N)]||c[N]||d[N]||i;return t?n.createElement(k,o(o({ref:a},l),{},{components:t})):n.createElement(k,o({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2118:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:5,slug:"/properties"},p="Propiedades",m={unversionedId:"react/properties",id:"react/properties",title:"Propiedades",description:"Las propiedades son valores que recibe un componente hijo desde uno padre. Se agrupan en un objeto llamado\xa0props, el cual puede recibir diferentes tipos de datos, como:",source:"@site/docs/react/properties.md",sourceDirName:"react",slug:"/properties",permalink:"/properties",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/properties"},sidebar:"tutorialSidebar",previous:{title:"Componentes",permalink:"/components"}},l={},d=[{value:"Propiedades por defecto",id:"propiedades-por-defecto",level:2},{value:"Precondiciones",id:"precondiciones",level:2},{value:"dangerouslySetInnerHTML",id:"dangerouslysetinnerhtml",level:2},{value:"Prop Drilling",id:"prop-drilling",level:2}],c={toc:d};function N(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"propiedades"},"Propiedades"),(0,i.kt)("p",null,"Las propiedades son valores que recibe un componente hijo desde uno padre. Se agrupan en un objeto llamado\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),", el cual puede recibir diferentes tipos de datos, como:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Strings"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Numbers"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Booleans"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Arrays"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Objects"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Functions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"React Elements"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"React Components")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Un ",(0,i.kt)("strong",{parentName:"em"},"React Element")," es la parte ",(0,i.kt)("strong",{parentName:"em"},"JSX")," de un ",(0,i.kt)("strong",{parentName:"em"},"componente"),".")))),(0,i.kt)("p",null,"Las\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\xa0son\xa0",(0,i.kt)("strong",{parentName:"p"},"inmutables"),", es decir, son valores de\xa0",(0,i.kt)("strong",{parentName:"p"},"s\xf3lo lectura"),", no se pueden modificar."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Todos los ",(0,i.kt)("strong",{parentName:"em"},"componentes")," de ",(0,i.kt)("strong",{parentName:"em"},"React")," deben actuar como ",(0,i.kt)("strong",{parentName:"em"},"funciones puras")," con respecto a sus ",(0,i.kt)("inlineCode",{parentName:"em"},"props"),".")))),(0,i.kt)("p",null,"El componente las recibe como atributos que se pasan a trav\xe9s de\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"JSX")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.0-properties/src/main.jsx\n")),(0,i.kt)("p",null,"Para utilizar expresiones de ",(0,i.kt)("strong",{parentName:"p"},"JavaScript")," junto con la sintaxis de ",(0,i.kt)("strong",{parentName:"p"},"JSX")," se utilizan las llaves ",(0,i.kt)("strong",{parentName:"p"},"{ expresi\xf3n }")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.0-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Una restricci\xf3n de\xa0",(0,i.kt)("strong",{parentName:"em"},"JSX"),"\xa0es que no puedes utilizar\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"if"),",\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"else"),",\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"while"),"\xa0o\xa0",(0,i.kt)("inlineCode",{parentName:"em"},"for"),". Esto es debido a que no devuelven un valor.")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Por convenci\xf3n de nombres, las props se escriben en formato ",(0,i.kt)("strong",{parentName:"em"},"camelCase"),".")))),(0,i.kt)("p",null,"Debido a que ",(0,i.kt)("strong",{parentName:"p"},"JSX")," es ",(0,i.kt)("strong",{parentName:"p"},"JavaScript"),", existen 2 atributos de ",(0,i.kt)("strong",{parentName:"p"},"HTML")," que no puede ser usados como propiedades dentro del c\xf3digo ",(0,i.kt)("strong",{parentName:"p"},"JSX"),", son ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,i.kt)("p",null,"El atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),", principalmente usado en los elementos ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," es utilizado como ",(0,i.kt)("inlineCode",{parentName:"p"},"htmlFor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'/* HTML */\n<label for="id">\n\n/* JSX */\n<label htmlFor="id">\n')),(0,i.kt)("p",null,"En el caso de ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),", se utiliza ",(0,i.kt)("inlineCode",{parentName:"p"},"className")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'/* HTML */\n<div class="mi-clase">\n\n/* JSX */\n<div className="mi-clase">\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Las ",(0,i.kt)("inlineCode",{parentName:"em"},"props")," se utilizan para ",(0,i.kt)("strong",{parentName:"em"},"comunicar un dato")," de ",(0,i.kt)("strong",{parentName:"em"},"padres a hijos"),".")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx"},"Presentando JSX - React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/dom-elements.html"},"Elementos DOM - React"))))),(0,i.kt)("h2",{id:"propiedades-por-defecto"},"Propiedades por defecto"),(0,i.kt)("p",null,"Es posible establecer ",(0,i.kt)("strong",{parentName:"p"},"valores por defecto")," para cada una de las ",(0,i.kt)("strong",{parentName:"p"},"propiedades")," que recibe un componente. En caso de que el componente ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," no tenga la propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," definida, se le asignar\xe1 un valor por defecto."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.1-properties/src/main.jsx\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.1-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Podemos ",(0,i.kt)("strong",{parentName:"em"},"extraer")," y utilizar directamente la ",(0,i.kt)("strong",{parentName:"em"},"propiedad")," ",(0,i.kt)("inlineCode",{parentName:"em"},"title"),", del ",(0,i.kt)("strong",{parentName:"em"},"objeto")," de ",(0,i.kt)("inlineCode",{parentName:"em"},"props"),".")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values"},"Verificaci\xf3n de tipos con PropTypes - React"))))),(0,i.kt)("h2",{id:"precondiciones"},"Precondiciones"),(0,i.kt)("p",null,"A medida que una ",(0,i.kt)("strong",{parentName:"p"},"aplicaci\xf3n crece")," y esta empieza cada vez m\xe1s a manejar un ",(0,i.kt)("strong",{parentName:"p"},"mayor volumen de datos"),", y por tanto hay un ",(0,i.kt)("strong",{parentName:"p"},"mayor n\xfamero de componentes"),", crece la posibilidad de encontrarse con ",(0,i.kt)("strong",{parentName:"p"},"errores de verificaci\xf3n de tipos")," que afectan al comportamiento de la aplicaci\xf3n."),(0,i.kt)("p",null,"Por ello ",(0,i.kt)("strong",{parentName:"p"},"React")," incorpora un sistema de validaci\xf3n para las propiedades que reciben los componentes."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"React.PropTypes")," se movi\xf3 a un paquete diferente desde React v15.5.")))),(0,i.kt)("p",null,"Instalaci\xf3n del paquete ",(0,i.kt)("inlineCode",{parentName:"p"},"React.PropTypes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save prop-types\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.2-properties/src/main.jsx\n")),(0,i.kt)("p",null,"Al usar ",(0,i.kt)("strong",{parentName:"p"},"propTypes"),", el componente ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," espera recibir un ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," de ",(0,i.kt)("strong",{parentName:"p"},"manera obligatoria"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.2-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Es importante remarcar que ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("inlineCode",{parentName:"strong"},"propTypes"))," no va a interrumpir la ejecuci\xf3n de la aplicaci\xf3n, solo mostrar\xe1 por ",(0,i.kt)("strong",{parentName:"em"},"consola")," de manera informativa los errores producidos por la validaci\xf3n. Los ",(0,i.kt)("strong",{parentName:"em"},"errores de validaci\xf3n solo se muestran en entorno de desarrollo"),", la aplicaci\xf3n en modo de producci\xf3n no informar\xe1 de los mismos.")))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Warning: Failed prop type: The prop ",(0,i.kt)("inlineCode",{parentName:"em"},"title")," is marked as ",(0,i.kt)("inlineCode",{parentName:"em"},"required")," in ",(0,i.kt)("inlineCode",{parentName:"em"},"Table"),", but its value is ",(0,i.kt)("inlineCode",{parentName:"em"},"undefined"),".")))),(0,i.kt)("p",null,"Es posible ",(0,i.kt)("strong",{parentName:"p"},"combinar")," las ",(0,i.kt)("strong",{parentName:"p"},"propiedades")," por ",(0,i.kt)("strong",{parentName:"p"},"defecto"),", con la ",(0,i.kt)("strong",{parentName:"p"},"validaci\xf3n")," de ",(0,i.kt)("strong",{parentName:"p"},"propiedades"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.3-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/prop-types"},"GitHub - facebook/prop-types: Runtime type checking for React props and similar objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/#:~:text=Using%20PropTypes%20in%20React,-PropTypes%20is%20React's&text=When%20an%20invalid%20value%20is,to%20the%20prop%20type%20definitions"},"PropTypes in React: A complete guide - LogRocket Blog"))))),(0,i.kt)("h2",{id:"dangerouslysetinnerhtml"},"dangerouslySetInnerHTML"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),"\xa0es un atributo que reemplaza a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"innerHTML"),". Hay que tener cuidado al utilizarlo, generalmente es un riesgo establecer c\xf3digo ",(0,i.kt)("strong",{parentName:"p"},"HTML")," directamente desde el c\xf3digo, ya que abre la puerta a ataques ",(0,i.kt)("strong",{parentName:"p"},"XSS (Cross-Site-Scripting)"),". "),(0,i.kt)("p",null,"El atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),"\xa0recibe un objeto con una propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"__html")," cuyo valor ser\xe1 el contenido en ",(0,i.kt)("strong",{parentName:"p"},"HTML"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n")),(0,i.kt)("p",null,"Es recomendable el uso de librer\xedas como ",(0,i.kt)("strong",{parentName:"p"},"DOMPurify")," para evitar ",(0,i.kt)("strong",{parentName:"p"},"ataques XSS"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"DOMPurify")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cure53/DOMPurify"},"GitHub - DOMPurify - a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG."))))),(0,i.kt)("p",null,"A nivel de ",(0,i.kt)("strong",{parentName:"p"},"rendimiento"),", durante el proceso de ",(0,i.kt)("strong",{parentName:"p"},"reconciliaci\xf3n"),", React ",(0,i.kt)("strong",{parentName:"p"},"ignorar\xe1")," el ",(0,i.kt)("strong",{parentName:"p"},"elemento")," que contenga dicho ",(0,i.kt)("strong",{parentName:"p"},"atributo"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Hay que evitar el uso de dicho atributo siempre que sea posible.")))),(0,i.kt)("h2",{id:"prop-drilling"},"Prop Drilling"),(0,i.kt)("p",null,"La propagaci\xf3n de propiedades a trav\xe9s de padres a hijos puede provocar problemas de acoplamiento si la jerarqu\xeda de componentes no esta bien dise\xf1ada. "),(0,i.kt)("p",null,"Una forma sencilla de identificar la propagaci\xf3n de propiedades es, cuando existen componentes en la jerarqu\xeda con sus respectivas responsabilidades, pero que no interact\xfaan con dichas propiedades y solo las vuelven a propagar a otros hijos."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Para favorecer la legibilidad, se introduce el componente ",(0,i.kt)("inlineCode",{parentName:"em"},"App"),", se utiliza como componente ra\xedz de toda la aplicaci\xf3n.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/main.jsx\n")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/Iyv9B2vMS2meKAZcKW02RONa_9pItBnYAAyelxoOgvOh6Qmi934f9vLeXHwfYIaOYb5KE4C4yIjooa-fXAl0j2KelnnP5YW9yeoMhguTH1xCHV0WNa18Wnm95SGcXb08SWQwGeGOsAy8nL2F8SbXbmBx3Q4Dw1SaSMHX0000",alt:"Prop Drilling"})),(0,i.kt)("p",null,"En el dise\xf1o anterior, ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),", encargado de obtener las filas y columnas para pintar la tabla, propaga las mismas hacia el componente hijo ",(0,i.kt)("inlineCode",{parentName:"p"},"Table"),", a su vez este las vuelve a propagar hacia sus hijos ",(0,i.kt)("inlineCode",{parentName:"p"},"TableHead")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"TableBody"),", que de nuevo las vuelven a propagar a sus hijos ",(0,i.kt)("inlineCode",{parentName:"p"},"TableColumms")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"TableRow"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/components/App.jsx\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.4-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"A pesar de tener un claro ejemplo de ",(0,i.kt)("strong",{parentName:"em"},"Prop Drilling"),", no existe un problema de acoplamiento. Los componentes ",(0,i.kt)("inlineCode",{parentName:"em"},"TableHead")," y ",(0,i.kt)("inlineCode",{parentName:"em"},"TableBody")," y sus hijos, no van a existir por si mismos, siempre van a necesitar de su padre ",(0,i.kt)("inlineCode",{parentName:"em"},"Table"),".")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Todo problema de ",(0,i.kt)("strong",{parentName:"em"},"Prop Drilling")," debe resolverse mediante composici\xf3n.")))),(0,i.kt)("p",null,"Gracias a la composici\xf3n mediante la propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"children"),", la propagaci\xf3n de las propiedades se realiza hacia los componentes que las necesitan de forma exclusiva. Ahora ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," no est\xe1 acoplado a las propiedades ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"rows"),", y es posible eliminar el componente ",(0,i.kt)("inlineCode",{parentName:"p"},"TableHead")," en caso de no necesitar las columnas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/App.jsx\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/Table/Table.jsx\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/3.5-properties/src/components/Table/TableHead.jsx\n")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/Iyv9B2vMS2meKAZcKW02RONa_9pItBnYAAyelxoOgvOh6Qmi934f9vLeXHwfYIaOYb5KE4C4yIjooa-fXAl0j2KelnnP5YW9yeoMhguTH1xCXVEWDg8AWcpWWlWDeG_aUWn1X4gmvxGmp4Mu6247T26IEB8m0000",alt:"Prop Drilling"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"La propiedad ",(0,i.kt)("inlineCode",{parentName:"em"},"children")," existe por defecto en todos los componentes, y es posible utilizarla como si una propiedad normal se tratara.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"/* Propiedad children */\n<Table children={<TableBody rows={ rows } />} />\n\n/* Propiedad custom */\n<Table custom={<TableBody rows={ rows } />} />\n")))}N.isMDXComponent=!0}}]);