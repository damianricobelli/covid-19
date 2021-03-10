import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Badge,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverBody
} from "@chakra-ui/react"
import { BsFillPeopleFill } from "react-icons/bs"
import { FaSyringe } from "react-icons/fa"
interface CardProps {
  country: any
  index: number
}

const Card = ({ country, index }: CardProps) => {
  let fullyVacunated = null

  if (country.people_fully_vaccinated_per_hundred) {
    fullyVacunated = (
      <Stack
        as={Box}
        direction={"row"}
        justify={"stretch"}
        spacing={0}
        fontSize={"xs"}
        bg={useColorModeValue("green.50", "green.500")}
        color={useColorModeValue("green.500", "white")}
        p={2}
        px={3}
        rounded={"full"}
        fontWeight={600}
      >
        <BsFillPeopleFill style={{ marginTop: 3 }} />
        <Text pl={2}>
          {Number(country.people_fully_vaccinated_per_hundred).toLocaleString()}
          {"% "}
          fully vaccinated
        </Text>
      </Stack>
    )
  } else {
    fullyVacunated = (
      <Stack
        as={Box}
        direction={"row"}
        justify={"stretch"}
        spacing={0}
        fontSize={"xs"}
        bg={useColorModeValue("green.50", "green.500")}
        color={useColorModeValue("green.500", "white")}
        p={2}
        px={3}
        rounded={"full"}
        fontWeight={600}
      >
        <BsFillPeopleFill style={{ marginTop: 3 }} />
        <Text pl={2}>
          {Number(country.total_vaccinations_per_hundred).toLocaleString()}
          {"% "}
          received at least 1 dose
        </Text>
      </Stack>
    )
  }

  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      rounded={"lg"}
      maxW="320px"
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"xl"}
          fontFamily={"body"}
        >
          <Avatar
            position={"relative"}
            mt={0.2}
            mr={3}
            size="xs"
            bg={useColorModeValue("green.500", "green.500")}
            color={useColorModeValue("green.50", "white")}
            name={`${index}`}
          />
          {country.location}
        </Heading>
        <Stack style={{ paddingTop: 10 }} direction={"column"} spacing={2}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            justify={"space-between"}
            spacing={0}
            fontSize={"sm"}
          >
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.500", "gray.200")}
              mt={2}
            >
              Applied doses
            </Text>

            <Stack
              as={Box}
              direction={"row"}
              justify={"stretch"}
              spacing={0}
              fontSize={"xs"}
              bg={useColorModeValue("cyan.50", "cyan.500")}
              color={useColorModeValue("cyan.500", "white")}
              p={2}
              px={3}
              rounded={"full"}
              fontWeight={600}
            >
              <FaSyringe style={{ marginTop: 2 }} />
              <Text pl={2}>
                {Number(country.total_vaccinations).toLocaleString()}
              </Text>
            </Stack>
          </Stack>
          {fullyVacunated}
          <Box direction={"row"} align={"center"}>
            <Popover placement={"auto"}>
              <PopoverTrigger>
                <Badge
                  mt={4}
                  style={{ cursor: "pointer" }}
                  variant={useColorModeValue("outline", "solid")}
                  colorScheme={useColorModeValue("purple", "pink")}
                >
                  Click for more info
                </Badge>
              </PopoverTrigger>
              <PopoverContent
                color="white"
                bg={"blue.800"}
                borderColor="blue.800"
              >
                <PopoverHeader
                  align={"center"}
                  pt={4}
                  fontWeight="bold"
                  border="0"
                >
                  More about {country.location}
                </PopoverHeader>
                <PopoverBody pb={6} align={"start"}>
                  <Stack direction={"column"}>
                    <Text>
                      📈 New cases:{" "}
                      {country.new_cases ? country.new_cases : "-"}
                    </Text>
                    <Text>
                      📈 New cases per million:{" "}
                      {country.new_cases_per_million
                        ? country.new_cases_per_million
                        : "-"}
                    </Text>
                    <Text>
                      💀 New deaths:{" "}
                      {country.new_deaths ? country.new_deaths : "-"}
                    </Text>
                    <Text>
                      💀 New deaths per million:{" "}
                      {country.new_deaths_per_million
                        ? country.new_deaths_per_million
                        : "-"}
                    </Text>
                    <Text>
                      🧪 New tests:{" "}
                      {country.new_tests ? country.new_tests : "-"}
                    </Text>
                    <Text>
                      🧪 New tests per thousand:{" "}
                      {country.new_tests_per_thousand
                        ? country.new_tests_per_thousand
                        : "-"}
                    </Text>
                    <Text>
                      💉 New vaccinations:{" "}
                      {country.new_vaccinations
                        ? country.new_vaccinations
                        : "-"}
                    </Text>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card
