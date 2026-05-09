

const UserData = ({userName, age,civicState}) => {
  return (
    <>

    <h2>O nome de usuario(a) é {userName}</h2>
    <p>idade: {age} anos</p>
    <p>Estado civil: {civicState}</p>
    </>
  )
}

export default UserData