const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-react","@babel/preset-env"],
          plugins: [
           'transform-class-properties'
            ]
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: filepath => /\.global\.css$/.test(path.basename(filepath)),
        loaders: ['style-loader','css-loader?modules']
      },
      {
        // 使用file-loader来加载图片文件
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins:[
    // extractCSS,
     // 该插件能将生成的入口js文件注入到模板html内
     new HtmlWebpackPlugin({
    }),
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ verbose: true })
  ],
  devServer: {
    contentBase: path.join(__dirname,'public'),
    compress: true,
    port: 9000,
    hot: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
     cacheGroups: {
        vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: false,
  } 
}