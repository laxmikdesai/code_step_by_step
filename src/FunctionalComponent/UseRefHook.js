import React,{useRef} from 'react'

export default function UseRefHook() {
  let useref=useRef();
 const Display=()=>{
    useref.current.style.color="red";
    useref.current.focus();
    // alert(useref.current.value);
    useref.current.style.display="none";
 }

  return (
       
    <div>
      Name:<input type="text" ref={useref}></input>
      <button onClick={Display}>Update</button>
    </div>
  )
}
