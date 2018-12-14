import React, { Component } from "react";
import "./layout.scss";
import DelivrooLogo from "./images/DelivrooLogo";
import Link from "next/link";
import { themes } from "../contexts/theme-context";

class Layout extends Component {
  handleChange = e => {
    const { changeTheme } = this.props;
    changeTheme(e.currentTarget.value);
  };

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <div className="resetTextAlign">
          <header className="header">
            <div className="layoutLimitedWidth">
              <Link href="/">
                <a>
                  <DelivrooLogo />
                </a>
              </Link>
              <select onChange={this.handleChange}>
                {Object.keys(themes).map(themeName => (
                  <option key={themeName} value={themeName}>
                    {themes[themeName]}
                  </option>
                ))}
              </select>
            </div>
          </header>
          <div className="layoutContent">{children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
