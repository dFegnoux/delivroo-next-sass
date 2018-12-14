import React from "react";
import { ThemeContext, themes } from "../contexts/theme-context";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.scss";

import whyDidYouUpdate from "why-did-you-update";

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.delivroo
    };
  }

  changeTheme = newTheme => {
    this.setState(() => ({
      theme: themes[newTheme]
    }));
  };

  render() {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;

    return (
      <Container>
        <ThemeContext.Provider value={this.state.theme}>
          <Layout changeTheme={this.changeTheme}>
            <Component {...pageProps} />
          </Layout>
        </ThemeContext.Provider>
      </Container>
    );
  }
}
