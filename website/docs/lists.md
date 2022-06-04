---
sidebar_position: 7
slug: '/lists'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Listados
Una **colección de elementos o componentes**, puede ser representada en ***JSX*** haciendo uso de la función `map` de **JavaScript**.

La función de orden superior `map` retorna los elementos que forman las columnas.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableColumns.jsx
```
<br />

Y a su vez, usando de nuevo `map`, devuelve los componentes que forman las filas de la tabla.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/Table/TableBody.jsx
```
<br />

:::tip
*Todos los **elementos y componentes** de **React** hacen uso de la propiedad `key` de manera interna, es **obligatorio** especificar dicha propiedad en los elementos y componentes **dentro de bucles**.*
:::
<br />

Se extraen los datos de las filas a un fichero **JSON**, el cual es **importado** y es tratado con la función de orden superior `reduce` para obtener el formato necesario por la tabla.
```jsx reference
https://github.com/hondilla/react-course/blob/edge/5.0-lists/src/components/App.jsx
```
<br />

## ¿Para qué la Key?
La `prop` `key` de **React** permite controlar las instancias de los componentes cada vez que se renderizan, llamando a las funciones para recuperar los nuevos elementos que utiliza para actualizar el DOM, si devuelve los mismos tipos de elementos identificados por la `prop` `key` mantiene esos nodos del DOM, aunque todas las `props` hayan cambiado.


:::tip
*La `prop` `key` siempre debe ser **única** entre **renderizados** dentro del **ámbito** del bucle, de lo contrario el **rendimiento** del **renderizado** de **React** puede verse **afectado**. Debe **evitarse** usar el **índice** del `array` como **valor**.*
:::
<br />

En una **colección de elementos o componentes** donde la `key` es el **índice** de la posición en el `array`, **React** **recordará** los **nodos** del **DOM** dado este valor.

En el momento en que el **orden** la colección **cambie**, **React** **actualizará** el contenido de cada **nodo** del DOM con los **valores** a los que hace **referencia** la propiedad `key`.

<p align="center">
  <img alt="Key Index" src={useBaseUrl('/img/react/keyindex1.png')} />
</p>

Al **no** ser una **referencia única** para el valor del elemento, ya que varía según su posición en el `array`, se producen **efectos no deseados**. Al seleccionar una opción y alterar el orden del `array` de manera aleatoria, se obtiene que el valor de los elementos marcados ha sido actualizado, provocando que los elementos seleccionados no contengan los valores deseados.
<p align="center">
  <img alt="Key Index" src={useBaseUrl('/img/react/keyindex2.png')} />
</p>

:::tip
*El **valor** de la propiedad `key` puede de cualquier tipo **primitivo**.*
:::
:::tip
*La propiedad `key` es de uso **interno** y no será mostrada dentro del objeto `props` que recibe un componente como argumento.*
:::

:::info Docs
* [Listas y keys - React](https://es.reactjs.org/docs/lists-and-keys.html)
* [Index as a key is an anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
:::