const presets = [
  "module:metro-react-native-babel-preset",
  "module:react-native-dotenv",
];
const plugins = ["@babel/plugin-proposal-optional-chaining"];

if (process.env.ENV === "prod") {
  plugins.push("transform-remove-console");
}

module.exports = { presets, plugins };
