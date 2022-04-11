const express = require('express');
const doctorController = require('../controllers/doctor');
const hospitalController = require('../controllers/hospital'); 
const router = express.Router();

router.post('/doctorLogin', doctorController.findDoctor);
router.post('/hospitalSignup', hospitalController.addHospital)