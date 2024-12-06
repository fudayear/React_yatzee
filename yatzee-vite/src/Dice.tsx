import { Box, ChakraProvider, defaultSystem, Image } from "@chakra-ui/react";

type DiceProps = {
    value: number;
}

const diceImages: { [key: number]: string } = {

}

export default function Dice() {
    return (
        <ChakraProvider value={defaultSystem}>
            <Box display="inline-block" border="1px solid" borderColor="gray.200" borderRadius="md">
                <Image src={diceImage} alt={`Dice face with value ${value}`} boxSize="100px" />
            </Box>
        </ChakraProvider>
    )
}