import {useState} from "react"

const LiRender = () => {
    const [lista] = useState([1,2,3,4,5,6])

    const [users] = useState([
        "Vinícius",
        "Garota que não perguntei o nome",
        "Maria",
        "José"
    ])

    const [newObj] = useState([
      {id: 25, gabinete: 876.34},
      {id: 121, faculdade: 239},
      {id: 6464, corteDeCabelo: 40},
      {id: 31, notebook: 289.90},
      {id: 2414, shopee: 83.63} ,
      {id: 3341, netshoes: 79.99},
      {id: 4141, other: 37.76}
    ])

  return (
        <>
          {lista.map((item, keyId) => (
            <li key={keyId}>{item}</li>
          ))}

         {users.map((itemUsers, keyUsers) => (
            <div key={keyUsers} style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center'}}>
                <h3>Nome:</h3>
                <li style={{listStyle: 'none'}} >{itemUsers}</li>
            </div>
         ))}
         
        </>
  )
}

export default LiRender