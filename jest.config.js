module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js", "jest-localstorage-mock"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transformIgnorePatterns: ["/scss/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  collectCoverageFrom: [
    "**/*.js",
    "!<rootDir>/coverage/*/*.js",
    "!*.config.js",
    "!*.setup.js",
    "!<rootDir>/pages/_app.js",
    "!server.js"
  ]
};
