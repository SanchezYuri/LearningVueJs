require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const routes = require('./routes/routes');

const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`Servidor iniciado ${port}`)});

app.use('/api', routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
