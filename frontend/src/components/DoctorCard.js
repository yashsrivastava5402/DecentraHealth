import axios from 'axios';
import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function DoctorCard({id,name,aadhar, patientName, age, gender}) {
    const [submitted, setSubmitted] = useState(false);
    const goToPatient = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        const postInfo = {
           doctorId: id,
           Name: patientName,
           Aadhar: aadhar,
           Age: age,
           Gender: gender
        }
        axios.post('http://localhost:8000/addPatientDoctor', postInfo)
        .then(function (response){
            console.log(response);
            if(response.status === 200){
                alert("Patient assigned to doctor!");
            }
        });
    }

  return (
   <Container >
   <Row>
      <Col>{ id}</Col>
      <Col>{name}</Col>
      <Col>
            <button type="button" onClick={goToPatient}>
             Submit
            </button>
      </Col>
    </Row >
 
   </Container>
//    <div className='app-container'>
//    <table>
      
//        <tbody>
        
        
//             <tr>
//                    <td>{id}</td>
//                    <td>{name}</td>
//                    <td>remove button</td>
 
//            </tr>
        
//        </tbody>
//    </table>

// </div>
 
  )
}

export default DoctorCard