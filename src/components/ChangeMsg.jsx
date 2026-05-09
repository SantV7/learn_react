import React, { useState } from 'react'

const ChangeMsg = ({handleMsg}) => {

    const [messageTxt] = useState([
        'Agita disgrama - bsb',
        'Yo, bakayaro',
        'Eae comédia',
    ])


  return (
    <>
    <button onClick={() => handleMsg(messageTxt[Math.floor(Math.random() * 3)])}>Msg de boas vindas</button>
    
    </>
  )
}

export default ChangeMsg