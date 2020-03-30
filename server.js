// Import the in-built modules 
const http = require('http');
const fs = require('fs');
const path = require('path')

// Import requirements
const express = require('express');
const morgan = require('morgan');
const colors = require('colors/safe');

//Import DB connection module
const {
    connectDB
} = require('./db')
//Connect the datat base
connectDB();

// Init the application
const app = express();
const PORT = process.env.PORT || 3000;

// Log FIle
const logStream = fs.createWriteStream(path.join(__dirname, 'appLog.log'), {
    flags: 'a'
});
//Init Logger Middleware
app.use(morgan('combined', {
    stream: logStream
}));

// Create server
const server = http.createServer(app);


app.get('/auth', async (req, res, next) => {
    res.send('dayta')
})

server.listen(PORT, () => {
    console.log(colors.green(` The app is up on port -> ${PORT}`));
})