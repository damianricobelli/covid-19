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
  title?: string
  subtitle?: string
  href?: string
  isMap?: boolean
  isFlag?: boolean
}

export const NewsCard: React.FC<ICardNews> = ({
  image,
  title,
  subtitle,
  href,
  isMap,
  isFlag
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
      boxShadow={"lg"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Center>
        <Box
          rounded={"lg"}
          mt={-12}
          borderWidth={isFlag ? "1px" : "none"}
          borderColor={
            isFlag ? useColorModeValue("gray.400", "transparent") : "none"
          }
          pos={"relative"}
          height={isFlag ? 120 : 200}
        >
          <ChakraImage
            rounded={"lg"}
            height={isFlag ? 118 : 198}
            width={200}
            objectFit={"cover"}
            src={image}
          />
        </Box>
      </Center>
      <Stack pt={10} align={"center"}>
        {!isFlag && (
          <Text
            noOfLines={1}
            color={"gray.500"}
            fontSize={"sm"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
        )}
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

  if (isMap || isFlag) {
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
