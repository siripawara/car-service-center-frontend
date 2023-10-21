import React from 'react'
import PendingAppoinmentTableRow from '../PendingAppoinmentTableRow/PendingAppoinmentTableRow'
const PendingAppointments = () => {
  return (
    <div>
        <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Package</th>
            <th scope="col">Contact No</th>
            <th scope="col">Date & Time</th>              
            <th scope="col">Actions</th>   
            <th scope="col">More</th>         
          </tr>
        </thead>
        <tbody>
          <PendingAppoinmentTableRow/>
          <PendingAppoinmentTableRow/>
          <PendingAppoinmentTableRow/>
          <PendingAppoinmentTableRow/>
         
        </tbody>
      </table>
    </div>
  )
}

export default PendingAppointments