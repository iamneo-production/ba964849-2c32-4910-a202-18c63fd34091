import React from 'react'
import UserBooking from '../../../components/User/UserBooking/UserBooking'
import classes from './Userbooking.module.css';
import { useEffect,useState} from "react";
import axios from "axios";

function Userbooking() {
  const [appointmentList,setAppointmentList]= useState([]);
  
  const fetchAppointments = async()=>{
    const res = await axios({
      method:'get',
      url:'http://localhost:9090/getAppointments',
      headers: {
        'Access-Control-Allow-Origin': true,
      }
    });
    setAppointmentList(res.data);
  }

  useEffect(()=>{
    fetchAppointments();
  },[])
  return (
    
        <div className={classes.table}>
          <h2>Your Bookings</h2>
          <table className="table table-hover">
            <thead>
        <tr>
          <th>Center</th>
          <th>Product</th>
          <th>Date</th><br></br>
          <th>Timing</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
           {
             appointmentList.map((item,index)=>{
               return <UserBooking data={item} key={index} onDelete={fetchAppointments}/>; 
             })
           }
           </tbody>
           </table>
        </div>
            
  )
}

export default Userbooking