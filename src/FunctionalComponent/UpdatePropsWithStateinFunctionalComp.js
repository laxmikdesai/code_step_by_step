import React from 'react'

export default function UpdatePropsWithStateinFunctionalComp(props) {
  return (
    <div>
     <h1> {props.data}</h1><br></br>
   <h2>  Hobby {props.hobby.game}</h2>
    </div>
  )
}
