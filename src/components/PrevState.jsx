import { useState } from "react"

const PrevState = () => {
    const [counter, setCounter] = useState(0)

    function increaseCounter() {
      setCounter((prevCounter) => prevCounter + 1)
    }   

    const [usersAcc, setUsersAcc] = useState([
      {id: 23, name: 'a', tel: 619235844},
      {id: 131, name: 'b', tel: 619312312},
      {id: 92, name: 'c', tel: 619923512},
    ])


    const filterName = () => {
      setUsersAcc((prevUserAcc) => {
        return prevUserAcc.filter((itemFilter) => {
          if(itemFilter.name !== string || itemFilter.tel.lenght !== 11) {
            itemFilter.name, itemFilter.tel
          }
        })
      })
    }

    const addNewUser = () => {
      setUsersAcc((prevUserAcc) => [...prevUserAcc, {id: 6, name: 'd', tel: 619038473}])
    }




  return (
    <>
    <div>{counter}</div>
    <button onClick={increaseCounter}>Increase value</button>
    <button onClick={updateValue}>Increase latested</button>
    <button onClick={filterName}>Check list</button>

    <button onClick={addNewUser}>Add new user</button>
      
    </>
  )
}

export default PrevState