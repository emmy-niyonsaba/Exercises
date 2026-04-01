import React,{useReducer} from 'react'

function Counter() {
const initialCount =0;
const [count,dispatch]=useReducer((state,action)=>{
    switch(action){
        case "increment":
            return state +1
            case "decrement":
                return state-1
                    case "reset":
                        return initialCount
                        default:
                            return state
    }

},initialCount)


  return (

    
    <div>
     <h1>Counter:  {count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Counter
