const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../components/**/*.stories.mdx",
    // "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    //"@storybook/preset-typescript",
  ],
  //presets: [path.resolve(__dirname, "./next-preset.js")],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
