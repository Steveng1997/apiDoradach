const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routeTerapeuta = require('./src/routes/routeTerapeuta');
const routeEncargada = require('./src/routes/routeEncargada');

const PORT = process.env.PORT || 3000;

// SERVIDOR
const app = express();

// habilitar body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Habiliar los cors
app.use(cors());

//   del app
app.use('/api/terapeuta', routeTerapeuta());
app.use('/api/encargada', routeEncargada());

app.listen(PORT, () => {
  console.log('Running server on port', PORT)
});