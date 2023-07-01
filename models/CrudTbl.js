const mongoose = require('mongoose');

const crudScema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    logo : {
        type : String,
        required : true
    },
});

const crud = mongoose.model('crud',crudScema);
module.exports = crud;