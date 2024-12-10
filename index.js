const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`server started on post ${PORT}`))