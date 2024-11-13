const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    guests: {
        type: String,
        required: true
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema, 'reservations');

module.exports = Reservation;