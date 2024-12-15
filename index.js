const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/user.routes')
const productsRouter = require('./routes/products.routes')
const ordersRouter = require('./routes/orders.routes')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', productsRouter);
app.use('/api', ordersRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`))