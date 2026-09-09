// console.log("Hello from Node.js!");

// Import Node.js built-in HTTP module

const http = require('http');

// create the web server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    console.log(`Received request for: ${req.url}`);

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000/`);
});