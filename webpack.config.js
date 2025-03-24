import path from "node:path";
import { merge } from "webpack-merge";
import parts from "./webpack.parts.js";

const __dirname = import.meta.dirname;

console.log("[import.meta.dirname]:", __dirname);

const commonConfiguration = merge([
  {
    context: path.resolve(__dirname, "app"),
    entry: "./index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
  },
  parts.loadHTML(),
  parts.generateHTML({ template: "./index.html" }),
  parts.transpileTypeScript(),
  parts.loadImages(),
  parts.loadCSS(),
]);

const configs = {
  development: merge([]),
  production: merge([]),
};

export default function (_env, argv) {
  const mode = argv.mode;
  return merge([commonConfiguration, configs[mode], { mode }]);
}
