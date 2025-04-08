import { NextFunction, Request, RequestHandler, Response } from "express";
import { Booking, Passenger } from "../db.connection";

export const getBookings: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
    const bookings = await Booking.findAll({include: Passenger});
    res.json(bookings);
}

export const getBooking: RequestHandler = async function(req, res, next) {
    const booking = await Booking.findByPk(req.params.bookingId, {include: Passenger});
    res.json(booking);
}

export const getAverageOfBookingAmount: RequestHandler = async function(req, res, next) {
    const average = await Booking.aggregate('booking_amount', 'AVG');
    res.json(average);
}