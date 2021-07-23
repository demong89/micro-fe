const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
  mode: "development",
  devServer: {
    port: 8088
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: { // 当前应用加载的远端子应用
        products: "products@http://localhost:8083/remoteEntry.js",
        cart: "cart@http://localhost:8084/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
