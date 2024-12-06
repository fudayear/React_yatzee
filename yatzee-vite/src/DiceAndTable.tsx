import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import DiceCompornent from "./DiceCompornent";
import Title from "./Title";

export default function DiceAndTable() {
    return (
        <ChakraProvider value={defaultSystem}>
            <Title />
            <DiceCompornent />
        </ChakraProvider>
    )
}