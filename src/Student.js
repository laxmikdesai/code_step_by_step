import React, { forwardRef } from 'react'

 function Student(props,ref) {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  )
}
export default  forwardRef(Student);