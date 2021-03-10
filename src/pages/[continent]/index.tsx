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
  Center
} from "@chakra-ui/react"

import { NewsCard } from "@components/ui/BlogCard"
import { Error, LoadingSlow, LookingData } from "@components/common/SWR"
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
      href={`/${router}/${item.ThreeLetterSymbol.toUpperCase()}`}
    />
  </Box>
)

const index: FC<indexProps> = () => {
  const router = useRouter()
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

  if (error) {
    return <Error />
  }

  if (!data && !isLoadingSlow) {
    return (
      <>
        <LookingData />
        <Stack as={Box} align="center" justify="center">
          <Flex
            px={10}
            wrap={"wrap"}
            direction={"row"}
            justify="center"
            align="center"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
              <Box
                key={uuid()}
                height={"100%"}
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
  } else {
    console.log(data)
  }

  if (!data && isLoadingSlow) {
    return (
      <>
        <LoadingSlow />
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
          <Item key={uuid()} item={item} router={router.query.continent} />
        ))}
      </Flex>
    </>
  )
}

export default index
