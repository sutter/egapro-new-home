import "../styles/globals.css"

import type { AppProps } from "next/app"

import SkipLinks from "../components/SkipLinks"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
