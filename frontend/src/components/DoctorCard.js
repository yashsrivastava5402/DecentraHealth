import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function DoctorCard({id,name}) {

  return (
   <div>
   
    <Row>
      <Col>{ id}</Col>
      <Col>{name}</Col>
      <Col>remove button</Col>
    </Row>
 
  </div>
  )
}

export default DoctorCard