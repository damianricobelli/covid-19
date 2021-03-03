import type { AppProps } from "next/app"
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react"
import Fonts from "@styles/font-face"
import MyTheme from "@styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={MyTheme}>
      <Fonts />
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
