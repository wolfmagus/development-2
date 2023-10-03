const express = require("express")//Look for express in node modules and import required parts
const app = express()// Call the express function imported from line 1 and store it in app variable

//route
//get request requires 2 arguments (Endpoint, Callback function)
app.get("/",(request, response)=>{//listen for get request at the endpoint "/" and perform this function
    response.send("Hello World!")//use response's send method
    response.send({name: "joe", age:21})// express turns this object into JSON to be sent back to the client
})




//listen requires 2 arguments (PORT, Callback function)
app.listen(9000, () =>{ //Tell the server to listen for requests
    console.log("The server is running on Port 9000")
})

// Glossary of Terms
// 1. Express or Express.js(web app) - is a web application framework for JavaScript running on the Node.js runtime environment.
//   It simplifies the process of building web applications and APIs by providing tools for routing, middleware,
//   and request/response handling. Express is widely used for creating server-side applications and is known for
//   its simplicity.
// 2. listen or .listen(method) - In the context of a web server built with frameworks like Express,
//   "listen" is a method used to start the server and make it listen for
//    incoming HTTP requests on a specified port.
//    It allows the server to actively accept and handle requests from clients.
// 3. import(key word) - "Import" is a JavaScript keyword used to include external modules or dependencies
// into a script or application. It is commonly used in Node.js and modern JavaScript to load external
// code for use in the current file.
// 4. argument -  An "argument" refers to a value or variable that is passed to a function or method
// when it is called. Functions use arguments as input data to perform specific tasks or computations.
// 5. port - In networking and web development, a "port" is a numerical identifier
// used to differentiate between different services or processes on a computer or 
// server. In web development, it often refers to the port number used to access a web server 
// (e.g., port 80 for HTTP or port 443 for HTTPS).
// 6. callback function(function) - A "callback function" is a function that is passed as an argument
// to another function and is executed after the completion of that function. Callbacks are commonly
// used in asynchronous programming to handle tasks like handling responses to asynchronous events or API requests.
// 7. request or req - In the context of web servers, "request" or "req" refers to an object that contains
// information about an incoming HTTP request made by a client to a server. It includes details such as
// the URL, HTTP method, headers, and data sent by the client. 
// (object) The object being sent to the server, what I want
// 8. response or res - "Response" or "res" refers to an object used by a web server to construct and send
// an HTTP response back to the client. It contains methods and properties for setting the HTTP status, 
// headers, and response content. (object) The object being sent back by the server to the client
// 9. endpoint -  An "endpoint" is a specific URL or URI (Uniform Resource Identifier) that an API 
// or web service exposes to allow clients to interact with it. Each endpoint typically corresponds to a
// specific resource or operation that the API can perform.
// 10. send(method) -  In the context of an HTTP response object, "send" is a method used to send
// data as a response to the client. It is commonly used to send text, HTML, JSON, or other content 
// back to the client's browser. A method use by response
// 11. JSON(data format) -  "JSON" is a lightweight data interchange format that is easy for 
// both humans and machines to read and write. It is often used to transmit data between a server and
//  a web application as a text-based data format. JSON data consists of key-value pairs and is represented
//  in JavaScript as objects.