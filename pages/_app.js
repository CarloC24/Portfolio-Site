import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Navbar from "../Components/Navbar";
import Page from "../Components/Page";
import GlobalStyle from "../assets/globalStyle";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Snackbar from "../Components/Snackbar";

const theme = {
  // --- legacy tokens (kept for backwards-compat with non-live components) ---
  red: "#FF0000",
  black: "#393939",
  coolblack: "#555F61",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#FFFFF0",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)",
  babypowder: "#FDFFFC",

  // --- glass / modern design system (UI-UX Pro Max: Glassmorphism) ---
  // semantic colors
  primary: "#18181B",
  onPrimary: "#FFFFFF",
  secondary: "#3F3F46", // body / secondary text (>=7:1 on light glass)
  accent: "#2563EB", // fills / active state
  accentText: "#1D4ED8", // accent used as text (>=4.5:1 on light glass)
  background: "#FAFAFA",
  foreground: "#09090B", // headings / primary text
  border: "#E4E4E7",
  ring: "#2563EB",

  // glass surfaces
  glassBg: "rgba(255, 255, 255, 0.55)",
  glassBgStrong: "rgba(255, 255, 255, 0.72)",
  glassBorder: "rgba(255, 255, 255, 0.6)",
  blur: "blur(16px)",
  blurNav: "blur(12px)",

  // backdrop gradient so the glass has something to refract
  pageGradient:
    "radial-gradient(at 18% 18%, #dbeafe 0px, transparent 55%), " +
    "radial-gradient(at 82% 12%, #ede9fe 0px, transparent 50%), " +
    "radial-gradient(at 78% 88%, #d1fae5 0px, transparent 50%), " +
    "radial-gradient(at 10% 86%, #fae8ff 0px, transparent 45%), #f6f7fb",

  // elevation scale (consistent across nav / cards / chips)
  shadowSm: "0 1px 2px rgba(16, 24, 40, 0.06)",
  shadowMd: "0 8px 24px rgba(16, 24, 40, 0.10)",
  shadowLg: "0 20px 48px rgba(16, 24, 40, 0.14)",

  // radii
  radiusSm: "10px",
  radiusMd: "16px",
  radiusLg: "24px",

  // typography
  fontHeading: "'Archivo', sans-serif",
  fontBody: "'Space Grotesk', sans-serif"
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  state = {
    dropdown: false
  };
  handleOpenCloseDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Yellowtail&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="../static/other_logo.png" />
        <title>Carlo Clamucha's portfolio website!</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My own portfolio website built in NextJS and React"
        />
        <meta property="og:url" content="https://carlo-clamucha.me" />
        <meta
          property="og:site_name"
          content="Carlo Clamucha's portfolio website"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-27RPV2MSF2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-27RPV2MSF2');
`
          }}
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {this.renderHead()}
        <GlobalStyle />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default MyApp;
