import React from 'react'

export default function FunctionAsProps(props) {
  return (
    <div>
      hii
      <button onClick={props.data}>Click</button>
    </div>
  )
}
