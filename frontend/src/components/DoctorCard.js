import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function DoctorCard({id,name}) {

  return (
   <Container >
   <Row>
      <Col>{ id}</Col>
      <Col>{name}</Col>
      <Col>remove button</Col>
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