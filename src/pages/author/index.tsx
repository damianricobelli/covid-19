import Image from "next/image"
import {
  Button,
  Center,
  Stack,
  Box,
  Text,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Container
} from "@chakra-ui/react"

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Container bg={useColorModeValue("#F9F9F9", "gray.700")} maxW={"100%"}>
        <Stack
          py={{ base: 20, md: 28 }}
          px={{ base: 10, md: 20 }}
          align="center"
          justify="center"
        >
          <Flex spacing={{ base: 6, md: 10 }}>
            <Box w={{ base: "100%", md: "70%" }}>
              <Text
                fontWeight={"300"}
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                  md: "3xl",
                  lg: "4xl",
                  xl: "6xl"
                }}
              >
                👋 Hi, I am <b>Damián Ricobelli</b>
              </Text>
              <Text fontSize={{ sm: "xl", md: "lg", lg: "xl" }} pt={4}>
                Developer, tech enthusiast and designer, with more than 4 years
                of experience in development, team leadership and digital
                products. Collaborating on the creation of digital products &
                driving the execution of of projects. I am currently working as
                Frontend Developer at{" "}
                <ChakraLink href="https://www.fluxitsoft.com/" isExternal>
                  @FluxIT
                </ChakraLink>
                .
              </Text>
            </Box>
            <Box
              display={{ base: "none", md: "block" }}
              w={{ md: "40%" }}
              align="center"
              justify="center"
            >
              <Image
                src="/assets/img/image.png"
                alt="Picture of the author"
                width={240}
                height={240}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Container maxW={"100%"}>
        <Stack pt={{ base: 10, md: 28 }} pb={10} px={{ base: 10, md: 20 }}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "50%" }} direction={"column"}>
              <Text
                fontWeight={"300"}
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                  md: "3xl",
                  lg: "4xl",
                  xl: "6xl"
                }}
              >
                Experiencie 💼
              </Text>
              <Text fontSize={{ sm: "xl", md: "lg", lg: "xl" }} pt={2}>
                You can also contact me through my social networks.
              </Text>
              <Stack as={Box} pt={2} direction={"row"} spacing={4}>
                <Button colorScheme="green">
                  <Stack
                    as={Box}
                    direction={"row"}
                    justify={"stretch"}
                    spacing={2}
                  >
                    <ChakraLink
                      href="https://www.linkedin.com/in/damianricobelli/"
                      isExternal
                    >
                      Linkedin
                    </ChakraLink>
                    <AiFillLinkedin style={{ marginTop: 1 }} />
                  </Stack>
                </Button>
                <Button colorScheme="green">
                  <Stack
                    as={Box}
                    direction={"row"}
                    justify={"stretch"}
                    spacing={2}
                  >
                    <ChakraLink
                      href="https://twitter.com/damianricobelli"
                      isExternal
                    >
                      Twitter
                    </ChakraLink>
                    <AiOutlineTwitter style={{ marginTop: 1 }} />
                  </Stack>
                </Button>
              </Stack>
              <Text
                pt={10}
                fontWeight={"300"}
                fontSize={{
                  base: "3xl",
                  sm: "3xl",
                  md: "2xl",
                  lg: "3xl",
                  xl: "5xl"
                }}
              >
                Projects 🚀
              </Text>
              <Text fontSize={{ sm: "xl", md: "lg", lg: "xl" }} pt={2}>
                Some starred side projects
              </Text>
              <Stack as={Box} pt={2} direction={"row"} spacing={4}>
                <Button colorScheme="green">
                  <Stack
                    as={Box}
                    direction={"row"}
                    justify={"stretch"}
                    spacing={2}
                  >
                    <ChakraLink
                      href="https://www.linkedin.com/in/damianricobelli/"
                      isExternal
                    >
                      Repositories
                    </ChakraLink>
                    <AiFillGithub style={{ marginTop: 1 }} />
                  </Stack>
                </Button>
              </Stack>
            </Box>
            <Box
              w={{ base: "100%", md: "50%" }}
              pt={{ base: 20, md: 0 }}
              direction={"column"}
            >
              <Text fontSize="sm">2020 — PRESENT</Text>
              <Text fontSize="xl" fontWeight="semibold">
                <ChakraLink href="https://www.fluxitsoft.com/" isExternal>
                  Flux IT
                </ChakraLink>
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Frontend Developer
              </Text>
              <Text fontSize="lg" my={2} mb={8}>
                Frontend Development with Angular for AutoPlaza project (Chile)
                Currently I am part of a Frontend development team with React
                JS, for a Telecom Argentina project.
              </Text>
              <Text fontSize="sm">2019 — PRESENT</Text>
              <Text fontSize="xl" fontWeight="semibold">
                <ChakraLink href="https://info.cookep.com/" isExternal>
                  Cookep (Startup)
                </ChakraLink>
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Co-founder & Frontend Developer
              </Text>
              <Text fontSize="lg" mt={2} mb={8}>
                In charge of the frontend development of the B2B service and
                e-commerce site to improve the relationship with customers of
                the gastronomic services.
              </Text>
              <Text fontSize="sm">2020 - 2020</Text>
              <Text fontSize="xl" fontWeight="semibold">
                <ChakraLink href="https://www.doc24.com.ar/" isExternal>
                  DOC24
                </ChakraLink>
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Frontend Developer
              </Text>
              <Text fontSize="lg" my={2} mb={8}>
                Frontend development of mobile platforms and applications
                focused on the telemedicine area
              </Text>
              <Text fontSize="sm">2017 - 2020</Text>
              <Text fontSize="xl" fontWeight="semibold">
                Freelancer Developer
              </Text>
              <Text fontSize="lg" my={2} mb={8}>
                Fullstack developer of multiple digital projects
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Center>
        <Stack
          py={{ base: 10, md: 20 }}
          px={{ base: 10, md: 20 }}
          direction={"column"}
          align="center"
          justify="center"
        >
          <Text fontSize={"4xl"}>Thank you! 🙌</Text>
          <Text fontSize={{ sm: "lg", md: "lg", lg: "xl" }} textAlign="center">
            This is me. Reach me out and tell me about you.
          </Text>
        </Stack>
      </Center>
    </>
  )
}

export default index
