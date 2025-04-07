import { Sequelize } from "sequelize";
import getPassengerModel from "./models/Passenger";
import getBookingModel from "./models/Booking";

const sequelize = new Sequelize({
    database: 'bookingpsql',
    dialect: 'postgres',
    username: 'bookingsql',
})

const Passenger = getPassengerModel(sequelize);
const Booking = getBookingModel(sequelize);


Passenger.belongsTo(Booking, {foreignKey: 'bookingId'});
Booking.hasMany(Passenger, {foreignKey: 'bookingId'})


export default async function connectDB() {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('DB Connected');
}

export {Passenger, Booking};