import React from 'react'
import {Table} from"react-bootstrap";
export default function Map() {
    const name=[{name:"laxmi", email:"laxmi@gmail.com",city:"Pune"},{name:"Arya", email:"Arya@gmail.com",city:"Mumbai"},{name:"laxmi", email:"laxmi@gmail.com",city:"Pune"}]
//   const name=["laxmi","Arya","Amruta"];
//   const a=name.map((data)=>{
//     return <><table border="1px"><thead><tr><td>{data.name}</td>
//     <td>{data.email}</td> 
//     <td>{data.city}</td></tr></thead></table></>
//   })
    return (
    <div className='container'>
      <Table striped variant='dark'>
     <thead>
     <tr>
        <td>Id</td>
        <td>name</td>
        <td>Email</td>
        <td>city</td>
        </tr>
     </thead>
      <tbody>
       
       
      {name.map((data,i)=>{
      return(
      <tr key={i}> 
        <td>{i+1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.city}</td>
        </tr>
   )} )}
      </tbody>
      </Table>
    </div>
  )
}
