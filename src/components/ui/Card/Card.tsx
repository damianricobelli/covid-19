import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue
} from "@chakra-ui/react"

interface CardProps {
  country: any
  index: number
}

const Card = ({ country, index }: CardProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"xl"}
      rounded={"lg"}
      maxW="320px"
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          <Avatar
            position={"relative"}
            mt={0.5}
            mr={3}
            size="xs"
            bg={useColorModeValue("green.500", "green.500")}
            color={useColorModeValue("green.50", "white")}
            name={`${index}`}
          />
          {country.location}
        </Heading>
        <Stack py={2} direction={{ base: "column", md: "row" }} spacing={2}>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.500", "gray.300")}
            mt={2}
          >
            Total doses
          </Text>
          <Stack direction={"row"} spacing={0} fontSize={"sm"}>
            <Text
              fontSize={"sm"}
              fontWeight={600}
              bg={useColorModeValue("green.50", "green.500")}
              p={2}
              px={3}
              color={useColorModeValue("green.500", "white")}
              rounded={"full"}
            >
              {Number(country.total_vaccinations).toLocaleString()}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card
