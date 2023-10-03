# Intro to Express

# Initialize a new node project
1. npm init -y
2. npm install <dependencies>(express)
3. Name main file (server.js)
4. Install Axios

# URL Parameters - place holder

# Parts of a URL
* Base - http://amazon.com
* Endpoint - http://amazon.com/images
* Parameter - http://amazon.com/images/44424557647fdgr
* Query - 

# Parameters (req.params) - GET one

# URL Queries

# Query String - (typically to filter results)
* Begins with the "?"
* Built of key=value pairs.
* Multiple queries separated by the "&"

# Middleware

    # What is it?
    1. (optional) - Mount Path (endpoint)
    2. Callback function - receives the request, response object, also the 'next' function

# The 'next' function
    * Moves on to the next middleware in the line on the server