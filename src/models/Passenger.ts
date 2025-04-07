import { DataTypes, Sequelize } from "sequelize";


export default function getPassengerModel(sequelize: Sequelize) {
  const Passenger = sequelize.define('Passenger', {
     name: {
         type: DataTypes.STRING,
            allowNull: false, 
        },
        booking_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'Bookings',
            }
        }
    })

    return Passenger;
}



