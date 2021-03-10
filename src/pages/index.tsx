import { FC } from "react"
import uuid from "react-uuid"
import { useRouter } from "next/router"
import Head from "next/head"
import {
  Container,
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Spinner,
  Center
} from "@chakra-ui/react"

import { ICardNews, NewsCard } from "@components/ui/BlogCard"
import { Error, LoadingSlow } from "@components/common/SWR"
import { useCovidData } from "@hooks/useCovidData"
import { StaticsCard } from "@components/ui/StaticsCard"

const ITEMS: Array<ICardNews> = [
  {
    image: "/assets/img/continents/north-america.svg",

    subtitle: "North America",
    href: "northamerica"
  },
  {
    image: "/assets/img/continents/south-america.svg",
    subtitle: "South America",
    href: "southamerica"
  },
  {
    image: "/assets/img/continents/asia.svg",
    subtitle: "Asia",
    href: "asia"
  },
  {
    image: "/assets/img/continents/africa.svg",
    subtitle: "Africa",
    href: "africa"
  },
  {
    image: "/assets/img/continents/europe.svg",
    subtitle: "Europe",
    href: "europe"
  },
  {
    image: "/assets/img/continents/oceania.svg",
    subtitle: "Oceania",
    href: "australia"
  }
]

const Items: Function = ({ router }): JSX.Element[] => {
  return ITEMS.map((item) => (
    <Box
      key={uuid()}
      py={{ base: 10, md: 12 }}
      px={{ base: 0, sm: 10 }}
      onClick={(e) => router(e, item.href)}
    >
      <NewsCard
        image={item.image}
        title={item.title}
        subtitle={item.subtitle}
        href={item.href}
        isMap={true}
      />
    </Box>
  ))
}

const Home: FC = ({}) => {
  const router = useRouter()

  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    router.push({
      pathname: "/[continent]",
      query: { continent: href }
    })
  }

  const { data, error, isLoadingSlow } = useCovidData({
    path: "world"
  })

  if (error) {
    return <Error />
  }

  let spinner = null

  if (!data && !isLoadingSlow) {
    spinner = (
      <Center pb={20}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    )
  }

  if (!data && isLoadingSlow) {
    return <LoadingSlow />
  }

  let statics = []
  if (data) {
    statics = [
      { title: "TOTAL CASES", value: data[0].TotalCases, color: "green.400" },
      { title: "NEW CASES", value: data[0].NewCases, color: "green.400" },
      {
        title: "ACTIVE CASES",
        value: data[0].ActiveCases,
        color: "yellow.400"
      },
      {
        title: "CRITICAL",
        value: data[0].Serious_Critical,
        color: "orange.400"
      },
      { title: "TOTAL DEATHS", value: data[0].TotalDeaths, color: "red.400" },
      { title: "NEW DEATHS", value: data[0].NewDeaths, color: "red.400" }
    ]
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
      {spinner ? spinner : <StaticsCard data={statics} />}
      <Flex
        px={{ base: 0, sm: 10 }}
        pb={10}
        wrap={"wrap"}
        direction={"row"}
        justify="center"
        align="center"
      >
        <Items router={handleClick} />
      </Flex>
    </>
  )
}

export default Home
