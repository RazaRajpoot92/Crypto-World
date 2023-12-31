import React from 'react'
import {Avatar, Text, Box, Stack, VStack} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16","8"]}
    >

        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>

            <VStack w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ex reprehenderit veniam, quod
                    atque dolor voluptatibus libero enim expedita ratione aspernatur.</Text>
            </VStack>

            <VStack>
                <Avatar boxSize={"28"} mt={["4",'0']} />
                <Text>Our Founder</Text>
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
