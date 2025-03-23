import HtmlWebpackPlugin from "html-webpack-plugin";

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

const transpileTypeScript = () => ({
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

const parts = {
  loadHTML,
  generateHTML,
  transpileTypeScript,
  loadImages,
};

export {
  parts as default,
  loadHTML,
  generateHTML,
  transpileTypeScript,
  loadImages,
};
