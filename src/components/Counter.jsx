import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'
// import {}

function Counter() {
  const[range, setRange] = useState("1")
  const dispatch = useDispatch();
  const count  = useSelector(state=>state.counter.value);
  console.log("range",range)
  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:"70px",color:"black"}}>{count}</h1>
        <div>
            <button className='btn btn-danger ms-3'onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-success ms-3' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
            <button className='btn btn-primary ms-3' style={{width:"120px"}} onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <div>
          <input type="text" className="form-contol w-100 mt-5" placeholder='Please enter the range ' style={{border:"blue"}} onChange={(e)=>setRange(e.target.value)}/>
        </div>
    </div>
  )
}

export default Counter