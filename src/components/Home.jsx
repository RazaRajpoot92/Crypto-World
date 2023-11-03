import React from "react";
import {Box, Image, Text} from "@chakra-ui/react"
import btcimg from "../assets/btc.png"
import {motion} from "framer-motion"

const Home = ()=>{
    return(
        <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>


            <motion.div style={{
                height:"80vh"
            }}
             animate={{
                translateY:"20px"
             }}

             transition={{
                duration:1,
                repeat:Infinity,
                repeatType:"reverse"
             }}
            >
            <Image src={btcimg} w={"full"} h={"full"} objectFit={"contain"} filter={"grayscale(1)"} />

            </motion.div>

            <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"thin"}

            color={"whiteAlpha.700"}
            mt={"-15"}

            >Crypto World</Text>
        </Box>
    );
}

export default Home;