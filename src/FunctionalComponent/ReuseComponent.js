import React from 'react'
import SubComponent from './SubComponent'

export default function ReuseComponent() {
 const a=[{name:"laxmi",email:"laxmi@gmail.com",contact:"1111"},{name:"amruta",email:"laxmi@gmail.com",contact:"1111"}]
 function get()
 {
    alert("hii");
 }  
 return (
    <div>
      {a.map((e)=>
        <SubComponent name={e.name} email={e.email} contact={e.contact} fun={get}/>
      )}
    </div>
  )
}
