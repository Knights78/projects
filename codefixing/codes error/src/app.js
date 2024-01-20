// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();
const { connectMongoDB } = require('./mongodb');//the name in curly braces must match with the name which i have exported 
const CodeExample = require('./models/CodeExample');
const cmd = require('node-cmd');
const path = require('path');

// Connect to MongoDB
connectMongoDB();//since i have exported i can call that function as an object i have made that that is why i have exported

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates'));

// Routes
app.use('/', require('./routes/index'));


// Start the server
const port =  3007;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
