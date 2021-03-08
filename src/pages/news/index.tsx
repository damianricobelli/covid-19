import Head from "next/head"
import { useRouter } from "next/router"
import uuid from "react-uuid"
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Container
} from "@chakra-ui/react"

import { ICardNews, NewsCard } from "@components/ui/BlogCard"

const ITEMS: Array<ICardNews> = [
  {
    image: "https://news.usc.edu/files/2020/06/covid_vaccine_stock-824x549.jpg",
    title: "Vaccine",
    subtitle: "Latest news on covid vaccines",
    href: "vaccine"
  },
  {
    image:
      "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
    title: "Health",
    subtitle: "Latest health news around the world",
    href: "health"
  },
  {
    image:
      "http://c.files.bbci.co.uk/D505/production/_115033545_gettyimages-1226314512.jpg",
    title: "Covid",
    subtitle: "Latest news on covid in general",
    href: "covid"
  }
]

const Items: Function = ({ router }): JSX.Element[] => {
  return ITEMS.map((item) => (
    <Box
      key={uuid()}
      py={{ base: 10, md: 0 }}
      onClick={(e) => router(e, item.href)}
    >
      <NewsCard
        image={item.image}
        title={item.title}
        subtitle={item.subtitle}
      />
    </Box>
  ))
}

export default function Blog() {
  const router = useRouter()

  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    router.push({
      pathname: "/news/[type]",
      query: { type: href }
    })
  }
  return (
    <>
      <Head>
        <title>Blog</title>
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
            Latest news
            <br />
            <Text as={"span"} color={"green.400"}>
              around the world
            </Text>
          </Heading>
        </Stack>
      </Container>
      <Stack as={Box} align="center" justify="center">
        <SimpleGrid
          py={{ base: 8, md: 20 }}
          px={10}
          spacing={{ base: 6, md: 20 }}
          columns={{ base: 1, md: 3 }}
        >
          <Items router={handleClick} />
        </SimpleGrid>
      </Stack>
    </>
  )
}
