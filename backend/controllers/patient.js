//const Patient = require('../models/patient');
const Hospital = require('../models/hospital');
const Patients = require('../models/patients');

exports.addPatients = (req, res) => {
    try {
        const { Name, Aadhar, Age, Gender, Phone } = req.body;
        const newPatient = {
            Name,
            Aadhar,
            Age,
            Gender
        }
        console.log(newPatient);
        Patients.findOneAndUpdate({Phone: Phone}, {$push: {patients: newPatient}}, {new: true, upsert: true}, (err, patients) => {
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

exports.addPatientHospital = (req, res) => {
    try {
        // const { Name, Aadhar, Age, Gender, Phone } = req.body;
        // console.log(newPatient);
        // await Patients.findOneAndUpdate({Phone: Phone}, {$push: {patients: newPatient}}, {new: true, upsert: true}, async (err, patients) => {
        //     if (err) {
        //         res.status(206).send(err);
        //     }
        //     else{
        //         console.log("patients: ", patients);
        //         // hospital.doctors.push(newDoctor);
        //         res.status(200).send(patients);
        //     }
        // })
        const { HospitalID, Name, Age, Aadhar, Gender } = req.body;
        const newPatient = {
            Name,
            Aadhar,
            Age,
            Gender
        }
        // try{
        //     const output=await Hospital.findOneAndUpdate({regNo: HospitalID}, {$push: {patients: newPatient}});
        // }
        // catch{

        // }
        // const output=await Hospital.findOneAndUpdate({regNo: HospitalID}, {$push: {patients: newPatient}});
        Hospital.findOneAndUpdate({regNo: HospitalID}, {$push: {patients: newPatient}}, (err, output) => {
            if (err) {
                res.status(206).send(err);
            }
            else{
                res.status(200).send(output);
            }
        });
    } catch (err) {
        console.log(err);
    }
}
exports.fileUpload=(req,res)=>{
    const newpath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
}
exports.getPatientsHospital = (req, res) => {
    const { HospitalID } = req.body;
    Hospital.findOne({regNo: HospitalID}, (err, hospital) => {
        if (err) {
            res.status(206).send(err);
        }
        else{
            res.status(200).send(hospital.patients);
        }
    });
}
