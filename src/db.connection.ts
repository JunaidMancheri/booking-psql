import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: 'bookingpsql',
    dialect: 'postgres',
    username: 'bookingsql',
})

export default async function connectDB() {
    await sequelize.authenticate();
    console.log('DB Connected');
}