import {Router} from 'express';
import { getAverageOfBookingAmount, getBooking, getBookings } from '../controller/booking';

const bookingRouter = Router();

bookingRouter.get('/', getBookings);
bookingRouter.get('/average', getAverageOfBookingAmount)
bookingRouter.get('/:bookingId', getBooking);

export default bookingRouter;