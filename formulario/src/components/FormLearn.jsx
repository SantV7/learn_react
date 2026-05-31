
const FormLearn = () => {


 
  return (
    <>
    <form>
      <div>
        <label htmlFor="name"></label>
        <input minLength={1} type="text" name="name" required placeholder="Digite seu nome"/>
      </div>
      
      <button type="submit" >Enviar</button>
    </form>
    </>
  )
}

export default FormLearn