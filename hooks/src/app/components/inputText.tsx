import React, { useState } from 'react'

export const InputText = () => {
  const [ text, setText ] = useState('Hello')

  function handleChange(e: any) {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed+ {text}</p>
    </div>
  )
}


export default InputText