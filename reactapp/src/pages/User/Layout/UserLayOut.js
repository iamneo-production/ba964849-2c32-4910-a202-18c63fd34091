import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../../../components/User/UserNavbar/UserNavbar'

function UserLayOut() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("userrrrrrrrrrr",user);
  return (
    <div>
        <UserNavbar/>
        <h1>Welcome, {user.data.name}</h1>
        <br></br>
        <Outlet/>
    </div>
  )
}

export default UserLayOut