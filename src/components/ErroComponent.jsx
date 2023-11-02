import React from 'react'
import {Alert , AlertIcon,  Stack} from "@chakra-ui/react"

const ErroComponent = ({message}) => {
  return (
    <Stack w={"100%"} h={"90vh"} justify={"center"} alignItems={"center"}>
    <Alert status={"error"} w={"container.lg"}>

        <AlertIcon  />

        {message}
    </Alert>
    </Stack>
  )
}

export default ErroComponent
