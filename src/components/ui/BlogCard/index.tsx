import React from "react"
import Link from "next/link"
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image as ChakraImage,
  Link as ChakraLink,
  Center
} from "@chakra-ui/react"

export interface ICardNews {
  image?: string
  title: string
  subtitle?: string
  href?: string
  isMap?: boolean
}

export const NewsCard: React.FC<ICardNews> = ({
  image,
  title,
  subtitle,
  href,
  isMap
}: ICardNews) => {
  const content = (
    <Box
      role={"group"}
      style={{ cursor: "pointer", transition: "transform .2s" }}
      _hover={{
        transform: "scale(1.1)"
      }}
      p={6}
      maxW={"340px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Center>
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"200px"}>
          <ChakraImage
            rounded={"lg"}
            height={200}
            width={200}
            objectFit={"cover"}
            src={image}
          />
        </Box>
      </Center>
      <Stack pt={10} align={"center"}>
        <Text
          noOfLines={1}
          color={"gray.500"}
          fontSize={"sm"}
          textTransform={"uppercase"}
        >
          {title}
        </Text>
        <Heading
          fontSize={"2xl"}
          textAlign={"center"}
          fontFamily={"body"}
          fontWeight={500}
          noOfLines={3}
        >
          {subtitle}
        </Heading>
      </Stack>
    </Box>
  )

  if (isMap) {
    return <Link href={href}>{content}</Link>
  } else {
    return (
      <ChakraLink
        _hover={{
          textDecoration: "none"
        }}
        href={href}
        isExternal
      >
        {content}
      </ChakraLink>
    )
  }
}
