const express = require('express');
const app = express();
// Your code here
const path = require('path');
app.use(express.static(path.join(__dirname, 'assets/')));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
