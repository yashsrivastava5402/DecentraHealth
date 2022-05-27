const express = require('express');
const doctorController = require('../controllers/doctor');
const hospitalController = require('../controllers/hospital');
const patientController = require('../controllers/patient');
const router = express.Router();

router.post('/doctorLogin', doctorController.findDoctor);
router.post('/hospitalSignup', hospitalController.addHospital);
router.post('/hospitalLogin',hospitalController.findHospital);
router.post('/getDoctors', hospitalController.getDoctors);
router.post('/addDoctors', doctorController.addDoctor);
router.post('/addPatients', patientController.addPatients);
router.get('/getHospitals', hospitalController.getHospitals);
router.post('/addPatientHospital', patientController.addPatientHospital);
router.post('/getPatientsHospital', patientController.getPatientsHospital);
router.post('/fileUpload', patientController.fileUpload);
router.post('/viewFiles', patientController.viewFiles);
router.get('/fileDownload/:aadhar/:fileName', patientController.fileDownload);

module.exports=router;