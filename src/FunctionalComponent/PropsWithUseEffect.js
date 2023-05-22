
import { useState } from 'react';
import User from './User';

export default function PropsWithUseEffect() {
  const[data,setData]=useState(10);
  const[count,setCount]=useState(100);
    return (
    <div>
       <User data={data} count={count}/>
       <button onClick={()=>setCount(count+1)}>Update Count</button>

{/* I forgote onClick use callback function allways */}

       <button onClick={()=>setData(data+1)}>Update data</button>
      Welcome
    </div>
  )
}
