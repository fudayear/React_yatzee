import { Box, ChakraProvider, defaultSystem, Image } from "@chakra-ui/react";

type DiceProps = {
    value: number;
    onDiceLock: () => void
}

const diceImages: { [key: number]: string } = {
    1: '/images/dice-1.png',
    2: '/images/dice-2.png',
    3: '/images/dice-3.png',
    4: '/images/dice-4.png',
    5: '/images/dice-5.png',
    6: '/images/dice-6.png',
};


const Dice = ({ value, onDiceLock }: DiceProps) => {
    let diceImage = diceImages[value] || '/images/dice-5.png';

    return (
        <ChakraProvider value={defaultSystem}>
            <Box display="inline-block" border="1px solid" borderColor="gray.200" borderRadius="md" onClick={onDiceLock} >
                <Image src={diceImage} alt={`Dice face with value ${value}`} boxSize="100px" />
            </Box>
        </ChakraProvider>
    )
}

export default Dice;