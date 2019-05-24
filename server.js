const express = require('express');
const path = require('path');


const app = express();

//all server routes come here db auth or other ...

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');

  app.use(webpackMiddleware(webpack(webpackConfig))); //for dev
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}
app.listen(3050, () => console.log('listening'));