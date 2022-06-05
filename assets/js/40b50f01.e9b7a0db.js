"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[399],{9453:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=t(4996),s=t(2004),l=["components"],c={sidebar_position:2,slug:"/effect"},d="Ciclo de vida",p={unversionedId:"rendering/useeffect",id:"rendering/useeffect",title:"Ciclo de vida",description:"En React, cada componente pasa por diferentes fases durante su vida.",source:"@site/docs/rendering/useeffect.md",sourceDirName:"rendering",slug:"/effect",permalink:"/react-course/effect",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/effect"},sidebar:"reactSidebar",previous:{title:"Estado",permalink:"/react-course/state"},next:{title:"Referencias",permalink:"/react-course/ref"}},m={},u=[],k={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ciclo-de-vida"},"Ciclo de vida"),(0,r.kt)("p",null,"En ",(0,r.kt)("strong",{parentName:"p"},"React"),", cada componente pasa por diferentes fases durante su vida."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{alt:"Virtual DOM",width:"100%",src:(0,i.Z)("/img/react/life-cycle.png")})),(0,r.kt)("p",null,"La fase de ",(0,r.kt)("strong",{parentName:"p"},"Mounting")," significa que el componente est\xe1 en proceso de insertar su contenido en el DOM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updating")," se llama cuando el componente est\xe1 siendo actualizado. La actualizaci\xf3n de un componente se produce cuando hay un cambio en el estado del componente o de sus propiedades."),(0,r.kt)("p",null,"La \xfaltima fase ",(0,r.kt)("strong",{parentName:"p"},"Unmounting")," se llama cuando un componente tiene que ser eliminado del DOM."),(0,r.kt)("p",null,"Con ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," es posible acceder al ciclo de vida, recibe una funci\xf3n, como primer par\xe1metro, que es ejecutada cada vez que un componente es renderizado, el segundo par\xe1metro es opcional, es un ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," de dependencias que en caso de ser actualizadas provocan la ejecuci\xf3n de la funci\xf3n."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," es ejecutado cuando se cumple una de las condiciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Por un cambio de estado (",(0,r.kt)("inlineCode",{parentName:"li"},"useState"),") propio o de un ancestro."),(0,r.kt)("li",{parentName:"ul"},"Por recibir propiedades nuevas"),(0,r.kt)("li",{parentName:"ul"},"La primera vez que el componente se monta.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Al a\xf1adir el ",(0,r.kt)("strong",{parentName:"em"},"efecto"),", la funci\xf3n es ejecutada cada vez que el componente se renderiza.")))),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react';\n\nconst Component = () => {\n  useEffect(() => {\n    console.log('mounting & updating')\n  });\n}\n\nexport default Component;\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," retorna una funci\xf3n que es ejecutada cuando el componente es renderizado o se desmonta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react';\n\nconst Component = () => {\n  useEffect(() => {\n    console.log('mounting & updating')\n    return () => console.log('unmounting');\n  });\n}\n\nexport default Component;\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Cada vez que el componente se renderiza se van acumulando nuevos intervalos."),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/accumulates.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"La funci\xf3n de retorno de ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," limpia el intervalo de manera que cada vez que el componente se renderiza lo detiene."),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/cleanup-2-v2.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"La funci\xf3n ejecutada cuando el componente se desmonta, permite evitar comportamientos activos despu\xe9s de eliminar el componente del DOM.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Para evitar que ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," sea ejecutado una vez el componente ha sido renderizado, se a\xf1ade un ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," vac\xedo como segundo par\xe1metro de la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),". Este uso del ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," se suele relacionar con la carga de datos al renderizar componentes, en este caso, se modifica el ",(0,r.kt)("strong",{parentName:"p"},"hook")," que se encarga de los datos para cargar el listado de pa\xedses de forma remota."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.4-rendering/src/hooks/useCountries.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{playing:!0,loop:!0,url:(0,i.Z)("/vids/react/effect-2.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," no ser\xe1 ejecutado en los siguientes renderizados si no tiene un listado de dependencias que observar."),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{playing:!0,loop:!0,url:(0,i.Z)("/vids/react/props-1.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," ser\xe1 ejecutado la primera vez que el componente se renderice y posteriormente cuando las dependencias se actualicen."),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.5-rendering/src/hooks/useCountries.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{playing:!0,loop:!0,url:(0,i.Z)("/vids/react/props-2.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Al utilizar ",(0,r.kt)("inlineCode",{parentName:"em"},"useEffect")," se pueden realizar cambios en el estado del componente y este a su vez volver a ejecutar ",(0,r.kt)("inlineCode",{parentName:"em"},"useEffect"),", es decir, un bucle.")))),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)(s.Z,{playing:!0,loop:!0,url:(0,i.Z)("/vids/react/effect-1.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-effect.html"},"Usando el Hook de efecto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/useeffect/"},"A Visual Guide to useEffect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-how-many-rerenders/"},"How many re-renders is too many?"))))))}f.isMDXComponent=!0}}]);