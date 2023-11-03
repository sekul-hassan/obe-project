import React from 'react'
import { Sidebar } from '../components/Sidebar'
import CourseAssessmentTable from '../components/CourseAssessmentTable'
import OutlineTable from '../components/OutlineTable'

export const OutlineTablePage = () => {
  return (
    <div className='container-fluid g-0 Page'>
      <div className='row min-vh-100'>
        <div className='col-sm-12 col-md-6 col-lg-2'>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar fixed-top'>
          <Sidebar/>
          
        </div>
        <div className='col-sm-12 col-md-6 col-lg-10'>
          <OutlineTable/>
        </div>
      </div>
    </div>
  )
}
