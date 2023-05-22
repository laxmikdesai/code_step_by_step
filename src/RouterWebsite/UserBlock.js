import React from 'react';
import {useParams} from 'react-router-dom';
 function UserBlock() {
  const{id}=useParams();
// console.log(props.match.params.id)
  return (

    <div>
      <h1>hii this is user block:{id}</h1>
    </div>
  )
}
export default UserBlock;