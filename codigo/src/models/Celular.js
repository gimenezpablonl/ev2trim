const mongoose = require('mongoose');
const { Schema } = mongoose;

const Celular = new Schema({
    marca:{
        type: String
    },
    modelo:{
        type: String
    },
    cantProcesadores:{
        type: Number
    }
});

module.exports = mongoose.model('Celular', Celular);