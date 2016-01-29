module.exports = function(stream, io) {
  stream.on('data', function(data) {
    io.emit('tweet',data);
  });
}
