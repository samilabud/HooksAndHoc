import React,{useState} from 'react';

const SimpleCounter = () =>{
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <h3>The Counter Is</h3> 
        <strong>{counter}</strong>
      </div>
     <div>
      <button onClick={()=>{setCounter(counter+1)}}>Increase Counter</button>
      </div>
    </div>
  )
}

export default SimpleCounter;