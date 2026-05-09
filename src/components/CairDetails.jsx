import React from 'react'

const CairDetails = ({titleCar, brandCar, colorCar,  estadoA}) => {
  return (
    <>
    <div id='details'>
        <h1>{titleCar}</h1>
        <ul>
            <li>Marca: {brandCar}</li>
            <li>Cor: {colorCar}</li>
            <li>Estado: {estadoA ? 'Novo' : 'Usado'}</li>
        </ul>
    </div>
    </>
  )
}

export default CairDetails