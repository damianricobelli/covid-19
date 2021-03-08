import React from "react"
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link
} from "@chakra-ui/react"

export interface ICardNews {
  image?: string
  title: string
  subtitle?: string
  href?: string
}

export const NewsCard: React.FC<ICardNews> = ({
  image,
  title,
  subtitle,
  href
}: ICardNews) => {
  return (
    <Box
      role={"group"}
      style={{ cursor: "pointer", transition: "transform .2s" }}
      _hover={{
        transform: "scale(1.1)"
      }}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box rounded={"lg"} mt={-12} pos={"relative"} height={"230px"}>
        <Link href={href} isExternal>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Link>
      </Box>
      <Stack pt={10} align={"center"}>
        <Link href={href} isExternal>
          <Text
            noOfLines={1}
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
        </Link>
        <Link href={href} isExternal>
          <Heading
            fontSize={"2xl"}
            textAlign={"center"}
            fontFamily={"body"}
            fontWeight={500}
            noOfLines={3}
          >
            {subtitle}
          </Heading>
        </Link>
      </Stack>
    </Box>
  )
}
