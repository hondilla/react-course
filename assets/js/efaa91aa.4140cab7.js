"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),s=["components"],p={sidebar_position:7,slug:"/lists"},l="Listados",m={unversionedId:"lists",id:"lists",title:"Listados",description:"Una colecci\xf3n de elementos o componentes, puede ser representada en\xa0JSX haciendo uso de la funci\xf3n\xa0map\xa0de\xa0JavaScript.",source:"@site/docs/lists.md",sourceDirName:".",slug:"/lists",permalink:"/react-course/lists",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/lists"},sidebar:"reactSidebar",previous:{title:"Condicionales",permalink:"/react-course/conditionals"},next:{title:"Componentes de Orden Superior",permalink:"/react-course/hoc"}},c={},d=[{value:"\xbfPara qu\xe9 la Key?",id:"para-qu\xe9-la-key",level:2}],u={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"listados"},"Listados"),(0,o.kt)("p",null,"Una ",(0,o.kt)("strong",{parentName:"p"},"colecci\xf3n de elementos o componentes"),", puede ser representada en\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"JSX"))," haciendo uso de la funci\xf3n\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\xa0de\xa0",(0,o.kt)("strong",{parentName:"p"},"JavaScript"),"."),(0,o.kt)("p",null,"La funci\xf3n de orden superior ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," retorna los elementos que forman las columnas."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableColumns.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Y a su vez, usando de nuevo ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", devuelve los componentes que forman las filas de la tabla."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableBody.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"Todos los ",(0,o.kt)("strong",{parentName:"em"},"elementos y componentes")," de ",(0,o.kt)("strong",{parentName:"em"},"React")," hacen uso de la propiedad ",(0,o.kt)("inlineCode",{parentName:"em"},"key")," de manera interna, es ",(0,o.kt)("strong",{parentName:"em"},"obligatorio")," especificar dicha propiedad en los elementos y componentes ",(0,o.kt)("strong",{parentName:"em"},"dentro de bucles"),".")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Se extraen los datos de las filas a un fichero ",(0,o.kt)("strong",{parentName:"p"},"JSON"),", el cual es ",(0,o.kt)("strong",{parentName:"p"},"importado")," y es tratado con la funci\xf3n de orden superior ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," para obtener el formato necesario por la tabla."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/App.jsx\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"para-qu\xe9-la-key"},"\xbfPara qu\xe9 la Key?"),(0,o.kt)("p",null,"La ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," de ",(0,o.kt)("strong",{parentName:"p"},"React")," permite controlar las instancias de los componentes cada vez que se renderizan, llamando a las funciones para recuperar los nuevos elementos que utiliza para actualizar el DOM, si devuelve los mismos tipos de elementos identificados por la ",(0,o.kt)("inlineCode",{parentName:"p"},"prop")," ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," mantiene esos nodos del DOM, aunque todas las ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," hayan cambiado."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"La ",(0,o.kt)("inlineCode",{parentName:"em"},"prop")," ",(0,o.kt)("inlineCode",{parentName:"em"},"key")," siempre debe ser ",(0,o.kt)("strong",{parentName:"em"},"\xfanica")," entre ",(0,o.kt)("strong",{parentName:"em"},"renderizados")," dentro del ",(0,o.kt)("strong",{parentName:"em"},"\xe1mbito")," del bucle, de lo contrario el ",(0,o.kt)("strong",{parentName:"em"},"rendimiento")," del ",(0,o.kt)("strong",{parentName:"em"},"renderizado")," de ",(0,o.kt)("strong",{parentName:"em"},"React")," puede verse ",(0,o.kt)("strong",{parentName:"em"},"afectado"),". Debe ",(0,o.kt)("strong",{parentName:"em"},"evitarse")," usar el ",(0,o.kt)("strong",{parentName:"em"},"\xedndice")," del ",(0,o.kt)("inlineCode",{parentName:"em"},"array")," como ",(0,o.kt)("strong",{parentName:"em"},"valor"),".")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"En una ",(0,o.kt)("strong",{parentName:"p"},"colecci\xf3n de elementos o componentes")," donde la ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," es el ",(0,o.kt)("strong",{parentName:"p"},"\xedndice")," de la posici\xf3n en el ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,o.kt)("strong",{parentName:"p"},"React")," ",(0,o.kt)("strong",{parentName:"p"},"recordar\xe1")," los ",(0,o.kt)("strong",{parentName:"p"},"nodos")," del ",(0,o.kt)("strong",{parentName:"p"},"DOM")," dado este valor."),(0,o.kt)("p",null,"En el momento en que el ",(0,o.kt)("strong",{parentName:"p"},"orden")," la colecci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"cambie"),", ",(0,o.kt)("strong",{parentName:"p"},"React")," ",(0,o.kt)("strong",{parentName:"p"},"actualizar\xe1")," el contenido de cada ",(0,o.kt)("strong",{parentName:"p"},"nodo")," del DOM con los ",(0,o.kt)("strong",{parentName:"p"},"valores")," a los que hace ",(0,o.kt)("strong",{parentName:"p"},"referencia")," la propiedad ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Key Index",src:(0,i.Z)("/img/react/keyindex1.png")})),(0,o.kt)("p",null,"Al ",(0,o.kt)("strong",{parentName:"p"},"no")," ser una ",(0,o.kt)("strong",{parentName:"p"},"referencia \xfanica")," para el valor del elemento, ya que var\xeda seg\xfan su posici\xf3n en el ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", se producen ",(0,o.kt)("strong",{parentName:"p"},"efectos no deseados"),". Al seleccionar una opci\xf3n y alterar el orden del ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," de manera aleatoria, se obtiene que el valor de los elementos marcados ha sido actualizado, provocando que los elementos seleccionados no contengan los valores deseados."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Key Index",src:(0,i.Z)("/img/react/keyindex2.png")})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"El ",(0,o.kt)("strong",{parentName:"em"},"valor")," de la propiedad ",(0,o.kt)("inlineCode",{parentName:"em"},"key")," puede de cualquier tipo ",(0,o.kt)("strong",{parentName:"em"},"primitivo"),".")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("em",{parentName:"p"},"La propiedad ",(0,o.kt)("inlineCode",{parentName:"em"},"key")," es de uso ",(0,o.kt)("strong",{parentName:"em"},"interno")," y no ser\xe1 mostrada dentro del objeto ",(0,o.kt)("inlineCode",{parentName:"em"},"props")," que recibe un componente como argumento.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/lists-and-keys.html"},"Listas y keys - React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318"},"Index as a key is an anti-pattern"))))))}k.isMDXComponent=!0}}]);