var http =require('http')
var fs = require('fs')
var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf8');
readStream.on('data',function(chunk)
{
  console.log('new chunk is received -');
  console.log(chunk);
});
