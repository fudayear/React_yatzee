import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Dice from "./Dice";

export default function DiceCompornent() {
    return (
        <ChakraProvider value={defaultSystem}>
            <div>
                <Dice />
            </div>
        </ChakraProvider>
    )
}