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
  SkeletonText,
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
    case "world":
      path = "world"
      subtitle = "about the world"
      break
    case "australia":
      path = "australia"
      subtitle = "about the countries of Australia"
      break
    case "africa":
      path = "africa"
      subtitle = "about the countries of Africa"
      break
    case "europe":
      path = "europe"
      subtitle = "about the countries of Europe"
      break
    case "northamerica":
      path = "northamerica"
      subtitle = "about the countries of North America"
      break
    case "southamerica":
      path = "southamerica"
      subtitle = "about the countries of South America"
      break
    case "asia":
      path = "asia"
      subtitle = "about the countries of Asia"
      break
    default:
      break
  }
  const { data, error } = useCovidData({
    path: path
  })

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

  if (!data) {
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
            {[0, 1, 2, 3, 4, 5].map((el) => (
              <Box
                height={"100%"}
                key={uuid()}
                padding="6"
                my={{ base: 10, md: 12 }}
                mx={10}
                boxShadow="lg"
                rounded={"lg"}
                bg="white"
                w={"330px"}
              >
                <Skeleton height={230} width={282} rounded={"lg"} />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ))}
          </Flex>
        </Stack>
      </>
    )
  } else {
    console.log(data)
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
              around the world
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
