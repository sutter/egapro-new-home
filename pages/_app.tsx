import "../styles/globals.css"

import type { AppProps } from "next/app"
import { Skiplinks as DsfrSkiplinks, SkiplinkItem } from "@dataesr/react-dsfr"

import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DsfrSkiplinks>
        <SkiplinkItem href="#contenu">Contenu</SkiplinkItem>
        <SkiplinkItem href="#header-navigation">Menu</SkiplinkItem>
        <SkiplinkItem href="#footer">Pied de page</SkiplinkItem>
      </DsfrSkiplinks>
      <Header />
      <div id="contenu">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
