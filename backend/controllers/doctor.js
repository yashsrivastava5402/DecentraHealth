const doctor = require('../models/doctor');

exports.findDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        await doctor.findOne({doctorId: email}, async (err, doctor) => {
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


exports.addDoctor = async (req, res) => {
    try {
        const { Name, doctorId, hospitalRegnumber, password } = req.body;
        await Doctor.findOne({ doctorId: doctorId }, async (err, doctor) => {
            if (err) {
                res.status(205).send(err);
            } else if (doctor) {
                res.status(203).send("Doctor already present.");
            } else {
                const newDoctor = {
                    Name,
                    doctorId,
                    hospitalRegnumber,
                    UPRNnum,
                    password,
                    patients: []
                }
                await Doctor.insertMany(newDoctor, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                await Hospital.findOne({regNo: hospitalRegnumber}, async (err, hospital) => {
                    if (err) {
                        res.status(206).send(err);
                    }
                    else{
                        hospital.patients.push(newDoctor);
                        res.status(200).send(newDoctor);
                    }
                })
            }
        });
    } catch (err) {
        console.log(err);
    }
}