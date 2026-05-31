import { Braces } from 'lucide-react';
import FormLearn from './components/FormLearn';
import '../src/global.css'

function App() {
  

  return (
    <>
      <h1 style={{textAlign: 'center', color: 'white'}}>Form Learn | <Braces size={33} color='orange' style={{marginBottom: '-7.5px'}}/> </h1>

      <FormLearn />
    </>
  )
}

export default App
