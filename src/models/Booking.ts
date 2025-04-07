import { DataTypes, Sequelize } from "sequelize";

export default function getBookingModel(sequelize: Sequelize) {
    const Booking = sequelize.define('Booking', {
        booking_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    })
    return Booking;
}




