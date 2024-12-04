import { ChakraProvider, defaultSystem, Heading } from "@chakra-ui/react";

export default function Title() {

    return (
        <ChakraProvider value={defaultSystem}>
            <div>
                <Heading fontWeight="semibold">Yatzee</Heading>
            </div>
        </ChakraProvider>
    )
}