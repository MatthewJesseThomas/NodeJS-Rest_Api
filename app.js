const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./API/Routes/products');
const orderRoutes = require('./API/Routes/orders');

app.use(morgan('dev'));

// Routes which should handle Requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Error Handling of NodeJS
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;