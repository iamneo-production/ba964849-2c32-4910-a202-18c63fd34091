import React from 'react'
import AdminAddCentreForm from '../../components/AdminAddCentreForm/AdminAddCentreForm'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'

function AdminAddCentrePage() {
  return (
      <div>
        <AdminNavbar/>
        <div style={{width:'80%',margin:'16px auto'}}>
            <AdminAddCentreForm/>
        </div>
      </div>
  )
}

export default AdminAddCentrePage