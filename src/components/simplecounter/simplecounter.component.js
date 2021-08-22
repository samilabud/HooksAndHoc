import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

const SimpleCounter = () =>{
  const [counter, setCounter] = useState(0);
  let history = useHistory();
  return (
    <div>
      <div>
        <h3>The Counter Is</h3> 
        <strong>{counter}</strong>
      </div>
     <div>
      <button onClick={()=>{setCounter(counter+1)}}>Increase Counter</button>
      <button onClick={()=>{
        history.push({
          pathname: '/randomAPI',
          state: { name: 'Redirigido con useHistory' }
        })  }}>Ir a RandomAPI</button>
      </div>
    </div>
  )
}

export default SimpleCounter;