 //if we use forward ref we con change child component property as like ref is change current component but when we use forward ref is wrapper.
import React,{ useRef} from 'react'
import Student from '../Student';
// import Student from '../Student';

export default function ForwordRef() {
    let refProperty=useRef(null);

    const update=()=>{
        refProperty.current.value="1000";
        refProperty.current.style.color="red"
    
    }
    return (
    <div>
        <Student ref={refProperty}></Student>
      <button onClick={update}>save</button>
    </div>
  )
}
 