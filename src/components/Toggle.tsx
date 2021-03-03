import { FC } from "react"
import { Button, Flex, useColorMode } from "@chakra-ui/react"

const Toggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Flex align="center" justify="center" height="100vh" direction="column">
        <Button size="lg" onClick={() => toggleColorMode()}>
          Toggle Mode {colorMode}
        </Button>
      </Flex>
    </div>
  )
}

export default Toggle
