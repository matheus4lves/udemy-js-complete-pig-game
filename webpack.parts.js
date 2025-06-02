import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const loadHTML = () => ({
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
});

const generateHTML = ({ template = "" } = {}) => ({
  plugins: [new HtmlWebpackPlugin({ template })],
});

const transpileTS = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
});

const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/inline",
      },
    ],
  },
});

const loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

const copy = ({ patterns, options = {} }) => ({
  plugins: [new CopyWebpackPlugin({ patterns, options })],
});

const parts = {
  loadHTML,
  generateHTML,
  loadImages,
  transpileTS,
  loadCSS,
  copy,
};

export {
  parts as default,
  loadHTML,
  generateHTML,
  loadImages,
  transpileTS,
  loadCSS,
  copy,
};
