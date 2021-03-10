import { FC } from "react"
import Head from "next/head"
import { useCovidData } from "@hooks/useCovidData"
import { useRouter } from "next/router"
import uuid from "react-uuid"
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Flex,
  Skeleton,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"

import { NewsCard } from "@components/ui/BlogCard"

interface indexProps {
  posts: any
}

const Item: Function = ({ router, item }): JSX.Element => (
  <Box m={10}>
    <NewsCard
      image={`../../../assets/img/countries/${item.TwoLetterSymbol}.svg`}
      isFlag={true}
      title={item.Continent}
      subtitle={item.Country}
      href={item.id}
    />
  </Box>
)

const index: FC<indexProps> = () => {
  const router = useRouter()
  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    router.push({
      pathname: "/[continent]",
      query: { continent: href }
    })
  }
  let path = null
  let subtitle = null
  switch (router.query.continent) {
    case "australia":
      path = "australia"
      subtitle = "Australia"
      break
    case "africa":
      path = "africa"
      subtitle = "Africa"
      break
    case "europe":
      path = "europe"
      subtitle = "Europe"
      break
    case "northamerica":
      path = "northamerica"
      subtitle = "North America"
      break
    case "southamerica":
      path = "southamerica"
      subtitle = "South America"
      break
    case "asia":
      path = "asia"
      subtitle = "Asia"
      break
    default:
      break
  }
  const { data, error, isLoadingSlow } = useCovidData({
    path: path
  })

  console.log(isLoadingSlow)

  if (error) {
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

  if (!data && !isLoadingSlow) {
    return (
      <>
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
        <Stack as={Box} align="center" justify="center">
          <Flex
            px={10}
            wrap={"wrap"}
            direction={"row"}
            justify="center"
            align="center"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
              <Box
                height={"100%"}
                key={uuid()}
                padding="6"
                m={10}
                boxShadow="lg"
                rounded={"lg"}
                bg="white"
                maxW={"268px"}
                w={"full"}
              >
                <Center>
                  <Skeleton
                    height={118}
                    width={200}
                    position={"relative"}
                    mt={-12}
                    rounded={"lg"}
                  />
                </Center>
                <Skeleton mt={10} height={6} />
              </Box>
            ))}
          </Flex>
        </Stack>
      </>
    )
  }

  if (!data && isLoadingSlow) {
    return (
      <>
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
        <Stack as={Box} align="center" justify="center">
          <Flex
            px={10}
            wrap={"wrap"}
            direction={"row"}
            justify="center"
            align="center"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
              <Box
                height={"100%"}
                key={uuid()}
                padding="6"
                m={10}
                boxShadow="lg"
                rounded={"lg"}
                bg="white"
                maxW={"268px"}
                w={"full"}
              >
                <Center>
                  <Skeleton
                    height={118}
                    width={200}
                    position={"relative"}
                    mt={-12}
                    rounded={"lg"}
                  />
                </Center>
                <Skeleton mt={10} height={6} />
              </Box>
            ))}
          </Flex>
        </Stack>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Covid World</title>
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
            Covid data
            <br />
            <Text as={"span"} color={"green.400"}>
              {subtitle}
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Flex
        px={10}
        wrap={"wrap"}
        direction={"row"}
        justify="center"
        align="center"
      >
        {data.map((item: any) => (
          <Item item={item} router={handleClick} />
        ))}
      </Flex>
    </>
  )
}

export default index
