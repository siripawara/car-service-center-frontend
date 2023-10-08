import '../Register/style.css' ;
import { useState ,useEffect} from "react";
import {validator,styleValidator} from "../../utils/validation"

function Register() {
  useEffect(() => {
    console.log("rendered")
  });
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    address:"",
    email:"",
    identicardNumber:"",
    password:"",
    repeatPassword:""
  })
  const [errors,setErrors] = useState({
    firstName:"",
    lastName:"",
    address:"",
    email:"",
    identicardNumber:"",
    password:"",
    repeatPassword:""
  })
  
  
  const handleSubmit=(e)=>{ //^[A-Z][a-z]{2,20}$
    e.preventDefault() 
    let errorTemp = {
      firstName:"",
      lastName:"",
      address:"",
      email:"",
      identicardNumber:"",
      password:"",
      repeatPassword:""
    }

    if(!(validator("^[A-Z][a-z]{2,20}$",data.firstName))){
      errorTemp.firstName = "Enter your first name, start with capital letter"
    }else{errorTemp.firstName = "ok"}
    if(!(validator("^[A-Z][a-z]{2,20}$",data.lastName))){
      errorTemp.lastName = "Enter your correct Last name, start with capital letter"
    }else{errorTemp.lastName = "ok"}
    if(!(validator("^[a-zA-Z0-9/ ]{1,60}$",data.address))){
      errorTemp.address = "Enter your correct address"
    }else{errorTemp.address = "ok"}
    if(!(validator('^[a-z]{2,30}[@][a-z]{2,10}[.][a-z]{2,10}$',data.email))){
      errorTemp.email = "Enter your correct email (username@domain.abc)"
    }else{errorTemp.email = "ok"}
    if(!(validator('^[0-9]{2,20}$',data.identicardNumber))){
      errorTemp.identicardNumber = "Enter your correct NIC" 
    }else{errorTemp.identicardNumber = "ok"}
    
    setErrors(errorTemp)
    
  }
 
  
  return (
    <div className="container-fluid com">
      <div className="row justify-content-end mycontainer">
        <div className="col-lg-4 col-12 mycontainer2" style={{ color: 'blue', paddingRight:"60px" ,paddingTop:"25px"  }}>
            <form className="my-auto">
              <h1 >Sign Up</h1>
              <div className="mb-2">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className={`form-control ${ styleValidator(errors.firstName)}`} autoFocus value={data.firstName} id="firstName"  onChange={(e)=>setData({...data,firstName:e.target.value.trim()})}/>
                <div className="invalid-feedback">{errors.firstName} </div>
              </div>
              <div className="mb-2">
                <label for="lastName" className="form-label">Last Name</label>
                <input type="text" className={`form-control ${ styleValidator(errors.lastName)}`} value={data.lastName} id="lastName"  onChange={(e)=>setData({...data,lastName:e.target.value.trim()})}/>
                <div className="invalid-feedback">{errors.lastName} </div>
              </div>
              <div className="mb-2">
                <label for="Address" className="form-label">Address</label>
                <input type="text" className={`form-control ${ styleValidator(errors.address)}`} value={data.address} id="address"  onChange={(e)=>{setData({...data,address:e.target.value.trim()})  }}/>
                  <div className="invalid-feedback">{errors.address} </div>
              </div>
              <div className="mb-2">
                <label for="email" className="form-label">E-mail</label>
                <input type="text" className={`form-control ${ styleValidator(errors.email)}`} value={data.email} id="email"  onChange={(e)=>setData({...data,email:e.target.value.trim()})}/>
                <div className="invalid-feedback">{errors.email} </div>
              </div>
              <div className="mb-2">
                <label for="identicardNumber" className="form-label">NIC</label>
                <input type="text" className={`form-control ${ styleValidator(errors.identicardNumber)}`} value={data.identicardNumber} id="identicardNumber"  onChange={(e)=>setData({...data,identicardNumber:e.target.value.trim()})}/>
                <div className="invalid-feedback">{errors.identicardNumber} </div>
              </div>
              <div className="mb-2">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={data.password} id="password" onChange={(e)=>setData({...data,password:e.target.value.trim()})}/>
                {data.password}
              </div>
              <div className="mb-2">
                <label for="repeatPassword" className="form-label">Repeat Password</label>
                <input type="password" className="form-control"value={data.repeatPassword}  id="repeatPassword" onChange={(e)=>setData({...data,repeatPassword:e.target.value.trim()})}/>
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
              <a href='#' className='p-3'>Do you have an account?</a>
             
              
              
            </form>
        </div>
       
      </div>
    </div>
  );
}

export default Register;