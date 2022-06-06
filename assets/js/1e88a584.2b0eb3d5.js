"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[369],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2678:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:11,slug:"/portals"},c="Portales",s={unversionedId:"portals",id:"portals",title:"Portales",description:"Todas las aplicaciones realizas con React suelen colgar siempre de un div que se encuentra en el HTML.",source:"@site/docs/portals.md",sourceDirName:".",slug:"/portals",permalink:"/react-course/portals",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,slug:"/portals"},sidebar:"reactSidebar",previous:{title:"Optimizaciones",permalink:"/react-course/optimization"},next:{title:"Limites de errores",permalink:"/react-course/errors"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"portales"},"Portales"),(0,o.kt)("p",null,"Todas las aplicaciones realizas con ",(0,o.kt)("strong",{parentName:"p"},"React")," suelen colgar siempre de un ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," que se encuentra en el ",(0,o.kt)("strong",{parentName:"p"},"HTML"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/9.0-portals/index.html#L12\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Uno de los inconvenientes que se puede presentar al usar este sistema, es la necesidad de tener un elemento por encima del ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," principal.\nLos portals permiten definir nuevos puntos de entrada para componentes de ",(0,o.kt)("strong",{parentName:"p"},"React"),", permitiendo abandonar el \xe1rbol DOM principal de la aplicaci\xf3n. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/9.0-portals/index.html#L11-L15\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Para crear un portal ",(0,o.kt)("strong",{parentName:"p"},"React DOM")," dispone de la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"createPortal")," que recibe dos par\xe1metros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"El primero es el componente a renderizar dentro del nuevo \xe1rbol."),(0,o.kt)("li",{parentName:"ul"},"El segundo el elemento del DOM donde montar el componente.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/9.0-portals/src/components/Table/TableDetailsModal.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Una vez configurado el portal, el componente se va a comportar como cualquier otro y es utilizable desde cualquier punto de la aplicaci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/9.0-portals/src/components/App.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/portals.html"},"Portales - React"))))))}d.isMDXComponent=!0}}]);