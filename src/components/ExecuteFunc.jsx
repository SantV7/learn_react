import React from 'react'

const ExecuteFunc = ({ativeFunction}) => {
  return (
    <>
        <h1>Executando a function</h1>
        <button onClick={ativeFunction}>Ative a função</button>
    </>
  )
}

export default ExecuteFunc