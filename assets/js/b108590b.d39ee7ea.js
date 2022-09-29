"use strict";(self.webpackChunkreact_course_documentation=self.webpackChunkreact_course_documentation||[]).push([[430],{6098:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(4996),l=n(2004),s=["components"],p={sidebar_position:6,slug:"/optimization"},d="Optimizaciones",m={unversionedId:"rendering/optimization",id:"rendering/optimization",title:"Optimizaciones",description:"Cuando se habla de optimizaciones, es importante entender que hace referencia al comportamiento de los componentes de la aplicaci\xf3n, no acerca del algoritmo de reconciliaci\xf3n interno del React.",source:"@site/docs/rendering/optimization.md",sourceDirName:"rendering",slug:"/optimization",permalink:"/react-course/optimization",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/optimization"},sidebar:"reactSidebar",previous:{title:"Estados complejos",permalink:"/react-course/reducer"},next:{title:"Portales",permalink:"/react-course/portals"}},c={},u=[{value:"\xbfCu\xe1ntos re-renders son demasiados?",id:"cu\xe1ntos-re-renders-son-demasiados",level:2},{value:"\xbfCu\xe1ndo debo empezar a optimizar?",id:"cu\xe1ndo-debo-empezar-a-optimizar",level:2},{value:"memo",id:"memo",level:2},{value:"Propiedades primitivas",id:"propiedades-primitivas",level:3},{value:"Propiedades no primitivas",id:"propiedades-no-primitivas",level:3},{value:"useMemo",id:"usememo",level:2},{value:"Sin dependencias",id:"sin-dependencias",level:3},{value:"Con dependencias",id:"con-dependencias",level:3},{value:"useCallback",id:"usecallback",level:2},{value:"Sin dependencias",id:"sin-dependencias-1",level:3},{value:"Con dependencias",id:"con-dependencias-1",level:3},{value:"Lazy &amp; Suspense",id:"lazy--suspense",level:2}],k={toc:u};function v(e){var a=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optimizaciones"},"Optimizaciones"),(0,r.kt)("p",null,"Cuando se habla de ",(0,r.kt)("strong",{parentName:"p"},"optimizaciones"),", es importante entender que hace referencia al comportamiento de los ",(0,r.kt)("strong",{parentName:"p"},"componentes")," de la aplicaci\xf3n, ",(0,r.kt)("strong",{parentName:"p"},"no")," acerca del ",(0,r.kt)("strong",{parentName:"p"},"algoritmo")," de ",(0,r.kt)("strong",{parentName:"p"},"reconciliaci\xf3n")," interno del ",(0,r.kt)("strong",{parentName:"p"},"React"),"."),(0,r.kt)("p",null,"Dentro de este concepto se encuentran todas las ",(0,r.kt)("strong",{parentName:"p"},"acciones")," que es posible ",(0,r.kt)("strong",{parentName:"p"},"realizar")," para conseguir ",(0,r.kt)("strong",{parentName:"p"},"renderizados m\xe1s r\xe1pidos y/o menos frecuentes"),"."),(0,r.kt)("h2",{id:"cu\xe1ntos-re-renders-son-demasiados"},"\xbfCu\xe1ntos re-renders son demasiados?"),(0,r.kt)("p",null,"El n\xfamero de ",(0,r.kt)("strong",{parentName:"p"},"re-rendering")," es una m\xe9trica de rendimiento deficiente. El largo \xe1rbol de componentes de ",(0,r.kt)("strong",{parentName:"p"},"React")," que solo devuelven JSX se puede volver a renderizar muchas veces sin ning\xfan problema de rendimiento. "),(0,r.kt)("p",null,"Por otro lado, un componente que realiza un c\xe1lculo lento en el renderizado puede crear un cuello de botella de rendimiento en el primer montaje."),(0,r.kt)("p",null,"Es importante solucionar las renderizaciones lentas producidas por c\xe1lculos complejos o llamadas externas antes de evitar el ",(0,r.kt)("strong",{parentName:"p"},"re-rendering"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/slow.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-how-many-rerenders/"},"How many re-renders is too many?"))))),(0,r.kt)("h2",{id:"cu\xe1ndo-debo-empezar-a-optimizar"},"\xbfCu\xe1ndo debo empezar a optimizar?"),(0,r.kt)("p",null,"Es tentador comenzar a optimizar ",(0,r.kt)("strong",{parentName:"p"},"re-renders")," innecesarios al comienzo del proyecto. Puede parecer que, de no hacerlo, el proyecto se saldr\xe1 de control, y ser\xeda extremadamente dif\xedcil solucionar los problemas de rendimiento a posteriori. "),(0,r.kt)("p",null,"En la pr\xe1ctica, es posible corregir los cuellos de botella de rendimiento con la misma facilidad en las etapas posteriores del desarrollo."),(0,r.kt)("p",null,"Por lo tanto, una buena estrategia es, no micro-optimizar los reprocesamientos prematuramente y comenzar a solucionar los problemas de rendimiento cuando sean evidentes. Herramientas como la limitaci\xf3n de la CPU de Chrome DevTools para ver c\xf3mo se comporta la aplicaci\xf3n en dispositivos de gama baja, ayuda a detectar problemas de rendimiento reales."),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/react-profiler.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/evaluate-performance/"},"Analyze runtime performance - Chrome Developers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-performance-tools/"},"My React App is Slow and I Don't Know Why")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-performance-slow-renders/"},"How to Detect Slow Renders in React?"))))),(0,r.kt)("h2",{id:"memo"},"memo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"memo")," es un ",(0,r.kt)("strong",{parentName:"p"},"HOC")," que se utiliza para ",(0,r.kt)("strong",{parentName:"p"},"memorizar")," un ",(0,r.kt)("strong",{parentName:"p"},"componente"),". Al memorizarse, este ",(0,r.kt)("strong",{parentName:"p"},"evita")," ",(0,r.kt)("strong",{parentName:"p"},"renderizarse")," siempre que ninguna de sus ",(0,r.kt)("strong",{parentName:"p"},"propiedades cambie"),"."),(0,r.kt)("p",null,"Una t\xe9cnica para comprobar cuantas veces se renderiza un componente es a\xf1adiendo un efecto en cada uno de ellos que se ejecute en cada renderizaci\xf3n."),(0,r.kt)("p",null,"Para acabar de entender el funcionamiento del ",(0,r.kt)("strong",{parentName:"p"},"HOC")," ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," se reduce el ejemplo a una tabla en la que se introducen pa\xedses mediante un input.\nTodos los componentes hacen uso de un efecto que mostrar\xe1 por consola cuando son renderizados."),(0,r.kt)("p",null,"Se a\xf1ade el efecto al componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumnsSelector>")," y al componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Table/TableColumnsSelector.jsx#L3-L5\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Header/Header.jsx#L21-L29\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Se observa mediante la consola del navegador como los componentes se renderizan cada vez que hay alg\xfan cambio que implique al componente padre ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>"),".\nPara evitar este comportamiento, se envuelven mediante el ",(0,r.kt)("strong",{parentName:"p"},"HOC")," ",(0,r.kt)("inlineCode",{parentName:"p"},"memo"),", consiguiendo que ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumnsSelector>")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>")," sean ",(0,r.kt)("strong",{parentName:"p"},"memorizados")," y solo se ",(0,r.kt)("strong",{parentName:"p"},"rerenderizar\xe1n")," cuando sus propiedades hayan sido ",(0,r.kt)("strong",{parentName:"p"},"actualizadas")," desde el componente padre ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<Header />\n<TableInputButton />\n<TableColumns />\n<TableHead />\n<TableBody />\n<Table />\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Al aplicar ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," a los componentes ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>")," el primero evita volver a renderizarse, pero en el caso de ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>")," estos siguen renderiz\xe1ndose."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.11-rendering/src/components/Table/TableColumnsSelector.jsx#L31\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Header/Header.jsx#L31\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Table/TableInputButton.jsx#L24\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/Table/TableColumns.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<TableInputButton />\n<TableColumns />\n<TableHead />\n<TableRow />\n<TableBody />\n<Table />\n")),(0,r.kt)("p",null,"Es importante entender com\xf3 funciona el renderizado de React para comprender que sucede con los componentes ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>"),".\nAl observar el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>")," la constante ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," encargada de definir las columnas que forman la tabla, se encuentra declarada dentro del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.12-rendering/src/components/App.jsx\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Esto significa que cada vez que el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>")," se renderice, este crea una nueva constante ",(0,r.kt)("inlineCode",{parentName:"p"},"columns"),", una nueva referencia en memoria, el HOC ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," lo interpreta como un cambio de propiedad y renderiza de nuevo el componente."),(0,r.kt)("p",null,"Lo mismo sucede con ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>"),", la funci\xf3n encargada de cambiar el estado se vuelve a crear en cada renderizado del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/bO-z2iCm38HtFuN6bk2X7ZiKIgOEzJiOHuJI-0Sv6Kp9kpUEeVKWA9tk-3WTEZkPbE0Q8xm4T633j3YVYaquzs7nC-M3hNeKgn0bAkLbFpa3eIJq0zB3Zq94OvzcHBYZ2vHB8zZQJsHoNxjFEmVeRaDLRHnkRcNJwg-q_fd-hjh-uB3YiIwudTykOgbYgVxGvXE6AORfDm00",alt:"re-rendering"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"En JavaScript, los objetos son de tipo de referencia. Dos objetos distintos, nunca son iguales, aunque tengan las mismas propiedades.")))),(0,r.kt)("h3",{id:"propiedades-primitivas"},"Propiedades primitivas"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/primitive-value-v3.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("h3",{id:"propiedades-no-primitivas"},"Propiedades no primitivas"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/non-primitive-prop-rerenders-v3.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Una de las soluciones ser\xeda mover la constante ",(0,r.kt)("inlineCode",{parentName:"p"},"columns")," fuera del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>"),".\nDe esta manera el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," no va a rerenderizarse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const columns = [ 'Id', 'Nombre' ];\nconst App = () => {}\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"En este caso la soluci\xf3n es perfectamente aceptable, pero no siempre es posible mover este tipo de datos fuera del componente, para ello React dispone del ",(0,r.kt)("strong",{parentName:"p"},"hook")," ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo"),"."),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/react-api.html#reactmemo"},"API de Alto Nivel de React - React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-render-props/"},"A Visual Guide to React Rendering - Props")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects"},"Comparing objects"))))),(0,r.kt)("h2",{id:"usememo"},"useMemo"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," es un ",(0,r.kt)("strong",{parentName:"p"},"hook")," para memorizar valores, recibe dos par\xe1metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El primero es una funci\xf3n que retorna el valor a memorizar. "),(0,r.kt)("li",{parentName:"ul"},"El segundo es un array con las dependencias a controlar. Si alg\xfana cambia useMemo volver\xe1 a memorizar los valores. Con un array vac\xedo solo se memoriza la primera vez que se renderice el componente.")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.13-rendering/src/components/App.jsx#L11\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Al tener la referencia al array memorizado, las propiedades del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableColumns>")," no van a cambiar y junto con el ",(0,r.kt)("strong",{parentName:"p"},"HOC")," ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," el componente no se va a volver a renderizar."),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/LOmx2e0m44JxFSLWAxc0XI1M5dg79IuYcXWsM8XuTurfj9fXFi-k72EQ470IIjXjtPsFT16bp9ZwxIge61K_Yiv-8Wfi5vu4lRXDZtI5pI1LFjeCUMEWxCQi0pjvtFM3V_OL2c2Fag353G00",alt:"useMemo"})),(0,r.kt)("h3",{id:"sin-dependencias"},"Sin dependencias"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/no-dependencies.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("h3",{id:"con-dependencias"},"Con dependencias"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/final.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usememo"},"Referencia de la API de los Hooks - React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-render-usememo/"},"A Visual Guide to React Rendering - useMemo"))))),(0,r.kt)("h2",{id:"usecallback"},"useCallback"),(0,r.kt)("p",null,"useCallback es un hook para memorizar funciones.\nDe la misma manera que ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," se combina con ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo")," para memorizar las referencias a propiedades, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," se encarga de recordar las referencias a funciones."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El primer par\xe1metro es la funci\xf3n a memorizar."),(0,r.kt)("li",{parentName:"ul"},"El segundo es un array con las dependencias a controlar. Si alg\xfana cambia useCallback volver\xe1 a memorizar la funci\xf3n. Con un array vac\xedo solo se memoriza la primera vez que se renderice el componente.")),(0,r.kt)("p",null,"Cada vez que el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>")," es renderizado la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"setCountry")," se crea de nuevo, creado una nueva referencia en memoria y provocando que el componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>")," se renderice debido a que su propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"setCountry")," ha sido actualizada."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.14-rendering/src/components/App.jsx#L14-L19\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Al utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," para memorizar la referencia de la funci\xf3n en conjunto con ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," para memorizar las propiedades del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<TableInputButton>"),", este no volver\xe1 a renderizarse cuando ",(0,r.kt)("inlineCode",{parentName:"p"},"<App>")," se renderice al cambiar el estado provocado por a\xf1adir un nuevo pa\xeds."),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/JSmx2e0m48JXVaynM2cI2rW8ajf3nBW4CSQmqKB4k_igj9hY7pxhJKfeOiHEA95uqVCQ5jbo-sv11z7TbQgVNmLX9HnwbY4uecZiQ1oZvMcMxMPW7_Ipi1z_vHSgPC2QM1llkmlAJW00",alt:"useCallback"})),(0,r.kt)("h3",{id:"sin-dependencias-1"},"Sin dependencias"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/empty-dependencies.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("h3",{id:"con-dependencias-1"},"Con dependencias"),(0,r.kt)("div",{align:"center"},(0,r.kt)(l.Z,{height:"100%",playing:!0,loop:!0,url:(0,i.Z)("/vids/react/declare-function.mp4"),mdxType:"ReactPlayer"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"El resultado final tendr\xe1 memorizado tanto la referencia a la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"setCountry")," como el ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," ",(0,r.kt)("inlineCode",{parentName:"p"},"columns"),"."),(0,r.kt)("br",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/LOvD2eCm48NtESN3LOju0HS5STL5UuSO1odD7nDT1CdTQoArTZMFuPltZT8o17JUOnMeePnUZ0qv1ffxjzYPuqNjyogI41bjcbivQS7KCDcH-6Kd8RnKRpaH7cGSnzm8LVf_NLZJiUsOPUntOu61-ZxkyoaDRIdzAKzyYmfO0cLLTH0dpnVefTR3zbVr0G00",alt:"useCallback"})),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Se deben utilizar estas optimizaciones solo cuando sea necesario. El algoritmo de reconciliaci\xf3n ",(0,r.kt)("strong",{parentName:"em"},"(React Fiber)")," es muy r\xe1pido y a\xf1adir este tipo optimizaciones donde continuamente se est\xe1n comparando las diferentes propiedades, funciones y componentes puede suponer ralentizar la aplicaci\xf3n.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usecallback"},"Referencia de la API de los Hooks - React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://royi-codes.vercel.app/thousand-usecallbacks/"},"Death by a thousand useCallbacks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alexsidorenko.com/blog/react-render-usecallback/"},"A Visual Guide to React Rendering - useCallback"))))),(0,r.kt)("h2",{id:"lazy--suspense"},"Lazy & Suspense"),(0,r.kt)("p",null,"A medida que la aplicaci\xf3n crece como consecuencia, el tama\xf1o final del fichero .js tambi\xe9n lo hace, esto provoca que el usuario deba esperarse a la descarga total de dicho fichero.\nEn ciertos casos este comportamiento puede no suponer un problema, por ejemplo, aplicaciones internas de la empresa, backoffice...\nPero en un entorno p\xfablico el resultado deseado es poder ofrecer al usuario la p\xe1gina en la mayor brevedad posible."),(0,r.kt)("p",null,"React junto con la importaci\xf3n de m\xf3dulos de JavaScript, proporciona un mecanismo para cargar componentes cuando el navegador los requiera.\nEsto permite al navegador descargar solamente el c\xf3digo de los componentes que en ese momento est\xe1 renderizando, el resto de componentes perezosos se quedar\xe1n a la espera hasta que el navegador los solicite."),(0,r.kt)("p",null,"El componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table>")," solo ser\xe1 importando si el navegador as\xed lo requiere."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.15-rendering/src/components/App.jsx#L3\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Si bien es una soluci\xf3n para el tama\xf1o de los ficheros JavaScript, no mostrar nada durante la carga diferida de los componentes puede suponer un problema para la experiencia de usuario."),(0,r.kt)("p",null,"Para ello React dispone del componente ",(0,r.kt)("inlineCode",{parentName:"p"},"<Suspense>")," mediante el cual envuelve aquellos componentes que son susceptibles de cargar de forma perezosa, recibe mediante la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," un elemento o componente que ser\xe1 renderizado mientras dure la carga del componente perezoso."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/hondilla/react-course/blob/edge/8.15-rendering/src/components/App.jsx#L32-L39\n")),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"El comando ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run build")," genera el c\xf3digo listo para producci\xf3n, al utilizar los componentes diferidos, el fichero final ser\xe1 divido por cada uno de estos.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://es.reactjs.org/docs/code-splitting.html"},"Divisi\xf3n de c\xf3digo - React"))))))}v.isMDXComponent=!0}}]);