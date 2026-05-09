import React from 'react'

const UserDetail = ({ nome, idade, profissao }) => {
  return (
    <>
        <div style={{border: '1px solid black', padding: '10px', borderRadius: '7px', marginBottom: '5px'}}>
            <li style={{listStyle: 'none'}}>Nome: {nome}</li>
            <li style={{listStyle: 'none'}}>Idade: {idade} anos</li>
            <li style={{listStyle: 'none'}}>Profissão: {profissao}</li>
            <p>{idade >= 18 ? ' 👍 Permissão para tirar a habilitação' : '❌ Menor de idade'}</p>
        </div>
    </>
  )
}

export default UserDetail