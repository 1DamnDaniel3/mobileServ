const express = require('express');
require('dotenv').config();

const userRouter = require('./routes/user.routes')
const productsRouter = require('./routes/products.routes')

const PORT = process.env.PORT || 3000;
const app = express();



app.use(express.json());

app.use('/api', userRouter);
app.use('/api', productsRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`))