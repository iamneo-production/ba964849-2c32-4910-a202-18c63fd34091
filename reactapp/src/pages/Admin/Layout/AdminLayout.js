import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../../components/Admin/AdminNavbar/AdminNavbar'

function AdminLayout() {
  return (
    <div>
        <AdminNavbar/>
        <h1>Welcome, Admin</h1>
        <br></br>
        <Outlet/>
    </div>
  )
}

export default AdminLayout