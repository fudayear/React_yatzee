import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Title from "./Title";

export default function DiceAndTable() {
    return (
        <ChakraProvider value={defaultSystem}>
            <div>
                <Title />
            </div>
        </ChakraProvider>
    )
}