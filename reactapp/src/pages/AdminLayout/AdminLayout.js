import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'

function AdminLayout() {
  return (
    <div>
        <AdminNavbar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout