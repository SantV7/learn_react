import React from 'react'

const FragmentUsage = ({tittleM = 'Not inicialize', txtMsg = 'Hello World, default message'}) => {
  return (
    <>
    <h1>{tittleM}</h1>
    <h2>{txtMsg}</h2>
    </>
  )
}

export default FragmentUsage


// Podemos deixar um value default nas props, pra caso elas n recebam nada do component pai