import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.scss";
import { MainLayout } from "../components";
import type { AppProps } from "next/app";

// FontAwesome: Ensure the SVG library is not added to the HEAD-meta of the page.
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp;
