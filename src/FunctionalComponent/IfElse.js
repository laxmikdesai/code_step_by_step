import { useState } from "react"

export default function IfElse(){
    const[logedIn,login]=useState(1)
    return(
        <div>Process of IfElse
        {/* {logedIn?<h1>Welcome Laxmi</h1>:<h1>welcome Guest</h1>} */}
        {logedIn==1?<h1>welcome 1<sup>st</sup> user</h1>:logedIn==2?<h1>welcome 2<sup>nd</sup> user</h1>:<h1>Welcome Guest</h1>}
        </div>
    )

}