const hospital = require('../models/hospital');

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

exports.addHospital = async (req, res) => {
    try {
        const { Name, regNo, type, password } = req.body;
        await User.findOne({ regNo: regNo }, async (err, Hospital) => {
            if (err) {
                res.status(500).send(err);
            } else if (Hospital) {
                res.status(400).send("Hospital already present.");
            } else {
                const hospital = {
                    Name,
                    regNo,
                    type,
                    password,
                    patients: []
                }
                await User.insertMany(hospital, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).send(hospital);
                    }
                });
            }
        });
    } catch (err) {
        console.log(err);
    }
}