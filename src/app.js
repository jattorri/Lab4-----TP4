const express = require('express');
const path = require('path');
const port = 3000;
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//ImportingRoutes
const empleadoRoute = require('./routes/empleado');
const { urlencoded } = require('express');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views') );

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'labtp4'
},'single'));

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', empleadoRoute);

//static files
app.use(express.static(path.join(__dirname, 'public')))


//Starting server

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});