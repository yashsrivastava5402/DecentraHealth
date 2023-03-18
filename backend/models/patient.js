const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    Name: {
        type: String,
        required: [true]
    },
    Aadhar: {
        type: String,
        required: [true]
    },
    Age: {
        type: Number,
        required: [true]
    },
    Gender: {
        type: String,
        required: [true]
    },
    Phone: {
        type: Number,
        required: [true]
    },
    DoctorRequests: {
        type: String,
        requiured: [true]
    }
});

module.exports = mongoose.model('Patient', patientSchema);