const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
    mode: "production",
    entry: {
        app: './src/auth0-spa-login.mjs'
    },
   
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }
}
