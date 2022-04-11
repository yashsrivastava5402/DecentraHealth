import React from 'react'
import { useParams } from 'react-router-dom'

function Admin() {
    const {id}=useParams();
  return (
    <div>Admin{id}</div>
  )
}

export default Admin