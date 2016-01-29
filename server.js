var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var twitter = require('twitter');
var streamHandler = require('./src/js/utils/streamHandler');

var app = express();
var compiler = webpack(config);

var tweetStream = new twitter({
  consumer_key: 'IZlbVigJiAWNKnCG55cALKfze',
  consumer_secret: '0EDyxbMzwTXyqaOYoJJw35I3HltQNBZ4fqz0ifRFJh5VSs0EV8',
  access_token_key: '2435430859-CnLnb6uR4f9DvdUgo0hJTieEzOddxT0bMn3uAop',
  access_token_secret: 'GRvH5vGSlxQPvWw1bXBw5e2XdJKujBWMnq31U7E48dYXc'
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

var io = require('socket.io').listen(server);

tweetStream.stream('statuses/filter', { track: 'twitter' }, function(stream) {
  streamHandler(stream,io);
});
