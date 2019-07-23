const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') 
// 获取局域网IP
const ip = require('ip').address();

class NiceErrorsWebpackPlugin extends FriendlyErrorsWebpackPlugin {
  displaySuccess(stats) {
    super.displaySuccess(stats)
    
    const port = stats.compilation.options.devServer.port
    console.log('你的应用程序在这里运行:');
    console.log('\r\n');
    console.log(` -local:   http://127.0.0.1:${port}`);
    console.log(` -newwork: http://${ip}:${port}`);
    console.log(`\r\n`);
  }
}

module.exports = NiceErrorsWebpackPlugin;