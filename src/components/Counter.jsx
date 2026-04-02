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
    <div className='flex flex-col items-center justify-center gap-6'>
     <div className='text-5xl font-bold text-red-500'>{count}</div>
      <div className='flex gap-4'>
        <button 
          onClick={()=>dispatch("increment")}
          className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 shadow-md'
        >
          Increment
        </button>
        <button 
          onClick={()=>dispatch("decrement")}
          className='px-6 py-3 bg-white text-red-500 font-semibold rounded-lg border-2 border-red-500 hover:bg-red-50 transition duration-200 shadow-md'
        >
          Decrement
        </button>
        <button 
          onClick={()=>dispatch("reset")}
          className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 shadow-md'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
