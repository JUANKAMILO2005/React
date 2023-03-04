import React,{useRef} from 'react'
import './style.css'

export function Color () {

  const container = useRef();
  const handleChangeColor = event => container.current.style.backgroundColor = event.target.value;

  return (
    <div className='div-color'>
    <div ref={container} className='object'> <p className='p-div'>COLOR</p> </div>
    <input onChange={handleChangeColor} type='color' id='input-color' className='input-color'/>
    </div>
  )
}
