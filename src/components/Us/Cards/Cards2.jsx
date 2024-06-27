import { useState } from 'react';
import './Cards.css';

export default function Cards2(){
    
let [count,setCount] = useState(0)
const incrementar = ()=>{
    setCount(count+1)
}

    return(
        <div className='card' onClick={incrementar}>
            <p>{count}</p>
        </div>
    );
}