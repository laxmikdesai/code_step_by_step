import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate();
 const navigateto=(url)=>{
 navigate(url);
  //2nd way of navigation codding
 //let x=true;
//  if(x){
//   navigate("./abaut");
//  }
//  else{
//   navigate("./filter");
//  }
 
 }
  return (
    <div className='container'>
      <h1>Welcome to Home</h1><br/>
      <h1>First Way to navigate with codding</h1>
      {/* 
      <button onClick={()=>navigate('/abaut')}>Abaut page</button><br/>
      <button onClick={()=>navigate('/filter')}>Filter page</button><br/> */}
      <button onClick={()=>navigateto("/abaut")}>Abaut page</button><br/>
      <button onClick={()=>navigateto("/filter")}>Filter page</button><br/>
    </div>
  )
}
