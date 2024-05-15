const constants = require('./constants.js');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow Origin * for development purposes
app.use(cors());

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to this coding challenge!');
});

app.get('/export', (req, res) => {
    // Decode Base64 data to binary
    const binaryData = Buffer.from(constants.BASE64_DATA, 'base64');
  
    // Set appropriate response headers
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'inline; filename="document.html"');;
  
    // Send the decoded data in the response
    res.send(binaryData);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});