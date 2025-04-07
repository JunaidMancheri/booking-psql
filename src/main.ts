import connectDB from "./db.connection";

const express = require('express');

const app = express();




async function start() {
    await connectDB();
    app.listen(8000, () => console.log('Listening on port 8000')); 
}

start()
