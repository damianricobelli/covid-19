import { FC } from "react"
import {
  IconButton,
  Flex,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const DarkModeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Flex align="center" justify="center" direction="column">
        <IconButton
          aria-label="Toggle mode"
          size="lg"
          bg={useColorModeValue("transparent", "transparent")}
          onClick={() => toggleColorMode()}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
    </div>
  )
}

export default DarkModeButton
