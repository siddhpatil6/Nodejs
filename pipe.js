var http=require('http')
var fs=require('fs')

var http = require('http');

//create a server object:
http.createServer(function (req, res) {

  res.write('Hello World!'); //write a response to the client
  var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf-8')
  var writeStream=fs.createWriteStream('writeMe.txt')

  readStream.pipe(res);

}).listen(8081);
console.log('Now its listening.....');
