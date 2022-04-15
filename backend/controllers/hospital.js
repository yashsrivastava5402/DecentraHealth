const Hospital = require('../models/hospital');

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
        console.log(req.body);
        const { hospitalName, hospitalRegnumber, type, password } = req.body.values;
        await Hospital.findOne({ regNo: hospitalRegnumber }, async (err, hospital) => {
            console.log(hospitalName);
            if (err) {
                res.status(500).send(err);
            } else if (hospital) {
                res.status(400).send("Hospital already present.");
            } else {
                console.log("Hospital not present.");
                const newHospital = {
                    Name: hospitalName,
                    regNo: hospitalRegnumber,
                    type: type,
                    password: password,
                    patients: []
                };
                //console.log(newhospital);
                // hospital.save((err) => {
                //     if(err) {
                //         console.error('ERROR!');
                //     }
                // });
                await Hospital.insertMany(newHospital, async(err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(newHospital);
                        res.status(200).send(newHospital);
                    }
                });
            }})
        // const newHospital = {
        //     Name: hospitalName,
        //     regNo: hospitalRegnumber,
        //     type: type,
        //     password: password,
        //     patients: []
        // };
        // console.log(newHospital);
        // let hospitalo=await Hospital.findOneAndUpdate({ regNo: hospitalRegnumber },{newHospital}, {new: true}, {upsert: true});
        // res.status(200).send(hospitalo);
    // }).clone().catch(function(err){ console.log(err)});
    } catch (err) {
        console.log(err);
    }
}