import React from 'react'
import Footer from './Footer'
import Side from '../sidebar/Side'
import Header from './Header'

function AdminLayout({children}) {
  return (
    <div className='d-flex'>
        <Side className="w-25"/>
        <div className='w-75'>
        <Header/>
        <div className='main'>
        {children}
      </div>
      <Footer/>
        </div>
        
    </div>
  )
}

export default AdminLayout
