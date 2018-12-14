import React from "react";

export const themes = {
  delivroo: "delivroo",
  lbc: "leboncoin",
  facebook: "facebook"
};

export const ThemeContext = React.createContext(themes.delivroo);
