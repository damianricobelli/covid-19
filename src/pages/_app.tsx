import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@styles/font-face"
import MyTheme from "@styles/theme"

import { Layout } from "@components/common/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={MyTheme}>
      <Fonts />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
