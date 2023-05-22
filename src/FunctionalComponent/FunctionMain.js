import React from 'react'
import DATASend from './DATASend'

export default function FunctionMain() {
 const alert1=(data)=>
 {
    alert("I Am Parent Alert"+data)
 }
    return (
    <div>
    <DATASend alert={alert1}/>
    </div>
  )
}
