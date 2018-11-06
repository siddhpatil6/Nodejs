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
1. Writable Streams - allows nodejs to write data to stream
2. Readable Streams - allow nodejs to read data from stream
3. Duplex - can read and write to stream.

1. Writable Streams -

2. Readable Streams -

3. Duplex

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
