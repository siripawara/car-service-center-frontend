import React from 'react'
import "../Home/Home.css"
import SummeryCard from '../SummeryCard/SummeryCard'

const Home = () => {
  return (
    <div className='container-fluid '>
        
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <SummeryCard/>
            </div>
            <div className='col-lg-6 col-sm-12'>
               <SummeryCard/> 
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <SummeryCard/>
            </div>
            <div className='col-lg-6 col-sm-12'>
               <SummeryCard/> 
            </div>
        </div>
    </div>
  )
}

export default Home