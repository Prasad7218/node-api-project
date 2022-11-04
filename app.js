// const { fstat } = require('fs')
const fs=require("fs");
const http = require('http')
const port = 8080

  
// Create a server object:
const server = http.createServer(function (req, res) {
  
    // Write a response to the client
    res.write('Hello World')
    fs.readFile('./userapi.json',"utf-8",
    (err,data)=>{
        console.log(data);
        res.end(data);
    })
  
    // End the response 
   
})
  
// Set up our server so it will listen on the port
server.listen(port, function (error) {
  
    // Checking any error occur while listening on port
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening
    else {
        console.log('Server is listening on port' + port);
    }
})