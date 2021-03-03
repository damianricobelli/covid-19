import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@styles/font-face"
import MyTheme from "@styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={MyTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
