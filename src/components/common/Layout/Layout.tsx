import { FC } from "react"
import Navbar from "@components/common/Navbar"

interface LayoutProps {
  pageProps: any
}

export const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer pages={pageProps.pages} /> */}
    </>
  )
}
