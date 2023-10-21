import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const PendingAppoinmentTableRow = () => {
const [showDetail,SetShowDetail] = useState(false)
const [showConfirmation,SetShowConfirmation] = useState(false)
const [showConfirmationDecline,SetShowConfirmationDecline] = useState(false)


  return (
    <>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Basic</td>
            <td>0764694720</td>
            <td>2023/SEP/08 10:23AM</td>
            <td><button type="button" onClick={()=>SetShowConfirmation(true)} class="btn btn-primary">Accept</button><button type="button" onClick={()=>SetShowConfirmationDecline(true)} class="btn btn-danger">Decline</button></td>
            <td>
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu ps-3">
                <li onClick={()=>SetShowDetail(true)}>More details</li>
            </ul>
            </td>
          </tr>
          <Modal
        show={showDetail}
        onHide={() => SetShowDetail(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size={"lg"}
        animation ={true}
        centered
      >
        {/* detailModel */}
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Appoinment Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='table'>
                <tr>
                    <td>Name</td><td>Mark</td>
                    
                </tr>
                <tr>
                    <td>Package Type</td><td>Basic</td>
                </tr>
                <tr>
                    <td>Contact No</td><td>0764694720</td>
                </tr>
                <tr>
                    <td>Date & Time</td><td>2023/SEP/08 10:23AM</td>
                </tr>
            </table>
        </Modal.Body>
      </Modal>


      {/* <Modal show={showConfirmation} centered onHide={()=>SetShowConfirmation(false)} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to accept?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* confirmationModel */}
      <Modal show={showConfirmationDecline} onHide={()=>SetShowConfirmationDecline(false)} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><div class="text-danger">Warning</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to decline this appoinment?</Modal.Body>
        <Modal.Footer>
          <Button type='button' className='btn' onClick={()=>SetShowConfirmationDecline(false)}>
            Cancel
          </Button>
          <Button type='button' className='btn btn-danger'  onClick={()=>SetShowConfirmationDecline(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>


      
    </>
  )
}

export default PendingAppoinmentTableRow