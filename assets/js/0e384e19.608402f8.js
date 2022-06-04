"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[671],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(k,i(i({ref:a},p),{},{components:t})):n.createElement(k,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9881:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(4996),s=["components"],l={sidebar_position:1,slug:"/"},c="Introducci\xf3n",p={unversionedId:"intro",id:"intro",title:"Introducci\xf3n",description:"React\xa0es una biblioteca\xa0JavaScript\xa0altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/react-course/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"reactSidebar",next:{title:"Instalaci\xf3n",permalink:"/react-course/installation"}},m={},d=[{value:"\xbfPara qu\xe9?",id:"para-qu\xe9",level:2},{value:"\xbfPor qu\xe9 usarlo?",id:"por-qu\xe9-usarlo",level:2},{value:"\xbfQu\xe9 es el Virtual DOM?",id:"qu\xe9-es-el-virtual-dom",level:2}],u={toc:d};function k(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React"),"\xa0es una biblioteca\xa0",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),"\xa0altamente ",(0,o.kt)("strong",{parentName:"p"},"eficiente")," y ",(0,o.kt)("strong",{parentName:"p"},"declarativa")," que se utiliza para crear interfaces de usuario interactivas."),(0,o.kt)("p",null,"Fue creado por el ingeniero de\xa0Facebook\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Jordan Walke")),"\xa0y se lanz\xf3 en mayo de 2013."),(0,o.kt)("h2",{id:"para-qu\xe9"},"\xbfPara qu\xe9?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React")," es ",(0,o.kt)("strong",{parentName:"p"},"declarativo"),", esto permite ",(0,o.kt)("strong",{parentName:"p"},"crear interfaces de usuario interactivas")," de forma sencilla. Dise\xf1a ",(0,o.kt)("strong",{parentName:"p"},"vistas simples")," para cada ",(0,o.kt)("strong",{parentName:"p"},"estado")," en tu aplicaci\xf3n, y ",(0,o.kt)("strong",{parentName:"p"},"React")," se encargar\xe1 de ",(0,o.kt)("strong",{parentName:"p"},"actualizar y renderizar")," de manera ",(0,o.kt)("strong",{parentName:"p"},"eficiente")," los ",(0,o.kt)("strong",{parentName:"p"},"componentes")," correctos cuando los ",(0,o.kt)("strong",{parentName:"p"},"datos cambien"),"."),(0,o.kt)("p",null,"Las ",(0,o.kt)("strong",{parentName:"p"},"vistas declarativas")," hacen que tu ",(0,o.kt)("strong",{parentName:"p"},"c\xf3digo")," sea m\xe1s ",(0,o.kt)("strong",{parentName:"p"},"predecible"),", por lo tanto, ",(0,o.kt)("strong",{parentName:"p"},"f\xe1cil de depurar"),"."),(0,o.kt)("p",null,"La ",(0,o.kt)("strong",{parentName:"p"},"API")," declarativa de ",(0,o.kt)("strong",{parentName:"p"},"React")," permite ",(0,o.kt)("strong",{parentName:"p"},"indicarle")," el ",(0,o.kt)("strong",{parentName:"p"},"estado deseado")," de la ",(0,o.kt)("strong",{parentName:"p"},"IU"),", y este se har\xe1 cargo de ",(0,o.kt)("strong",{parentName:"p"},"llevar el DOM a dicho estado"),". Esto ",(0,o.kt)("strong",{parentName:"p"},"abstrae")," la ",(0,o.kt)("strong",{parentName:"p"},"manipulaci\xf3n de atributos, manejo de eventos y actualizaci\xf3n manual del DOM")," que de otra manera ser\xeda necesario utilizar para construir la aplicaci\xf3n."),(0,o.kt)("p",null,"Est\xe1 basado en ",(0,o.kt)("strong",{parentName:"p"},"componentes")," permitiendo ",(0,o.kt)("strong",{parentName:"p"},"encapsularlos")," con su ",(0,o.kt)("strong",{parentName:"p"},"propio estado")," y ",(0,o.kt)("strong",{parentName:"p"},"convertirlos")," en ",(0,o.kt)("strong",{parentName:"p"},"interfaces de usuario complejas"),". "),(0,o.kt)("p",null,"Ya que la l\xf3gica de los componentes est\xe1 escrita en JavaScript y no en plantillas, los datos se transmiten de forma sencilla a trav\xe9s de la aplicaci\xf3n y mantienen el estado fuera del DOM."),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/"},"React - Una biblioteca de JavaScript para construir interfaces de usuario")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/"},"React Docs Beta"))))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React")," es ",(0,o.kt)("strong",{parentName:"p"},"multiplataforma"),", puede tambi\xe9n renderizar desde el ",(0,o.kt)("strong",{parentName:"p"},"servidor")," usando ",(0,o.kt)("strong",{parentName:"p"},"Node"),", as\xed como potencializar aplicaciones m\xf3viles usando\xa0",(0,o.kt)("strong",{parentName:"p"},"React Native"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Listado de renderizadores ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chentsulin/awesome-react-renderer"},"GitHub - chentsulin/awesome-react-renderer: Awesome list of React Renderer"))))),(0,o.kt)("h2",{id:"por-qu\xe9-usarlo"},"\xbfPor qu\xe9 usarlo?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"La modificaci\xf3n del \xe1rbol DOM es lenta y costosa, ",(0,o.kt)("strong",{parentName:"li"},"React")," se presenta con un gran rendimiento siendo eficiente y flexible gracias al ",(0,o.kt)("strong",{parentName:"li"},"Virtual DOM"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Facebook")," es el principal mantenedor del proyecto, existe una gran cantidad de documentaci\xf3n y recursos disponibles en la web que hace que la curva de aprendizaje sea muy fluida."),(0,o.kt)("li",{parentName:"ul"},"Es ",(0,o.kt)("strong",{parentName:"li"},"retro compatible"),", migrar de versiones anteriores a nuevas es bastante sencillo."),(0,o.kt)("li",{parentName:"ul"},"La estructura de componentes es sencilla de mantener, facilita la reutilizaci\xf3n del c\xf3digo, es eficiente en el desarrollo de software complejo."),(0,o.kt)("li",{parentName:"ul"},"Es ",(0,o.kt)("strong",{parentName:"li"},"OpenSource"),", lo que permite a colaboradores externos a Facebook la colaboraci\xf3n en el desarrollo de ",(0,o.kt)("strong",{parentName:"li"},"React"),"."),(0,o.kt)("li",{parentName:"ul"},"Lo utiliza Facebook en sus productos, a diferencia de otras librer\xedas/frameworks, ",(0,o.kt)("strong",{parentName:"li"},"React")," es la base de sus productos, WhatsApp, Instagram, Facebook\u2026")),(0,o.kt)("h2",{id:"qu\xe9-es-el-virtual-dom"},"\xbfQu\xe9 es el Virtual DOM?"),(0,o.kt)("p",null,"El ",(0,o.kt)("strong",{parentName:"p"},"Virtual DOM")," es un patr\xf3n para la representaci\xf3n \u201cvirtual\u201d de la interfaz de usuario la cual se mantiene en memoria y en sincron\xeda con el ",(0,o.kt)("strong",{parentName:"p"},"DOM real")," mediante una librer\xeda, como puede ser, ",(0,o.kt)("strong",{parentName:"p"},"ReactDOM"),". Este proceso se conoce como ",(0,o.kt)("strong",{parentName:"p"},"reconciliaci\xf3n"),". "),(0,o.kt)("p",null,"El t\xe9rmino ",(0,o.kt)("strong",{parentName:"p"},"Virtual DOM")," es normalmente asociado con\xa0elementos de ",(0,o.kt)("strong",{parentName:"p"},"React"),"\xa0ya que son objetos representando la interfaz de usuario. Sin embargo, ",(0,o.kt)("strong",{parentName:"p"},"React"),' tambi\xe9n usa objetos internos llamados "',(0,o.kt)("strong",{parentName:"p"},"fibers"),'" para mantener informaci\xf3n adicional acerca del \xe1rbol de componentes. \xc9stos pueden ser tambi\xe9n considerados como parte de la implementaci\xf3n de ',(0,o.kt)("strong",{parentName:"p"},"Virtual DOM")," de ",(0,o.kt)("strong",{parentName:"p"},"React"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React Fiber")," es el motor de reconciliaci\xf3n desde la versi\xf3n 16, mediante una reimplementaci\xf3n continua aumenta su idoneidad en \xe1reas como animaci\xf3n, dise\xf1o y gestos, mediante el\xa0",(0,o.kt)("strong",{parentName:"p"},"renderizado incremental,")," capacidad de\xa0",(0,o.kt)("strong",{parentName:"p"},"dividir el trabajo de renderizado en partes y distribuirlo en varios fotogramas.")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",null,"React")," no actualiza el ",(0,o.kt)("strong",{parentName:"em"},"DOM")," aplicando cambios de uno en uno sino que calcula todos los cambios que se han producido en el ",(0,o.kt)("strong",{parentName:"em"},"Virtual DOM"),", y los aplica de forma conjunta en el ",(0,o.kt)("strong",{parentName:"em"},"DOM"),". Este proceso se conoce como ",(0,o.kt)("strong",{parentName:"em"},"Reconciliaci\xf3n"),".")))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/react-dom.html"},"ReactDOM - React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/faq-internals.html"},"DOM virtual y detalles de implementaci\xf3n - React"))))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Virtual DOM",src:(0,i.Z)("/img/react/virtual-dom.png")})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/reconciliation.html"},"Reconciliaci\xf3n - React"))))))}k.isMDXComponent=!0}}]);