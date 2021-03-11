import React from "react"

import {
  Box,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid
} from "@chakra-ui/react"

import uuid from "react-uuid"

interface indextProps {
  data: any
  isStatics?: boolean
}

export const StaticsCard: React.FC<indextProps> = ({ data, isStatics }) => {
  return (
    <Box as="section" pb={12}>
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid
          columns={{
            base: isStatics ? 1 : 2,
            sm: 2,
            md: 3,
            lg: isStatics ? 4 : 3
          }}
          spacing="6"
        >
          {data.map((item: any) => (
            <Stat
              key={uuid()}
              px={{ base: 4, sm: 6 }}
              py="5"
              bg={useColorModeValue("white", "gray.700")}
              shadow="base"
              rounded="lg"
            >
              <StatLabel
                fontWeight="medium"
                isTruncated
                color={useColorModeValue("gray.500", "gray.400")}
              >
                {item.title}
              </StatLabel>
              <StatNumber
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                fontWeight="medium"
                color={useColorModeValue(item.color, "white")}
              >
                {item.isPercentage
                  ? `${item.value}%`
                  : Number(item.value).toLocaleString()}
              </StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
