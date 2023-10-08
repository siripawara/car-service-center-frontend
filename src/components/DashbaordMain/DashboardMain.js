import React from 'react'
import '../DashbaordMain/DashboardMain.css'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import SideMenu from '../SideMenu/SideMenu'
import Appoinments from '../Appoinments/Appoinments'
const DashboardMain = () => {
  return (
    <div>
      <Nav/>
    <div className='container-fluid '>
      <div className='row '>
          <div className='col-2 p-0 m-0 border-end ' style={{backgroundColor:"white"}}>
           <SideMenu/>
          </div>
          <div className='col-10'>
            <Appoinments/>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default DashboardMain