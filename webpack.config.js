const path = require("path");
module.exports = {
  mode: "development",
  //devtool: 'eval-source-map', //用于调试代码
  entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", //打包后的文件存放的地方
    filename: "bundle.js", //打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      watch: true,
    }, //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    //port 设置默认监听端口，如果省略，默认为”8080“
  },
};
