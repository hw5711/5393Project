// import http module
var http=require('http');
// create server
var server=http.createServer(function(request,response){
 // log the request   
  console.log('incomming request');
  // generate response body
  response.write('<h1>Hello World Server with Node.js</h1>'); 
  //response end
  response.end(); 
});
// start the server
server.listen(8080);
console.log('server started at localhost:8080');
