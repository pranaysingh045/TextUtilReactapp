import React, { useEffect, useRef, useState } from 'react'

export default function TestuseRef() {
    //const [count,setCount]=useState(0);// if we set any value then it we will change and re 
    //render till infinite because on every render component re render
    const [inputval,setInputvalue]=useState('');

    // solution :-add useRef then increase count value

    const count=useRef(0)
    const inputfield=useRef('')

    const changeInputField=()=>{
        inputfield.current.style.backgroundColor='red'
        inputfield.current.style.opacity=0.5;
    }

    useEffect(()=>{

       count.current=count.current+1

    //    setCount(count+1); //due to useEffect every time call when state value change and first render
    })// one solution just add [] for stop infinite loop other use useRef hooks
  return (
    <>
    <div className='container'>
        <div>TestuseRef</div>
        <input ref={inputfield} type='text' value={inputval} onChange={(e)=>setInputvalue(e.target.value)} />
        <div className='row'>
        {/* <p>This is value count : {count}</p> */}
        <p>This is value count : {count.current}</p>
        <button className='btn btn-primary' onClick={changeInputField}>Change</button>

        </div>
    </div>
    
    </>
  )
}
