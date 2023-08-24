import React from 'react'
import { Link } from 'react-router-dom'

function Side() {
  return (
    <div className='bg-dark text-light'>
      <div className='mt-4 text-center'>Admin</div>
      <hr />
      <div>
        <ul className='list-unstyled ms-5 me-5 sidebar'>
            <li>
                <Link className='nav-link'  to="/dashboard">Dashboard</Link></li>
            <li>
                <Link className='nav-link' to="/books" >Books</Link></li>
            <li>
                <Link className='nav-link' to ="/client">Clients</Link></li>
            <li>
                <Link className='nav-link' to="/history">History</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Side
