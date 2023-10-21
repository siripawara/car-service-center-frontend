import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const AllAppoinmentTableRow = () => {
    const [show,setShow] = useState(false)
  return (
    <>
    <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Basic</td>
            <td>0764694720</td>
            <td>2023/SEP/08 10:23AM</td>
            <td><button type='button' className='btn btn-primary'>Mark as finished</button></td>
            <td>
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu ps-3">
                <li onClick={()=>setShow(true)}>More details</li>
            </ul>
            </td>
          </tr>
          
          {/* Detailmodel */}
          <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              size={"lg"}
              animation ={true}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Appoinment Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className='  table'>
                    <tbody>
                      <tr>
                          <td>Name</td><td>Mark</td>
                          
                      </tr>
                      <tr>
                          <td>PackageType</td><td>Basic</td>
                      </tr>
                      <tr>
                          <td>Contact No</td><td>0764694720</td>
                      </tr>
                      <tr>
                          <td>Date & Time</td><td>2023/SEP/08 10:23AM</td>
                      </tr>
                      </tbody>
                  </table>
              </Modal.Body>
            </Modal>
      </>
  )
}

export default AllAppoinmentTableRow