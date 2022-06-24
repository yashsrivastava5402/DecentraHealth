//const Patient = require('../models/patient');
const Hospital = require('../models/hospital');
const Patients = require('../models/patients');
const fs = require('fs');
// const { Blob } = require('node-blob');

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
    var Aadhar=0, flag=0;
    if(req.body.Aadhar instanceof Array){
        Aadhar = req.body.Aadhar[0];
        flag=1;
    }
    else
        Aadhar = req.body.Aadhar;
    const newpath = __dirname + "/" + Aadhar;
    if(!fs.existsSync(newpath)){
        fs.mkdirSync(newpath);
    }
    console.log(req.files);
    console.log(req.body);
    const file = req.files.file;
    const fileName = req.body.fileName;
    //const filename = file.name;
    if(flag===0){
        file.mv(`${newpath}/${fileName}`, (err) => {
            if (err) {
                console.log(err);
              res.status(500).send({ message: "File upload failed", code: 200 });
            }
            //else{
            //   res.status(200).send({ message: "File Uploaded", code: 200 });
            //   console.log("File uploaded");
            // }
          });
    }
    for(let i = 0 ; i < file.length; i++){
        file[i].mv(`${newpath}/${fileName[i]}`, (err) => {
            if (err) {
                console.log(err);
              res.status(500).send({ message: "File upload failed", code: 200 });
            }
            //else{
            //   res.status(200).send({ message: "File Uploaded", code: 200 });
            //   console.log("File uploaded");
            // }
          });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
    
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
exports.getPatients=(req,res)=>{
    const {Phone}=req.body;
    console.log(req);
    console.log(req.body);
    Patients.findOne({Phone},(err,patient)=>{
        if(err)
            res.status(500).send(err);
    
        else{
            if(patient)
                res.status(200).send(patient.patients);
            else
                res.status(200).send("Patient not added!");
        }
    })
}
exports.viewFiles = (req, res) => {
    const { aadhar } = req.body;
    const path = __dirname + "/" + aadhar;
    const arr = [];
    console.log("path", path);
    if(fs.existsSync(path)){
        console.log("Exists");
        fs.readdir(path, function (err, files) {
            //handling error
            if (err) {
                // return console.log('Unable to scan directory: ' + err);
                res.status(500).send('Unable to scan directory: ' + err);
            } 
            //listing all files using forEach
            console.log("No erroe");
            files.forEach(function (file) {

                    var link = `https://decentrahealth-server.herokuapp.com/fileDownload/${aadhar}/${file}`;

                const output = {
                    filename: file,
                    name: file,
                   file : link
                }
                arr.push(output);
                console.log("file", file); 
            });
            res.status(200).send(arr);
        });
    }else{
        res.status(200).send(arr);
    }
}

exports.fileDownload = (req, res) => {
    const aadhar = req.params['aadhar'];
    const fileName = req.params['fileName'];
    const path = __dirname + "/" + aadhar + "/" + fileName;
    res.status(200).download(path);
}