import React from 'react'
import { BrowserRouter, Link,Route, Routes } from 'react-router-dom'
import UserBlock from './UserBlock';
 function User() {
 const user=[{id:1,name:"laxmi",email:"laxmi@gmail.com"},
 {id:2,name:"nisha",email:"laxmi@gmail.com"},
 {id:3,name:"harashali",email:"laxmi@gmail.com"},
 {id:4,name:"Amruta",email:"laxmi@gmail.com"},
 {id:5,name:"Priyanka",email:"laxmi@gmail.com"}

]
    return (
       
    <div>hii
      {user.map((e)=>
        // <div><Link to={`/user + ${e.name}`}>{e.name}</Link></div>
        
        <div>
            <Link to={"/user/" + e.id+"/"+e.name} element={<UserBlock/>}>{e.name}</Link>
            
            <Routes> <Route path={"/userblock/id"} element={<UserBlock/>}/> 
            </Routes>
           
           </div>

           
      )}
       
    </div>
    
  )
}
export default User;