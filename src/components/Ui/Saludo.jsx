import React from 'react'
import './style.css'

export function Saludo() {
  const [nombre, setNombre] = React.useState("")
  const [greatting, setGreating] = React.useState("Bienvenido")

  const handleEvent = () => {
    setGreating('Hola, '+nombre)
  }
  return (
/*     <div className='contador-div'>
      <p>contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div> */

    <div className='contador-div'>
      <h2>{greatting}</h2>
      <input className="input-name" type="text" onChange={(event) => setNombre(event.target.value)} />
      <button className='boton-2' onClick={handleEvent}>Saludar</button>
    </div>
  )
}
