import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User() {
 const params=useParams();
 const {name}=params;
 const location=useLocation();
 console.log(location)
 return (
    <div>
      <h1>Welcome {name} </h1>
    </div>
  )
}
