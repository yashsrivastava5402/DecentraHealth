const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    Name: {
        type: String,
        required: [true]
    },
    UPRN: {
        type: Number,
        required: [true]
    },
    doctorId: {
        type: String,
        required: [true]
    },
    hospitalRegnumber: {
        type: Number,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    },
    patients: {
        type: Array,
        required: [true]
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);