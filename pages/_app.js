import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyle from '../assets/globalStyle';

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
        <CssBaseline />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
