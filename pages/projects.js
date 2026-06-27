import React, { Component } from "react";
import Head from "next/head";
import Projects from "../Components/Projects";

export default class projects extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Projects — Carlo Clamucha</title>
          <meta
            key="description"
            name="description"
            content="Selected projects by Carlo Clamucha, built with React, Next.js, and Node."
          />
          <meta
            key="og:description"
            property="og:description"
            content="Selected projects by Carlo Clamucha, built with React, Next.js, and Node."
          />
          <meta
            key="og:url"
            property="og:url"
            content="https://carlo-clamucha.me/projects"
          />
          <link rel="canonical" href="https://carlo-clamucha.me/projects" />
        </Head>
        <Projects></Projects>
      </div>
    );
  }
}
