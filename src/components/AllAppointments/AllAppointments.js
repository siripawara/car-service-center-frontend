import React from 'react'
import { useState } from 'react';
import '../AllAppointments/AllAppoinments.css'
import AllAppoinmentTableRow from '../AllAppoinmentTableRow/AllAppoinmentTableRow';

const AllAppoinments = () => {
  
  return (
    <div>
        <div className='d-flex justify-content-end align-items-baseline'>
        
          <input type='date' className='float-end me-3 datepicker'></input>
          <button type='button' className='btn btn-outline-primary borderfloat-end'>Filter by date</button>
        </div>
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
          <AllAppoinmentTableRow/>
          <AllAppoinmentTableRow/>
          <AllAppoinmentTableRow/>
          <AllAppoinmentTableRow/>
          
        </tbody>
      </table>
      
      
    </div>
  )
}

export default AllAppoinments