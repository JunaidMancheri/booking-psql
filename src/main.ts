import { json } from "sequelize";
import connectDB from "./db.connection";
import bookingRouter from "./routes/booking";

import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/bookings', bookingRouter);

async function start() {
    await connectDB();
    app.listen(8000, () => console.log('Listening on port 8000')); 
}

start()
