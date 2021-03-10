import { extendTheme, useColorModeValue } from "@chakra-ui/react"

const styles = {
  global: () => ({
    body: {
      bg: useColorModeValue("#F8F8F8", "gray.800")
    }
  })
}

const theme = extendTheme({
  styles,
  light: {
    bg: "red"
  },
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif"
  }
})

export default theme
