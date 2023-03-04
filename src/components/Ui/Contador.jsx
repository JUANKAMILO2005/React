import React, { useEffect } from 'react'
import './style.css'

export function Contador() {
  const [contador, setContador] = React.useState(0)
  const [color, setColor] = React.useState('')

  useEffect(()=>{
    contador >= 10 ? setColor('max'):setColor('mix')
      

    
  }, [contador])
  return (
    <div className='div_contador'>
    <div id='color' className={color}>
      <p className='p_contador'>Contador</p>
      <h2 className='num_contador'>{contador}</h2>
      <button className='boton-2' onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button className='boton-2' onClick={() => setContador(contador - 1)}>Restar</button>
      <button className='boton-2' onClick={() => setContador(0)}>Recetear</button> 
    </div>
    </div>
  )
}
