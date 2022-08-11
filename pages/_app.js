import * as React from "react";
import Head from "next/head";

// import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
// import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import LayoutWrap from "../src/layout";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
import ThemeProvider from "../src/theme/index";
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout =
    Component.getLayout || ((page) => <LayoutWrap>{page} </LayoutWrap>);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
