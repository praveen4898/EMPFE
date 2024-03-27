import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Signup from './components/Signup'
import Allroutes from './allroutes/allroutes'

function App() {

  return (
    
    <ChakraProvider>
     
    <Allroutes />
      </ChakraProvider>
   
  )
}

export default App
