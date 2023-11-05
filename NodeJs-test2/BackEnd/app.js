const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/product-route');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(3000);