import "../styles/globals.css"

import type { AppProps } from "next/app"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SkipLinks from "../components/SkipLinks"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SkipLinks />
      <Header />
      <div id="contenu">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
