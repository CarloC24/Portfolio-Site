import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import Page from "../Components/Page";
import GlobalStyle from "../assets/globalStyle";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)"
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

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
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
