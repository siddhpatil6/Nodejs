var http=require('http')
var fs=require('fs')
var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf-8')
var writeStream=fs.createWriteStream('writeMe.txt')

readStream.on('data',function(chunk)
{
  console.log('new data is received');
  writeStream.write(chunk);
})
