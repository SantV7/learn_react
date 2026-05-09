import React, { useState } from 'react'
import UserDetail from './UserDetail'

const Habilitacao = () => {

    const [infoPersonal] = useState([
        {id: 1, nome: 'Vinícius', idade: 18, profissao: 'Dev'},
        {id: 2, nome: 'Vy', idade: 15, profissao: 'desempregado e vagabundo'},
        {id: 3, nome: 'Desconhecida', idade: 25, profissao: 'Corretora'}
    ])


  return (
    <>

    {infoPersonal.map((itemList) => (
      <UserDetail
        key={itemList.id}
        nome={itemList.nome}
        idade={itemList.idade}
        profissao={itemList.profissao}
      />
    ))}

    </>
  )
}

export default Habilitacao