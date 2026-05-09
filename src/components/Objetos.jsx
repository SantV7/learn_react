import { useState } from "react"

const Objetos = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Vy', age: 32},
        {id: 2, name: 'Vini', age: 18},
        {id: 3, name: 'girl', age: 25},
    ])

    const [exemplePrev, setExemplePrev] = useState([
      {age:46, estudante: 'Ale'},
      {age:18, estudante: 'Vini'},
      {age:24, estudante: 'Julia'},
      {age:13, estudante: 'Felica'},
    ])
    

    const [products] = useState([
      {id: 1, product:"Rtx 5060 Prime"},
      {id: 2, product:"16Gb Ram White"},
      {id: 3, product:"Ryzen 5 7600X"}
    ])

    const ramdomDelete = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

    const verifyAge = () => {
      setExemplePrev((PrevExemple) => {
         return PrevExemple.filter((validatorAge) => validatorAge.age <= 18 )
      })
    }



    

  return (
    <>
      <ul>
        {users.map((userItem) => (
          <li key={userItem.id}>{userItem.name} - Age: {userItem.age}</li>
        ))}       
      </ul>


      <ul>
        {products.map((productItem) => (
          <li key={productItem.id}>{productItem.product}</li>
        ))}
      </ul>

      <button onClick={ramdomDelete}>Delete ramdom user in list</button>]
      <button onClick={verifyAge}>validar idade</button>
    </>
  )
}

export default Objetos