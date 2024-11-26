import {
  ChakraProvider,
  defaultSystem
} from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>

      </div>
    </ChakraProvider>
  )
}

export default App