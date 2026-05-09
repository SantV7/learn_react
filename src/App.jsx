import Events from "./components/Events"
import imgCode from './assets/img/image.png'
import LiRender from "./components/LiRender"
import Objetos from "./components/Objetos"
import ConditionalRender from "./components/ConditionalRender"
import UserData from "./components/UserData"
import CairDetails from "./components/CairDetails"
import FragmentUsage from "./components/FragmentUsage"
import ChildrenTest from "./components/ChildrenTest"
import ExecuteFunc from "./components/ExecuteFunc"
import { useState } from "react"
import MsgStateLift from "./components/MsgStateLift"
import ChangeMsg from "./components/ChangeMsg"
import Habilitacao from "./challenge/habilitação/Habilitacao"



function App() {

  const listCar = [
    {id: 342, brand: 'Ferrari', colorCar: 'Pink', estadoA: true},
    {id: 7442, brand: 'Uno', colorCar: 'Pink', estadoA: true},
    {id: 5224, brand: 'Kombi', colorCar: 'Branca', estadoA: false},
  ]

  function showMsg () {
    alert('Usando o props function')
  }

  const [message, setMessage] = useState(null)

  const handleMsg = (msg) => {
    setMessage(msg)
  }
  



  
  
  return (
    <>
      <Events wellcomeMsg={'Olá, seja bem vindo aos events'}/>

      <img src={imgCode} alt="img com códigos" />

      <div>
        <img src="/girl.png" alt="garota" />
      </div>

      <div>
        <LiRender />
      </div>

      <div>
        <Objetos />
      </div>

      <ConditionalRender />

      <UserData userName={'Vinícius'} age={18} civicSatet={'solteiro(a)'} />

      <CairDetails titleCar={'Velocity'} brandCar={'Ferrari'} colorCar={'red'} launchedCar={2017} estadoA={true}/>

      <CairDetails titleCar={'Uno com escada'} brandCar={'Uno'} colorCar={'branco'} launchedCar={2015} estadoA={false}/>
      <CairDetails titleCar={'tratorzão grandão'} brandCar={'da fazendo'} colorCar={'amarelu'} launchedCar={2008} estadoA={false}/>

      {listCar.map((carItem) => (
        <ul>
          <CairDetails brandCar={carItem.brand} colorCar={carItem.colorCar} estadoA={carItem.estadoA} />
        </ul>
      ))}

      {/* Fragment */}

      <FragmentUsage />
      <FragmentUsage tittleM={'Fragment test'} txtMsg={'testing'}/>


      {/* Children props */}

      <ChildrenTest valueNum={10}>
        <p>Testando children props</p>

        <div>
          <h2>Somente um exemplo dentro de children props</h2>
        </div>
      </ChildrenTest >



      {/* FUNCT PROP */}
      <ExecuteFunc ativeFunction={showMsg}/>

      {/*state Lift */}

      <MsgStateLift resultMsg={message}/>
      <ChangeMsg handleMsg={handleMsg} />

    {/*Desafio habilitação*/}

    <Habilitacao />


    </>
  )
}

export default App

// Uso de props dentro do component
//  o import do img, definimos o nome, o que eu escolhi foi imgCode, logo , precisamos acessar o endPoint da img, dentro de '' ou "", e em <img> usamos o src com chaves {} e dentro delas colocamos o nome dado para a imagem