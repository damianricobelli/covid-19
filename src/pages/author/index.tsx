import React from "react"
import { Heading, Stack, Box } from "@chakra-ui/react"

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <Stack as={Box} py={20} align={"center"}>
      <Heading>Damián Ricobelli</Heading>
    </Stack>
  )
}

export default index
