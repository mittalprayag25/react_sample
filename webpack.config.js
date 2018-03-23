const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const defaultPlugins = [
  new Dotenv({
    path: './.env',
    safe: false
  }),
  new webpack.DefinePlugin({ // <-- key to reducing React's size
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      STAGE_ENV: JSON.stringify('STAGE'),
      DEV_ENV: JSON.stringify('LOCAL')
    }
  }),
];

let webpackPlugins = defaultPlugins;

if(NODE_ENV === 'dev' && process.env.START_ENV) {
  const developerPlugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
  webpackPlugins = defaultPlugins.concat(developerPlugins);
}

if(NODE_ENV === 'production' || NODE_ENV === 'stage') {
  const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ];

  webpackPlugins = defaultPlugins.concat(productionPlugins);
}


const webpackConfig = {
  entry: [
    path.join(__dirname, '/src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/'
  },
  plugins: webpackPlugins,
  module: {
    rules: [{
      test: /\.html$/,
      use: ['file-loader?name=[name].[ext]']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(otf|eot|svg|ttf|woff|woff2|png|mp4|jpg|gif)$/,
      use: ['url-loader']
    }]
  }
};

if(NODE_ENV === 'dev' && process.env.START_ENV) {
  webpackConfig.devServer = {
    host: 'localhost',
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true
  };
}

module.exports = webpackConfig;