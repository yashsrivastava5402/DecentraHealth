const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientsSchema = new Schema({
    Phone: {
        type: String,
        required: [true]
    },
    patients: {
        type: Array,
        required: [true]
    },
    DoctorRequests: {
        type: Array,
        requiured: [true]
    }
});

module.exports = mongoose.model('Patients', patientsSchema);