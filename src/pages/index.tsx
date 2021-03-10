import { FC } from "react"
import uuid from "react-uuid"
import { useRouter } from "next/router"
import Head from "next/head"
import { Container, Box, Heading, Text, Stack, Flex } from "@chakra-ui/react"

import { ICardNews, NewsCard } from "@components/ui/BlogCard"

const ITEMS: Array<ICardNews> = [
  // {
  //   image: "/assets/img/continents/all-world.svg",
  //   title: "All world",
  //   subtitle: "Covid statistics in the world",
  //   href: "world"
  // },
  {
    image: "/assets/img/continents/north-america.svg",
    title: "North America",
    subtitle: "Covid statistics in North America",
    href: "northamerica"
  },
  {
    image: "/assets/img/continents/south-america.svg",
    title: "South America",
    subtitle: "Covid statistics in South America",
    href: "southamerica"
  },
  {
    image: "/assets/img/continents/asia.svg",
    title: "Asia",
    subtitle: "Covid statistics in Asia",
    href: "asia"
  },
  {
    image: "/assets/img/continents/africa.svg",
    title: "Africa",
    subtitle: "Covid statistics in Africa",
    href: "africa"
  },
  {
    image: "/assets/img/continents/europe.svg",
    title: "Europe",
    subtitle: "Covid statistics in Europe",
    href: "europe"
  },
  {
    image: "/assets/img/continents/oceania.svg",
    title: "Oceania",
    subtitle: "Covid statistics in Oceania",
    href: "australia"
  }
]

const Items: Function = ({ router }): JSX.Element[] => {
  return ITEMS.map((item) => (
    <Box
      key={uuid()}
      py={{ base: 10, md: 12 }}
      px={10}
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

const Home: FC = () => {
  const router = useRouter()

  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    router.push({
      pathname: "/[continent]",
      query: { continent: href }
    })
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
        px={20}
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
