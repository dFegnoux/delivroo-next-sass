import React from "react";
import "./layout.scss";
import DelivrooLogo from "./images/DelivrooLogo";
import Link from "next/link";

const Layout = ({ children }) => (
  <div className="layout">
    <div className="resetTextAlign">
      <header className="header">
        <div className="layoutLimitedWidth">
          <Link href="/">
            <a>
              <DelivrooLogo />
            </a>
          </Link>
        </div>
      </header>
      <div className="layoutContent">{children}</div>
    </div>
  </div>
);

export default Layout;
