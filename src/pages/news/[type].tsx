import { FC } from "react"
import { useCovidNews } from "@hooks/useCovidNews"
import { useRouter } from "next/router"
import uuid from "react-uuid"
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react"

import { NewsCard } from "@components/ui/BlogCard"

interface indexProps {
  posts: any
}

const Item: Function = (info: any): JSX.Element => {
  return (
    <Box py={{ base: 10, md: 0 }}>
      <NewsCard
        image={info.data.urlToImage}
        title={info.data.title}
        subtitle={info.data.title}
        href={info.data.link}
      />
    </Box>
  )
}

const index: FC<indexProps> = () => {
  const router = useRouter()
  let path = null
  let title = "Watch the latest news"
  let subtitle = null
  switch (router.query.type) {
    case "vaccine":
      path = "get-vaccine-news"
      subtitle = "about vaccine"
      break
    case "health":
      path = "get-health-news"
      subtitle = "about health"
      break
    case "covid":
      path = "get-coronavirus-news"
      subtitle = "about coronavirus"
      break
    default:
      break
  }
  const {
    data,
    error,
    isLoadingMore,
    isReachingEnd,
    size,
    setSize
  } = useCovidNews({
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
              Looking for the latest news
              <br />
              <Text as={"span"} color={"green.400"}>
                {subtitle}
              </Text>
            </Heading>
          </Stack>
        </Container>
        <Stack as={Box} align="center" justify="center">
          <SimpleGrid
            py={{ base: 8, md: 8 }}
            px={10}
            spacing={{ base: 6, md: 20 }}
            columns={{ base: 1, md: 2, lg: 3 }}
          >
            {[0, 1, 2, 3, 4, 5].map((el) => (
              <Box
                height={"100%"}
                key={uuid()}
                padding="6"
                boxShadow="lg"
                bg="white"
                w={"330px"}
              >
                <Skeleton height={230} width={282} rounded={"lg"} />
                <SkeletonText mt="4" noOfLines={1} spacing="4" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </>
    )
  }

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
            {title}
            <br />
            <Text as={"span"} color={"green.400"}>
              {subtitle}
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
          {data.map((el) => {
            return el.news.map((data: any) => <Item key={uuid()} data={data} />)
          })}
        </SimpleGrid>
        <Button
          disabled={isLoadingMore || isReachingEnd}
          my={20}
          colorScheme="green"
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "Loading..."
            : isReachingEnd
            ? "No more news"
            : "Load more"}
        </Button>
      </Stack>
    </>
  )
}

export default index
