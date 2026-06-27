import React, { Component } from "react";
import Head from "next/head";
import Contact from "../Components/Contact";

export default class contact extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Contact — Carlo Clamucha</title>
          <meta
            key="description"
            name="description"
            content="Get in touch with Carlo Clamucha, full-stack developer."
          />
          <meta
            key="og:description"
            property="og:description"
            content="Get in touch with Carlo Clamucha, full-stack developer."
          />
          <meta
            key="og:url"
            property="og:url"
            content="https://carlo-clamucha.me/contact"
          />
          <link rel="canonical" href="https://carlo-clamucha.me/contact" />
        </Head>
        <Contact />
      </div>
    );
  }
}
