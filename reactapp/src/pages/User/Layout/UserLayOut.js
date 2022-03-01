import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserNavbar from '../../../components/User/UserNavbar/UserNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserLayOut() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
    if(user==null || user.data.userType!=="USER"){
      toast.error('Please Login to view this page');
      navigate("/login");
    }
  },[])

  return (
    <>
      {
      user && 
      <div>
        <UserNavbar/>
        <h1>Welcome, {user.data.name}</h1>
        <br></br>
        <ToastContainer/>
        <Outlet/>
      </div>
    }
    </>
  )
}

export default UserLayOut