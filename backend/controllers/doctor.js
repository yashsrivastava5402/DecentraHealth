// const { default: Patient } = require('../../frontend/src/components/Patient');
const Doctor = require('../models/doctor');
const PatientSingle = require('../models/patient');
const Hospital = require('../models/hospital');

exports.findDoctor = (req, res) => {
    try {
        const { email, password } = req.body;
        Doctor.findOne({doctorId: email}, (err, doctor) => {
            if (err) {
                res.status(400).send(err);
            }
            else if (doctor) {
                if(doctor.password == password){
                    res.status(200).send(doctor);
                }else{
                    res.status(500).send("Incorrect password!");
                }
            }
            else {
                res.status(404).send("Not found");
            }
        });
    } catch (err) {
        console.log(err);
    }
}


exports.addDoctor = (req, res) => {
    try {
        const { Name, doctorId, hospitalRegnumber, speciality, password } = req.body;
        Doctor.findOne({ doctorId: doctorId }, (err, doctor) => {
            if (err) {
                res.status(205).send(err);
            } else if (doctor) {
                res.status(203).send("Doctor already present.");
            } else {
                const newDoctor = {
                    Name,
                    doctorId,
                    hospitalRegnumber,
                    UPRNnum: req.body.UPRN,
                    speciality,
                    password,
                    patients: [],
                    insPatients: [],
                    reqPatients: [],
                    fullPatients: []
                }
                console.log(newDoctor);
                // while (newDoctor.Name !== req.body.Name);
                Doctor.insertMany(newDoctor, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else{
                        Hospital.findOneAndUpdate({regNo: hospitalRegnumber}, {$push: {doctors: newDoctor}}, (err, hospital) => {
                            if (err) {
                                res.status(500).send(err);
                            }
                            else{
                                console.log("hospital: ", hospital.Name, " ", hospital.doctors);
                                // hospital.doctors.push(newDoctor);
                                res.status(200).send(newDoctor);
                            }
                        })
                    }
                });
                
            }
        });
    } catch (err) {
        console.log(err);
    }
}

exports.addPatientDoctor = async (req, res) => {
    const { doctorId, Name, Aadhar, Age, Gender} = req.body;
    //const doctor = await Doctor.findOne({doctorId: doctorId});
    const newPatient = {
        Name,
        Aadhar,
        Age,
        Gender
    }
    Doctor.findOneAndUpdate({doctorId: doctorId}, {$push: {patients: newPatient}}, (err, output) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(output);
        }
    });
}

exports.requestPatient = async (req, res) => {
    const { doctorId, Aadhar } = req.body;
    const patient = await PatientSingle.findOne({Aadhar: Aadhar});
    const doctor = await Doctor.findOne({doctorId: doctorId});
    console.log(patient, doctor);
    Doctor.findOneAndUpdate({doctorId: doctorId}, {$push: {reqPatients: patient}}, (err, output) => {
        if (err) {
            res.status(500).send(err);
        }
        else{
            Doctor.findOneAndUpdate({doctorId: doctorId}, {$pull: {patients: {Aadhar: Aadhar}}}, (err, output) => {
                if (err) {
                    res.status(500).send(err);
                }
                else{
                    PatientSingle.findOneAndUpdate({Aadhar: Aadhar}, {$push: {DoctorRequests: doctor}}, (err) => {
                        if (err) {
                            res.status(500).send(err);
                        }
                    })
                    res.status(200).send(output);
                }
             })
            
        }
    });
}

exports.reqDoctors = (req, res) => {
    const { Aadhar } = req.body;
    PatientSingle.findOne({Aadhar: Aadhar}, (err, patients) => {
        if(err){
            res.status(500).send(err);
        }
        console.log(patients);
        if(patients)
        res.status(200).send(patients.DoctorRequests);
        else res.status(200).send("Patient Doesnt exist");
    })
}