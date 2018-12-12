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

# How to run Nodejs file?
- Command

<b>node filename.js </b>

# To Stop Nodejs file?
- Command

<b>cntrl+C</b>


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
1. <b> Readable Streams </b> - allow nodejs to read data from stream

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

2.<b>  Writable Streams </b> - allows nodejs to write data to stream

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


3.<b> Duplex - </b> can read and write to stream.

## Pipe

How we can use them to pipe a readable stream into a writable stream.

![alt text](https://github.com/siddhpatil6/Nodejs/blob/master/Screen%20Shot%202018-11-06%20at%206.11.18%20PM.png)


```
var http=require('http')
var fs=require('fs')

var http = require('http');

//create a server object:
http.createServer(function (req, res) {

  var readStream=fs.createReadStream(__dirname+"/readMe.txt",'utf-8')
  var writeStream=fs.createWriteStream('writeMe.txt')

  readStream.pipe(res);

}).listen(8081);
console.log('Now its listening.....');
```


# Node JS Modules
In this chapter, you will know what is a module, functions and examples. And achieving modularity and separation
of concern with the NodeJS Modules

## Include Modules
To include a module, use the require() function with the name of the module:

```
var http = require('http');
```


Now your application has access to the HTTP module, and is able to create a server:

```
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
```

Create Your Own Modules
You can create your own modules, and easily include them in your applications.

The following example creates a module that returns a date and time object:

<b>Example</b>

Create a module that returns the current date and time:
```
exports.myDateTime = function () {
    return Date();
};
```
Use the <b> exports </b> keyword to make properties and methods available outside the module file.

Save the code above in a file called "myfirstmodule.js"

```
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
```

## Serving JSON

```
var http=require('http')
var server=http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'application/json'}); // defines type of response we are writing
	var myObj={ // object created
		name:'Hellow'
	}
	res.end(JSON.stringify(myObj)) // res.end is use to return response
}) .                            // JSON.stringify is use to convert string into JSON

server.listen(8081) // this is port where server is listening
```

## Basic Routing in Nodejs
- It is basic routing we are showing for different urls
```
var http=require('http')
var fs=require('fs')
var server=http.createServer(200,function(req,res) . 
{
	if(req.url==='/home' || req.url === "/")
	{
		res.writeHead(200,{'Content-Type':'text/html'});  // read data in text and html form
		fs.createReadStream(__dirname + '/home.html').pipe(res);  // read file from directory
	}
	else if(req.url==='/data') // read data from response
	{
		var data={
			name:'Siddhant'
		}
		res.end(JSON.stringify(data));
	}
});
server.listen(8081)
```

### Functions
### Buffer
### Module
### Module Types
### Core Modules
### Local Modules
### Module.Exports
