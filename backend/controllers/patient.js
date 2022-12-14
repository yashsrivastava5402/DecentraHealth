//const Patient = require('../models/patient');
const Hospital = require('../models/hospital');
const Patients = require('../models/patients');
const Doctor = require('../models/doctor');
 const {getdata, setdata} =require('../utils/web3');
 const p_id="2EIossNsEkeVC88aVyiK1oR8mkA";
 const s_key="4b5f24663b48bc836f94339596fa7565";
 const auth =
 'Basic ' + Buffer.from(p_id + ':' + s_key).toString('base64');
 
const ipfsAPI = require('ipfs-api');
const fs = require('fs');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https',
headers: {
    authorization: auth
  }})
// const { Blob } = require('node-blob');

  const { spawn } = require('child_process');
// const { speciality } = require('../utils/specializations');
speciality = [        
    {            
       disease: "Fungal infection",
       speciality: "dermatologist"       
    },        
    {            
       disease: "Allergy",
       speciality: "immunologist",           
    }, 
    {
      disease: "GERD",
      speciality: "gastroenterologist"
      },
      {
      disease: "Chronic cholestasis",
      speciality: "gastroenterologist"
      },
      {
      disease: "Drug Reaction",
      speciality: "immunologist"
      },
      {
      disease: "Peptic ulcer disease",
      speciality: "gastroenterologist"
      },
      {
      disease: "AIDS",
      speciality: "Infectious Disease"
      },
      {
      disease: "Diabetes",
      speciality: "endocrynologist"
      },
      {
      disease: "Gastroenteritis",
      speciality: "gastroenterologist"
      },
      {
      disease: "Bronchial Asthma",
      speciality: "pulmonologist"
      },
      {            
         disease: "Hypertension",
         speciality: "cardiologist"           
      },        
      {            
         disease: "Migraine",
         speciality: "Neurologist"           
      }, 
      {            
         disease: "Cervical spondylosis",
         speciality: "orthopedic specialist"           
      }, 
      {            
         disease: "Paralysis (brain hemorrhage)",
         speciality: "neurosurgeon"           
      }, 
      {            
         disease: "Jaundice",
         speciality: "gastroenterologist"           
      },
      {
      disease: "Malaria",
      speciality: "Infectious Disease"
      },
      {
      disease: "Chicken pox",
      speciality: "Paediatrician"
      },
      {
         disease: "Dengue",
         speciality: "Infectious Disease"     
      },
      {            
         disease: "Impetigo",
         speciality: "Paediatrician"           
      },        
      {            
         disease: "Psoriasis",
         speciality: "Rheumatologist"           
      }, 
      {            
         disease: "Urinary tract infection",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Acne",
         speciality: "Paediatrician"           
      }, 
      {            
         disease: "Osteoarthristis",
         speciality: "Orthopaedic"           
      },  
      {            
         disease: "Hypoglycemia",
         speciality: "Primary Care Provider"           
      },        
      {            
         disease: "Hyperthyroidism",
         speciality: "Endocrinologist"           
      }, 
      {            
         disease: "Varicoseveins",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Heartattack",
         speciality: "Cardiologist"           
      }, 
      {            
         disease: "Dimorphic hemmorhoids(piles)",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Hepatitis E",
         speciality: "Hepatologist"           
      },  
      {            
         disease: "Hepatitis D",
         speciality: "Hepatologist"           
      },        
      {            
         disease: "Hepatitis C",
         speciality: "Hepatologist"           
      }, 
      {
         disease: "Dengue",
         speciality: "Infectious Disease"     
      },
      {            
         disease: "Impetigo",
         speciality: "Paediatrician"           
      },        
      {            
         disease: "Psoriasis",
         speciality: "Rheumatologist"           
      }, 
      {            
         disease: "Urinary tract infection",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Acne",
         speciality: "Paediatrician"           
      }, 
      {            
         disease: "Osteoarthristis",
         speciality: "Orthopaedic"           
      },  
      {            
         disease: "Hypoglycemia",
         speciality: "Primary Care Provider"           
      },        
      {            
         disease: "Hyperthyroidism",
         speciality: "Endocrinologist"           
      }, 
      {            
         disease: "Varicoseveins",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Heartattack",
         speciality: "Cardiologist"           
      }, 
      {            
         disease: "Dimorphic hemmorhoids(piles)",
         speciality: "Primary Care Provider"           
      }, 
      {            
         disease: "Hepatitis E",
         speciality: "Hepatologist"           
      },  
      {            
         disease: "Hepatitis D",
         speciality: "Hepatologist"           
      },        
      {            
         disease: "Hepatitis C",
         speciality: "Hepatologist"           
      },          
      {
         disease: "Hepatitis B",
         speciality: "Hepatologist"
      },
      {
         disease: "Hepatitis A",
         speciality: "Hepatologist"
      },
      {
         disease: "Typhoid",
         speciality: "Infectious Disease Doctor"
      }
 ]
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
exports.fileUpload= async (req,res)=>{
    var Aadhar=0, flag=0;
    const senddata=[];
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
    const files = req.files.file;
    const fileName = req.body.fileName;
    //const filename = file.name;
   
    if(flag===0){
      
            files.mv(`${newpath}/${fileName}`,async (err) => {
            if (err) {
                console.log(err);
              res.status(500).send({ message: "File upload failed", code: 200 });
            }

            let testFile = fs.readFileSync(`${newpath}/${fileName}`);
            let testBuffer = new Buffer(testFile);

               let file = await ipfs.files.add(testBuffer);
                console.log(9);
                console.log(file);
                await setdata(Aadhar,fileName, file[0].hash);
                let link = `http://localhost:8000/fileDownload/${Aadhar}/${file[0].hash}`;
                senddata.push({name:fileName, file:link, filename:fileName})
                console.log(senddata)
                res.status(200).send(senddata);
            //else{
            //   res.status(200).send({ message: "File Uploaded", code: 200 });
            //   console.log("File uploaded");
            // }
          })

        
    }
    else
    await Promise.all( files.map( async(currfile, i) => {
    
        await currfile.mv(`${newpath}/${fileName[i]}`,async (err) => {
            if (err) {
                console.log(err);
              res.status(500).send({ message: "File upload failed", code: 200 });
            }
            let testFile = fs.readFileSync(`${newpath}/${fileName[i]}`);
            let testBuffer = new Buffer(testFile);

                let newfile = await ipfs.files.add(testBuffer);
                await setdata(Aadhar, newfile[0].hash, fileName[i]);
                let link = `http://localhost:8000/fileDownload/${Aadhar}/${newfile[0].hash}`; 
                senddata.push({name:fileName[i], file:link, filename:fileName[i]})
            //else{
            //   res.status(200).send({ message: "File Uploaded", code: 200 });
            //   console.log("File uploaded");
            // }
          });
    
      }))
  
    console.log(senddata);
    // res.status(200).send(senddata);

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
                res.status(200).send([]);
        }
    })
}
exports.viewFiles =async (req, res) => {
    // const { aadhar } = req.body;
    // const path = __dirname + "/" + aadhar;
    // const arr = [];
    // if(fs.existsSync(path)){
    //     console.log("Exists");
    //     fs.readdir(path, function (err, files) {
    //         //handling error
    //         if (err) {
    //             // return console.log('Unable to scan directory: ' + err);
    //             res.status(500).send('Unable to scan directory: ' + err);
    //         } 
    //         //listing all files using forEach
    //         console.log("No erroe");
    //         files.forEach(function (file) {

    //                 var link = `http://localhost:8000/fileDownload/${aadhar}/${file}`;

    //             const output = {
    //                 filename: file,
    //                 name: file,
    //                file : link
    //             }
    //             arr.push(output);
    //             console.log("file", file); 
    //         });
    //         res.status(200).send(arr);
    //     });
    // }else{
    //     res.status(200).send(arr);
    // }
    const { aadhar } = req.body;
    const data = await getdata(aadhar);
    console.log(data);
    const arr = [];
    for(let i=0;i<data.length;i++)
    {
        let element=data[i];
        var link = `http://localhost:8000/fileDownload/${aadhar}/${element.userDataDetail}`;
        const output = {
                            filename:element.userDataDetail ,
                            name: element.userDataFilename,
                           file : link
                        }
                        arr.push(output);

    }
    console.log("GH");

    res.status(200).send(arr);
    
    // //Creating buffer for ipfs function to add file to the system
    // let testBuffer = new Buffer(testFile);
}

exports.fileDownload = async (req, res) => {
    const aadhar = req.params['aadhar'];
    const fileName = req.params['fileName'];
    // const path = __dirname + "/" + aadhar + "/" + fileName;
    const files = await ipfs.files.get(fileName);
    files.forEach(file => {
        console.log(file.path)
        console.log(file);
        res.status(200).send(file.content);
    });
    // res.status(200).send(file.content);
    // res.status(200).download(path);
}

exports.getDisease = async (req, res) => {
    const { symptoms } = req.body;
    console.log(symptoms);
    const childPython = await spawn('python3', ['/Users/yashsrivastava/Desktop/DecentraHealth/backend/controllers/ml_model_btp.py','itching','skin_rash','nodal_skin_eruptions','dischromic_patches']);
    console.log("Hello");

    childPython.stdout.on('data', (data) => {
        console.log('received data');
        console.log('received data');
        console.log(`stdout: ${data}`);
        console.log(data.toString());
        res.status(200).send(data.toString());
    })

    // childPython.stderr.on('data', (data) => {
    //     console.log(`stderr: ${data}`);
    //     res.status(500).send(data.toString());
    // })
}

exports.getDoctors = async (req, res) => {
    const { disease } = req.body;
    const arr = [];
    console.log(speciality.length);
    let i = 0, flag = 0;
    for(i = 0; i < speciality.length; i++) {
        if(speciality[i].disease === disease) {
            Doctor.find({speciality: speciality[i].speciality}, (err, doctors) => {
                if(err) {
                    res.status(500).send(err);
                }
                else if(doctors.length>0){
                    res.status(200).send(doctors);
                }
                else{
                    res.status(200).send("Doctor not found");
                }
            });
            flag = 1;
            break;
        }
    }
    if(i === speciality.length && flag === 0)
    res.status(200).send("Doctor not found");
}