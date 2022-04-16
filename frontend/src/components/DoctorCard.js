import React from 'react'

function DoctorCard({id,name}) {

  return (
    <div>
        <div>
           { id}
        </div>
        <div>
            {name}
        </div>
        <div>
            remove button
        </div>
    </div>
  )
}

export default DoctorCard