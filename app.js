const express = require('express');
const app = express();

const productRoutes = require('./API/Routes/products');
const orderRoutes = require('./API/Routes/orders');



app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;