import { useState } from 'react'

const ConditionalRender = () => {
    const [x, setX] = useState(false)
    const [newRender, setNewRender] = useState(true)

    const [request] = useState('waiting')

    const renderArea = () => {
      if(x === true) {
        return (
          <>
            <div>
              <h1>useState results is True</h1>
            </div>
          </>
        )
      }
      return (
        <>
          <h1>useState results is False</h1>
        </>
      )
    }

    function callNewRender() {
      {newRender && <section><h1>Testing</h1></section>}
    }




  return (
    <>
        <h1>Conditional Render with react</h1>
        <br />

        <button onClick={() => setX(!x)}>Change the X</button>
        
        {renderArea()}
        {callNewRender()}

        {request === 'response' ?  <p>Request succesfull - Status 400</p> : ''}


        
    </>
  )
}

export default ConditionalRender