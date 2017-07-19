const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/js/app.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        loaders: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?sourceMap", "sass-loader?sourceMap"]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg|ttf|woff|woff2|eot)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                quality: 65
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin("app.css")]
};
