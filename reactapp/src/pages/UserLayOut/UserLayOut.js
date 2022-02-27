import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../../components/UserNavbar/UserNavbar'

function UserLayOut() {
  return (
    <div>
        <UserNavbar/>
        <h1>Welcome, User</h1>
        <br></br>
        <Outlet/>
    </div>
  )
}

export default UserLayOut