import React from 'react'

export default function Child(props) {
let data="poonam";
    return (
    <div>
    <h1> {props.name}</h1> 
      <button onClick={props.fun}>update</button>
      
    </div>
  )
}
