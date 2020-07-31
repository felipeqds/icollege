const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


const server = require('http').Server(app);


mongoose.connect('mongodb+srv://felipeqds:159753@cluster0-0mn04.mongodb.net/icollege?retryWrites=true&w=majority',{
    useNewUrlParser : true,
})
app.use((req,res, next)=>{
    next();
})

app.use(cors());

app.use(require('./routes'));

server.listen(2222);

