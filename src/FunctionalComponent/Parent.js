import React from 'react'
import Child from './Child'

export default function Parent() {
 let data="Laxmi Desai";
 function add()
 {
    alert("hii");
 }
    return (
    <>
      
      Welcome to Parent!
      <Child name={data} fun={add}/>
    </>
  )
}
