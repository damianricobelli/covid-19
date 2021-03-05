import { FC } from "react"
import Head from "next/head"
import { Container, Box, Heading, Text, Stack } from "@chakra-ui/react"
import SearchSection from "./Search"

const Home: FC = () => {
  console.log("hola")
  return (
    <>
      <Head>
        <title>CoviWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            Covid vaccination progress
            <br />
            <Text as={"span"} color={"green.400"}>
              around the world
            </Text>
          </Heading>
        </Stack>
      </Container>
      <SearchSection />
    </>
  )
}

export default Home
