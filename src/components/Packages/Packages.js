import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SinglePackage = () => {

  const [showConfirmationDelete,SetShowConfirmationDelete] = useState(false)

  return (
    <>
    <div className='col-lg-4 col-12 mb-3 mt-1 '>
        <div class="card" style={{width: "auto"}}>
        <div class="card-body">
            <h5 class="card-title">
              <div>Package 01
              <button type='button' onClick={()=>SetShowConfirmationDelete(true)} className='btn position-absolute top-0 end-0' ><span className='deleteBtn '><i class="bi bi-x-lg"></i></span></button>
            </div>
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Package 01</h6>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                 <li>Item</li>
            </ul>
                        
            </div>
        </div>
    </div>

    <Modal show={showConfirmationDelete} onHide={()=>SetShowConfirmationDelete(false)} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title><div class="text-danger">Warning</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure to delete this package? `}</Modal.Body>  
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


const SingleService = (props) => {

  return (
    <>
    <div className='d-flex align-items-baseline  justify-content-between col-lg-4 col-md-6 col-sm-12 pb-3'>
      <div>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label d-inline  px-2" for="flexCheckDefault">{props.name}</label>
      </div>
    </div>
    </>

    
  )
}

const Packages = () => {

  const [showAddPackage,setShowAddPackage] = useState(false);
  const mockData = ["Wash and Grooming","Lube Services","Exterior & Interior Detailing","Engine Tune ups","Undercarriage Degreasin","Windscreean Treatments","Inspection Reports","Wheel Alignment"]

  return (
    <div className='container-fluid'>
        <div className='row mt-1 overflow-auto' style={{height:"350px"}}>
            <div className='row pt-3' ><b>Available packages</b></div>
            <SinglePackage/>
            <SinglePackage/>
            <SinglePackage/>
            <SinglePackage/>
            <SinglePackage/>
            <SinglePackage/>
        </div>
        <div className='row pt-3 pb-1'><b>Create New Package</b></div>
        <div className='row'>
          <div className='col-12 col-lg-6 px-1'>
          <form class="d-flex align-items-baseline" role="search">
            <input
              class="form-control me-2 me-0"
              
              placeholder="Type new package Name"
              
            />
            <button class="btn btn-primary" type="button" onClick={()=>setShowAddPackage(true)}>
              <div className='d-flex'>
                Add <i class="bi bi-plus-circle ms-2 d-inline"></i> 
              </div>
            </button>
          </form>
          </div>
        </div>



        <Modal
              show={showAddPackage}
              onHide={() => setShowAddPackage(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              size={"xl"}
              animation ={true}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Add New Package
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div class="row g-3 align-items-baseline">
                <div className='row my-2'>
                <div class="col-lg-2 col-4 p-0">
                <label for="packageName" class="form-label">Package Name</label>
                </div>
                <div class="col-lg-4 col-8">
                      <input type="text" class="form-control" id="packageName"/>
                </div>
                </div>
                <div className='row my-2'>
                <div class="col-lg-2 col-4 p-0">
                <label for="packageName" class="form-label">Package Description</label>
                </div>
                <div class="col-lg-4 col-8">
                      <input type="text" class="form-control" id="packageName"/>
                </div>
                </div>
                <div className='row'>
                  <p className='my-2 p-0'>Please select relevant services</p>
                    {
                      mockData.map((data,index)=><SingleService id={index} name={data}/>) 
                    }
                </div>
                <div className='row justify-content-end'>
                <div className='col-lg-1 col-md-3 col-sm-4'><button type='button' className='btn  btn-primary w-5'>Save</button></div>
                </div>
                </div>
              
              </Modal.Body>
            </Modal>


    </div>
  )
}

export default Packages