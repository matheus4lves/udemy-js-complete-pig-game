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

const parts = {
  loadHTML,
  generateHTML,
  transpileTypeScript,
  loadImages,
  loadCSS,
};

export {
  parts as default,
  loadHTML,
  generateHTML,
  transpileTypeScript,
  loadImages,
  loadCSS,
};
