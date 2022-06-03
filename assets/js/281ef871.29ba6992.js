"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[201],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3,slug:"/jsx"},c="JavaScript XML (JSX)",p={unversionedId:"jsx",id:"jsx",title:"JavaScript XML (JSX)",description:"JSX (JavaScript XML) es un preprocesador que transforma el c\xf3digo a JavaScript.",source:"@site/docs/jsx.md",sourceDirName:".",slug:"/jsx",permalink:"/react-course/jsx",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/jsx"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/react-course/installation"},next:{title:"Componentes",permalink:"/react-course/components"}},l={},m=[{value:"Sin JSX",id:"sin-jsx",level:2},{value:"Con JSX",id:"con-jsx",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"javascript-xml-jsx"},"JavaScript XML (JSX)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSX")," (",(0,o.kt)("strong",{parentName:"p"},"JavaScript XML"),") es un preprocesador que transforma el c\xf3digo a ",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),"."),(0,o.kt)("h2",{id:"sin-jsx"},"Sin JSX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/1.0-jsx/src/main.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/1.0-jsx/index.html\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"La funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot")," ",(0,o.kt)("strong",{parentName:"p"},"recibe el elemento HTML")," que har\xe1 de contenedor para uno o m\xe1s componentes."),(0,o.kt)("p",null,"La funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render")," retorna un componente de ",(0,o.kt)("strong",{parentName:"p"},"React")," y recibe los componentes de ",(0,o.kt)("strong",{parentName:"p"},"React")," que ser\xe1n renderizados por el navegador."),(0,o.kt)("p",null,"La funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement")," recibe 3 argumentos."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Un elemento de ",(0,o.kt)("strong",{parentName:"li"},"HTML"),"."),(0,o.kt)("li",{parentName:"ul"},"Las propiedades del elemento."),(0,o.kt)("li",{parentName:"ul"},"El contenido del elemento, otros elementos ",(0,o.kt)("strong",{parentName:"li"},"HTML")," o tipos primitivos.")),(0,o.kt)("h2",{id:"con-jsx"},"Con JSX"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSX")," nos permite escribir elementos ",(0,o.kt)("strong",{parentName:"p"},"HTML")," en ",(0,o.kt)("strong",{parentName:"p"},"JavaScript")," y a\xf1adirlos al ",(0,o.kt)("strong",{parentName:"p"},"Virtual DOM")," sin necesidad de la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement()")),(0,o.kt)("p",null,"Para poder utilizar ",(0,o.kt)("strong",{parentName:"p"},"JSX"),", es necesario utilizar un ",(0,o.kt)("strong",{parentName:"p"},"transpilador")," de ",(0,o.kt)("strong",{parentName:"p"},"JavaScript.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/1.1-jsx/src/main.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Parece ",(0,o.kt)("strong",{parentName:"em"},"HTML"),", se escribe como el ",(0,o.kt)("strong",{parentName:"em"},"HTML")," pero no es ",(0,o.kt)("strong",{parentName:"em"},"HTML!"),"\nEs una forma de crear c\xf3digo ",(0,o.kt)("strong",{parentName:"em"},"JavaScript")," de manera m\xe1s pr\xe1ctica.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/introducing-jsx.html"},"Presentando JSX - React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/jsx-in-depth.html"},"JSX en profundidad - React"))))))}d.isMDXComponent=!0}}]);