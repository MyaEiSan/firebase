import express from 'express'

// => Express Server Setup

// third party module from npm 
const exapp = express();

exapp.use(express.static('dist')); // server static file from the 'src' folder

// start the express server by define port 
exapp.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});