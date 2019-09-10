import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import Page from "../Components/Page";
import GlobalStyle from "../assets/globalStyle";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
const theme = {
  red: "#FF0000",
  black: "#393939",
  coolblack: "#555F61",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#FFFFF0",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)",
  babypowder: "#FDFFFC"
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="../static/other_logo.png" />
        <title>Carlo Clamucha's portfolio website!</title>
        <meta property="locale" content="en_US" />
        <meta property="type" content="website" />
        <meta
          property="description"
          content="My own portfolio website built in NextJS and React"
        />
        <meta property="url" content="https://carlo-clamucha.me" />
        <meta
          property="site_name"
          content="Carlo Clamucha's portfolio website"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-146357995-1"
        ></script>
        <script type="text/javascript">
          window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-146357995-1');
        </script>
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {this.renderHead()}
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
