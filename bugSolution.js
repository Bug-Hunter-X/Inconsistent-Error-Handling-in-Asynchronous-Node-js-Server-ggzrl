const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        // Simulate a successful request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Success!');
      } else {
        // Simulate an error
        const error = new Error('Simulated error');
        throw error; // Throw the error to be caught
      }
    } catch (error) {
      console.error('Error:', error); // Log the error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 1000); // Simulate some delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});