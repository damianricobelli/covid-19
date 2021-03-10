import React from "react"

import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"

interface indexProps {}

export const LoadingSlow: React.FC<indexProps> = ({}) => {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 12, md: 16 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
        >
          Our server is slower than usual
          <br />
          <Text as={"span"} color={"green.400"}>
            Thanks for your patient 🙏
          </Text>
        </Heading>
      </Stack>
    </Container>
  )
}

export const Error: React.FC<indexProps> = ({}) => {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 12, md: 16 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
        >
          Ups...
          <br />
          <Text as={"span"} color={"green.400"}>
            something went wrong
          </Text>
        </Heading>
      </Stack>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>There was a problem loading the data</AlertTitle>
        <AlertDescription>Please try again later.</AlertDescription>
      </Alert>
    </Container>
  )
}

export const LookingData: React.FC<indexProps> = ({}) => {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 12, md: 16 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
        >
          Looking for the latest data...
        </Heading>
      </Stack>
    </Container>
  )
}
