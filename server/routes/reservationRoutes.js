const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const Joi = require('joi');

const reservationSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9-]+$/).required(),
    date: Joi.string().isoDate().required(),
    guests: Joi.number().integer().min(1).max(10).required()
});

router.post('/reserve', async (req, res) => {
    const { error } = reservationSchema.validate(req.body);
    if( error ) return res.status(400).json({ error: error.details[0].message });

    const { name, email, phone, date, guests } = req.body;

    if(!name || !email || !phone || !date || !guests){
        return res.status(400).json({ error: 'All fields are required' });
    }

    try{
        const reservation = new Reservation({
            name,
            email,
            phone,
            date,
            guests
        });
        await reservation.save();
        res.status(201).json(reservation);
    }
    catch (e) {
        res.status(400).json( { error: e.message } );
    }
});

router.get('/reservations', async (req, res) => {
    const { page = 1, limit = 10, date} = req.query;

    let query = {};

    if(date){
        query.date = date;
    }

    try{
       const reservations = await Reservation.find(query)
           .skip((page - 1) * limit)
           .limit(Number(limit));
       const count = await Reservation.countDocuments(query);

       res.json({
           reservations,
           totalPages: Math.ceil(count / limit),
           currentPage: page,
       });
   } catch (e) {
       res.status(500).json( { error: e.message } );
   }
});

router.put('/reservations/:id', async (req,res) => {
    const { id } = req.params;

    const { error } = reservationSchema.validate(req.body);
    if( error ) return res.status(400).json({ error: error.details[0].message });

    const { name, email, phone, date, guests} = req.body;

    try{
        const updatedReservation = await Reservation.findByIdAndUpdate(
            id,
            { name, email, phone, date, guests },
            { new: true });

        if(!updatedReservation){
            return res.status(404).json({ error: 'Reservation not found' });
        }

        res.json(updatedReservation);
    }
    catch (e) {
        res.status(400).json( { error: e.message } );
    }
});

router.delete('/reservations/:id', async (req, res) => {
   const { id } = req.params;

   try{
       const deletedReservation = await Reservation.findByIdAndDelete(id);
       if(!deletedReservation){
           return res.status(404).json({ error: 'Reservation not found' });
       }
       res.json({ message: 'Reservation deleted successfully' });
   } catch (e) {
       return res.status(500).json( { error: e.message } );
   }
});

module.exports = router;