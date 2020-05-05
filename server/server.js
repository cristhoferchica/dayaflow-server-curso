require('./config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//configuracion global de rutas
app.use(require('./routes/index'));





mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(resp => {

    console.log('Se a iniciado la base de datos ');
}).catch(err => {
    console.log('Error al conectarse a la base de datos :', err);
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto : ', 3000);
});