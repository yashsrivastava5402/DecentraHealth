//const Patient = require('../models/patient');
const Patients = require('../models/patients');

exports.addPatients = async (req, res) => {
    try {
        const { Name, Aadhar, Age, Gender, Phone } = req.body;
        const newPatient = {
            Name,
            Aadhar,
            Age,
            Gender
        }
        console.log(newPatient);
        await Patients.findOneAndUpdate({Phone: Phone}, {$push: {patients: newPatient}}, {new: true, upsert: true}, async (err, patients) => {
            if (err) {
                res.status(206).send(err);
            }
            else{
                console.log("patients: ", patients);
                // hospital.doctors.push(newDoctor);
                res.status(200).send(patients);
            }
        })
    } catch (err) {
        console.log(err);
    }
}