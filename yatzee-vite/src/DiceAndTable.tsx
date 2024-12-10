import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import DiceCompornent from "./DiceCompornent";


export default function DiceAndTable() {
    return (
        <ChakraProvider value={defaultSystem}>
            <DiceCompornent />
        </ChakraProvider>
    )
}