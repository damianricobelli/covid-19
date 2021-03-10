import React from "react"

import {
  Box,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid
} from "@chakra-ui/react"

interface indextProps {
  data: any
}

export const StaticsCard: React.FC<indextProps> = ({ data }) => {
  return (
    <Box as="section" pb={12}>
      <Box maxW="7xl" mx="auto" px={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing="6">
          {data.map((item: any) => (
            <Stat
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
                fontSize="3xl"
                fontWeight="medium"
                color={useColorModeValue(item.color, "white")}
              >
                {item.value}
              </StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
