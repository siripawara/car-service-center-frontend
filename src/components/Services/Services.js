import React from 'react'
import '../Services/Services.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const SingleService = (props) => {

  const [showConfirmationDelete,SetShowConfirmationDelete] = useState(false)
  return (
    <>
    <div className='d-flex align-items-baseline  justify-content-between col-lg-4 col-md-6 col-sm-12 pb-3'>
      <div>
      <input class="form-check-input" defaultChecked type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label d-inline  px-2" for="flexCheckDefault">{props.name}</label>
      </div>
      <button type='button' onClick={()=>SetShowConfirmationDelete(true)}className='btn float-end' ><span className='deleteBtn '><i class="bi bi-x-lg"></i></span></button>
    </div>
    
    <Modal show={showConfirmationDelete} onHide={()=>SetShowConfirmationDelete(false)} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><div class="text-danger">Warning</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure to delete this service number ${props.id}? ${props.name}`}</Modal.Body>
        <Modal.Footer>
          <Button type='button' className='btn' onClick={()=>SetShowConfirmationDelete(false)}>
            Cancel
          </Button>
          <Button type='button' className='btn btn-danger'  onClick={()=>SetShowConfirmationDelete(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

    </>

    
  )
}


const Services = () => {
  const mockData = ["Wash and Grooming","Lube Services","Exterior & Interior Detailing","Engine Tune ups","Undercarriage Degreasin","Windscreean Treatments","Inspection Reports","Wheel Alignment"]
  return (
    <div className='container-fluid'>
      {/* Available services */}
      <div className='row pt-3 pb-1'><b>Available services</b></div>
      <div className='row'>
        
          {
            mockData.map((data,index)=><SingleService id={index} name={data}/>) 
          }
        </div>
        {/* Add new services */}
        <div className='row pt-3 pb-1'><b>Add new services</b></div>
        <div className='row'>
          <div className='col-12 col-lg-6 px-1'>
          <form class="d-flex align-items-baseline" role="search">
            <input
              class="form-control me-2 me-0"
              
              placeholder="Type service name"
              
            />
            <button class="btn btn-primary" type="button">
              <div className='d-flex'>
                Add <i class="bi bi-plus-circle ms-2 d-inline"></i> 
              </div>
            </button>
          </form>
          </div>
        </div>
    </div>
  )
}

export default Services