import React from 'react'
import '../SideMenu/SiideMenu.css'
const SideMenu = () => {
  return (
    <ul className='sidebarList '>
        <li className='border-bottom'><i class="bi bi-house-door p-2 pe-3"></i><span className='d-none d-sm-inline'>Home</span></li>
        <li className='border-bottom'><i class="bi bi-pencil-square p-2 pe-3"></i><span className='d-none d-sm-inline'>Appoinments</span></li>
        <li className='border-bottom'><i class="bi bi-box p-2 pe-3"></i><span className='d-none d-sm-inline'>Packages</span></li>
        <li className='border-bottom'><i class="bi bi-people p-2 pe-3"></i><span className='d-none d-sm-inline'>Employee</span></li>
        <li className='border-bottom'><i class="bi bi-people p-2 pe-3"></i><span className='d-none d-sm-inline'>Customers</span></li>
        <li className='border-bottom'><i class="bi bi-bar-chart-line p-2 pe-3"></i><span className='d-none d-sm-inline'>Reports</span></li>
    </ul>
  )
}

export default SideMenu