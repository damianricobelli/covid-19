import { FC, useState } from "react"
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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Button,
  Kbd
} from "@chakra-ui/react"

import { NewsCard } from "@components/ui/BlogCard"
import { Error, LoadingSlow, LookingData } from "@components/common/SWR"

import { StaticsCard } from "@components/ui/StaticsCard"
interface indexProps {
  posts: any
}

const Item: Function = ({ item, clicked }): JSX.Element => (
  <Box m={10} onClick={() => clicked(item)}>
    <NewsCard
      image={`../../../assets/img/countries/${item.TwoLetterSymbol}.svg`}
      isFlag={true}
      title={item.Continent}
      subtitle={item.Country}
    />
  </Box>
)

const index: FC<indexProps> = () => {
  const router = useRouter()
  const [dataItem, setDataItem] = useState<any>(null)
  const [staticsItem, setStaticsItem] = useState<any>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = (item: any) => {
    setDataItem(item)
    setStaticsItem([
      { title: "TOTAL CASES", value: item.TotalCases, color: "green.400" },
      { title: "NEW CASES", value: item.NewCases, color: "green.400" },
      {
        title: "INFECTION RISK",
        value: item.Infection_Risk,
        color: "green.400",
        isPercentage: true
      },
      {
        title: "ACTIVE CASES",
        value: item.ActiveCases,
        color: "yellow.400"
      },
      {
        title: "SERIOUS CRITICAL",
        value: item.Serious_Critical,
        color: "red.400"
      },
      {
        title: "TOTAL RECOVERED",
        value: item.TotalRecovered,
        color: "cyan.400"
      },
      { title: "TOTAL DEATHS", value: item.TotalDeaths, color: "red.400" },
      { title: "NEW DEATHS", value: item.NewDeaths, color: "red.400" },
      {
        title: "CASE FATALITY RATE",
        value: item.Case_Fatality_Rate,
        color: "red.400",
        isPercentage: true
      },
      {
        title: "TOTAL TESTS",
        value: item.TotalTests,
        color: "cyan.400"
      },
      {
        title: "TEST PERCENTAGE",
        value: item.Test_Percentage,
        color: "cyan.400",
        isPercentage: true
      },
      {
        title: "RECOVERY PROPORATION",
        value: item.Recovery_Proporation,
        color: "cyan.400",
        isPercentage: true
      }
    ])
    onOpen()
  }

  const handleClose = () => {
    console.log(dataItem)
    setDataItem(null)
    onClose()
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
          <Item key={uuid()} item={item} clicked={handleOpen} />
        ))}
      </Flex>
      <Drawer
        onClose={onClose}
        onEsc={() => handleClose()}
        isOpen={isOpen}
        size={"full"}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader pt={6}>
              <Container maxW={"4xl"}>
                <Center>
                  <Box fontSize={"xs"} pb={4}>
                    Press <Kbd>ESC</Kbd> key to exit or &nbsp;&nbsp;
                    <Button
                      onClick={() => handleClose()}
                      colorScheme="teal"
                      variant="solid"
                      size="xs"
                    >
                      Close
                    </Button>
                  </Box>
                </Center>
                <Stack
                  as={Box}
                  textAlign={"center"}
                  spacing={{ base: 8, md: 14 }}
                  py={{ base: 6 }}
                >
                  <Heading
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                  >
                    Statistical data of
                    <br />
                    <Text as={"span"} color={"green.400"}>
                      {dataItem?.Country}
                    </Text>
                  </Heading>
                </Stack>
              </Container>
            </DrawerHeader>
            <DrawerBody>
              <StaticsCard data={staticsItem} isStatics={true} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default index
