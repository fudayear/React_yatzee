import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { useState } from "react";
import Dice from "./Dice";

const diceValues: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

const [diceNumber1, setDiceNumber] = useState(0)

export default function DiceCompornent() {

    const diceLockNumber = (value: number) => {
        setDiceNumber(value)
    }

    return (
        <ChakraProvider value={defaultSystem}>
            <div>
                <Dice onDiceLock={() => diceLockNumber} value={diceNumber} />
            </div>
        </ChakraProvider>
    )
}