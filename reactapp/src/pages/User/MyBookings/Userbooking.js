import React from 'react'
import UserBooking from '../../../components/User/UserBooking/UserBooking'
import classes from './Userbooking.module.css';
import { useEffect,useState} from "react";
import axios from "axios";

function Userbooking() {
  const [centreList,setCentreList]= useState([]);
  
  const fetchCentreList = async()=>{
    const res = await axios({
      method:'get',
      url:'http://localhost:9090/getAppointments',
      headers: {
        'Access-Control-Allow-Origin': true,
      }
    });
    setCentreList(res.data);
  }

  useEffect(()=>{
    fetchCentreList();
  },[])
  return (
    
        <div className={classes.table}>
          <table>
            <thead>
        <tr>
          <th>Name</th>
          <th>Date</th><br></br>
          <th>Timing</th>
        </tr>
        </thead>
        <tbody class="app-table-all">
           {
             centreList.map((item,index)=>{
               return <UserBooking data={item} key={index} onDelete={fetchCentreList} enableOptions={true} />; 
             })
           }
           </tbody>
           </table>
        </div>
            
  )
}

export default Userbooking