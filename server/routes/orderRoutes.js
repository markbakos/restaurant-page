const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/orders', async (req, res) => {
    try {
        const { status } = req.query;

        const query = status ? { status } : {};

        const orders = await Order.find(query);
        res.json(orders);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

router.post('/orders', async (req, res) => {
   try {
       const order = new Order(req.body);
       await order.save();

       res.status(201).json(order);
   }
   catch (e) {
       res.status(500).json({ error: e.message });
   }
});

router.put('/orders/:id', async (req, res) => {
   const { id } = req.params;
   const { status } = req.body;

   const validStatuses = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];
   if(!validStatuses.includes(status)){
       return res.status(400).json({ error: 'Invalid order status' });
   }

    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            {status },
            { new: true });

        if(!updatedOrder){
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(updatedOrder);
    } catch (e) {
        return res.status(500).json( { error: e.message } );
   }
});

module.exports = router;