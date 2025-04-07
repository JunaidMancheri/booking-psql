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


Passenger.belongsTo(Booking, {foreignKey: 'booking_id'});
Booking.hasMany(Passenger, {foreignKey: 'booking_id'})


export default async function connectDB() {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('DB Connected');
}