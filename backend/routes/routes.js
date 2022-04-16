const express = require('express');
const doctorController = require('../controllers/doctor');
const hospitalController = require('../controllers/hospital'); 
const router = express.Router();

router.post('/doctorLogin', doctorController.findDoctor);
router.post('/hospitalSignup', hospitalController.addHospital);
router.post('/hospitalLogin',hospitalController.findHospital);
router.post('/getDoctors', hospitalController.getDoctors);
router.post('/addDoctors', doctorController.addDoctor);

module.exports=router;