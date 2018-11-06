# Nodejs
Basics Of Node.js - Learn How to make simple Nodejs  API's


# How to create Your server?

```
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8081);

```

# What is Buffers, Streams, and Pipes?

## Buffers -
- Temporary storage spot - For Chunk of data - That is being Transfered from one place to another.<br>
- Buffer - is filled with data than passed along.<br>

![alt text](https://github.com/siddhpatil6/Nodejs/blob/master/Screen%20Shot%202018-11-06%20at%204.42.46%20PM.png)

## Streams - 

- Can create streams in node.js
- increases Performance

![alt text](https://github.com/siddhpatil6/Nodejs/blob/master/Screen%20Shot%202018-11-06%20at%204.49.15%20PM.png)


### Types of Streams -
1. Readable Streams - allow nodejs to read data from stream

```
var http =require('http')
var fs = require('fs')
var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf8');
readStream.on('data',function(chunk)
{
  console.log('new chunk is received -');
  console.log(chunk);
});
```

2. Writable Streams - allows nodejs to write data to stream

```
var http=require('http')
var fs=require('fs')
var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf-8')
var writeStream=fs.createWriteStream('writeMe.txt')

readStream.on('data',function(chunk)
{
  console.log('new data is received');
  writeStream.write(chunk);
})
```


3. Duplex - can read and write to stream.


## Pipe
How we can use them to pipe a readable stream into a writable stream.




# Node JS Modules
In this chapter, you will know what is a module, functions and examples. And achieving modularity and separation
of concern with the NodeJS Modules
### Functions
### Buffer
### Module
### Module Types
### Core Modules
### Local Modules
### Module.Exports
