import { ChakraProvider, defaultSystem, Text } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div>
        <Text fontSize="2xl">家計簿アプリ</Text>
      </div>
    </ChakraProvider>
  )
}

export default App