import { useEffect, useState } from 'react'
import '../src/global.css'
import MyCompo from './components/MyCompo'
import Tester from './components/Tester'


function App() {
  
  const themeWhite = true
  const name = 'vy'
  const redTitle = false
  

  return (
    <>
      <h1>Aprendendo CSS no React</h1>
      <h2 className={themeWhite ? 'case-one' : 'case-two'}>Css Dinamico</h2>
      <h2 style={ name == 'Vy' ? { backgroundColor: 'gray' } : { backgroundColor: 'pink' }}>Css Dinamico 23</h2>

      <MyCompo />


      {/* Classe dinãmica */}
      <h1 className={redTitle ? 'redTitle' : 'normalTitle' }>Tile dynamic</h1>


      {/* CSS Modules - exclusivo do componente */}

      <Tester />
    </>
  )
}

export default App
