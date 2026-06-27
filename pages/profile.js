import React from "react";
import Head from "next/head";
import Profile from "../Components/Profile";

export default class profile extends React.Component {
    render(){
        return (
            <div>
                <Head>
                  <title>About — Carlo Clamucha</title>
                  <meta
                    key="description"
                    name="description"
                    content="About Carlo Clamucha — full-stack developer. Background, skills, and experience."
                  />
                  <meta
                    key="og:description"
                    property="og:description"
                    content="About Carlo Clamucha — full-stack developer. Background, skills, and experience."
                  />
                  <meta
                    key="og:url"
                    property="og:url"
                    content="https://carlo-clamucha.me/profile"
                  />
                  <link rel="canonical" href="https://carlo-clamucha.me/profile" />
                </Head>
                <Profile />
            </div>
        )
    }
}
