
const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 80,
        },
        modules: false
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
  ],
};

module.exports = config;
