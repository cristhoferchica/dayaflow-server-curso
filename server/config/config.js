process.env.PORT = process.env.PORT || 3000;

//======================================
//Entorno
//======================================


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======================================
//base de datos
//======================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeServer'

} else {
    urlDB = 'mongodb+srv://dayaflow:Mu2KC3ojv9wUTqEs@cluster0-i2axy.mongodb.net/cafeServer'

}
process.env.URLDB = urlDB;