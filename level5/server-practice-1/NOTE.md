# Intro to Express

# Initialize a new node project
1. npm init -y
2. npm install <dependencies>(express)
3. Name main file (server.js)

# Vocabulary
1. Route - An event listener for http requests
2. Endpoint - * "/item"   "/user"
3. Port - localhost:9000/item
4. Nodemon - Hot reloads my server automatically. command: nodemon server.js (file name of server)


# Glossary of Terms

1. Express or Express.js(web app) - is a web application framework for JavaScript running on the Node.js runtime     environment. It simplifies the process of building web applications and APIs by providing tools for routing, middleware and request/response handling. Express is widely used for creating server-side applications and is known for its simplicity.

2. listen or .listen(method) - In the context of a web server built with frameworks like Express,
"listen" is a method used to start the server and make it listen for incoming HTTP requests on a specified port. It allows the server to actively accept and handle requests from clients.

3. import(key word) - "Import" is a JavaScript keyword used to include external modules or dependencies
into a script or application. It is commonly used in Node.js and modern JavaScript to load external
code for use in the current file.

4. argument -  An "argument" refers to a value or variable that is passed to a function or method
when it is called. Functions use arguments as input data to perform specific tasks or computations.

5. PORT - In networking and web development, a "port" is a numerical identifier
used to differentiate between different services or processes on a computer or 
server. In web development, it often refers to the port number used to access a web server 
(e.g., port 80 for HTTP or port 443 for HTTPS).

6. callback function(function) - is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in asynchronous programming to handle tasks like handling responses to asynchronous events or API requests.

7. Anonymous Function(function) - also known as a "lambda function" or "function literal," is a JavaScript function that is defined without a name. Instead of having a designated name like regular functions, anonymous functions are typically created on the fly and often used as arguments to other functions or stored in variables. They are especially useful for one-off operations and for maintaining concise and readable code in situations where a named function is unnecessary.

8. request or req - In the context of web servers, "request" or "req" refers to an object that contains
information about an incoming HTTP request made by a client to a server. It includes details such as the URL, HTTP method, headers, and data sent by the client. 
(object) The object being sent to the server, what I want

9. response or res - "Response" or "res" refers to an object used by a web server to construct and send
an HTTP response back to the client. It contains methods and properties for setting the HTTP status, 
headers, and response content. (object) The object being sent back by the server to the client

10. endpoint -  An "endpoint" is a specific URL or URI (Uniform Resource Identifier) that an API 
or web service exposes to allow clients to interact with it. Each endpoint typically corresponds to a
specific resource or operation that the API can perform.

11. send(method) -  In the context of an HTTP response object, "send" is a method used to send
data as a response to the client. It is commonly used to send text, HTML, JSON, or other content 
back to the client's browser. A method use by response

12. JSON(data format) -  "JSON" is a lightweight data interchange format that is easy for 
both humans and machines to read and write. It is often used to transmit data between a server and
 a web application as a text-based data format. JSON data consists of key-value pairs and is represented
 in JavaScript as objects.


# Expanded Descriptions 
1. Express - is a minimal and flexible web application framework for JavaScript, primarily used for building web applications and APIs (Application Programming Interfaces) in Node.js. It provides a set of tools and features that simplify the process of handling HTTP requests, defining routes, and managing various aspects of web applications.

Here are some key features and concepts associated with Express:

Routing: Express allows you to define routes that map specific HTTP methods (e.g., GET, POST, PUT, DELETE) to specific URLs. You can create routes to handle incoming requests and define how the server should respond.

Middleware: Middleware functions are at the core of Express. Middleware functions can intercept and process requests and responses before they reach the route handlers. This allows you to perform tasks like authentication, logging, data validation, and more.

Templates: While Express itself is not a template engine, it can be easily integrated with template engines like EJS, Pug, or Handlebars to generate dynamic HTML content on the server.

Static Files: You can serve static files such as CSS, JavaScript, and images using Express by defining static middleware.

Request and Response Objects: Express provides request and response objects that encapsulate information about the incoming request and facilitate sending responses back to the client.

Error Handling: Express offers built-in error handling and allows you to define custom error handling middleware to manage errors in your application gracefully.

Middleware Ecosystem: Express has a vast ecosystem of third-party middleware packages that can be easily integrated to add various functionalities to your application.

Routing Parameters: Express allows you to define route parameters, making it easy to extract values from the URL, which is useful for creating dynamic routes.

Session Management: While not built into Express itself, you can use middleware like Express Sessions to handle user sessions and authentication.
    
