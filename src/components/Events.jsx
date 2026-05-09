import { useState } from "react"
const Events = ({wellcomeMsg}) => {
  const handleTest = () => console.log("butão clicado")

  const [inputARef, setInputA] = useState('')
  const [inputBRef, setInputB] = useState('')
  const [showArea, setShowArea] = useState(true)
  const [valorAc, setValorAc] = useState(true)

  const [valorResult, setValorResult] = useState(0)

    function soma(a, b) {
      setValorResult(Number(a) + Number(b))
      setValorAc(valorAc)
    }





return (
        <>
        <h2>{wellcomeMsg}</h2>

        <br/>

        <button onClick={handleTest}>Clique aqui</button>

        <input type="text" onChange={(e) => setInputA(e.target.value)}/>
        <input type="text" onChange={(e) => setInputB(e.target.value)}/>

        {valorAc ? valorResult : ''}

        <button onClick={() => soma(inputARef, inputBRef)}>Somar</button>
        <button onClick={() => setShowArea(!showArea)}>Alterar estado do showArea</button>

       {showArea ? <h1>Testando o Render Condicional</h1> : ''}
       
        </>
  )
}

export default Events

// Usamos o onChange, pra capturar mudanças dos inputs, como digitação.
// O (e) captura um evento, o e.target.value, busca o alvo do evento, que é o valor