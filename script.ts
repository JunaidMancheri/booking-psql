/**
 * Run this script to add dummy data to the db;
 */

import connectDB, { Booking, Passenger } from "./src/db.connection";

async function execute() {
  await connectDB();

  const bookings = [3534.43, 24352.34, 245245.24];
  const passengers = [
    ["John", "Don", "Bosco"],
    ["Sagar", "Alias", "Jacky"],
    ["John", "Wick"],
  ];

  for (let i = 0; i < bookings.length; i++) {
    const booking = await Booking.create({ booking_amount: bookings[i] });

    for (const name of passengers[i]) {
      await Passenger.create({ name, bookingId: booking.dataValues.id });
    }
  }
}

execute();
