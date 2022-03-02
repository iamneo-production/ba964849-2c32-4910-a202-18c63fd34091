import React, { useState } from "react";
import './UserBooking.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Mybooking = (props) => {
  console.log("in user booking component: ",props);
  const id = props.data.appointmentId;
  const deleteURL = `http://localhost:9090/deleteAppointment/${id}`;

  const handleOnClickDelete = async()=>{
    try{
      if(window.confirm('Are you sure you want to delete?')){
          const res = await axios({
              method:'delete',
              url:deleteURL
          });
          toast.success("Booking Deleted");
          props.onDelete();
      }
  }catch(error){
      console.log("delete error: ",error);
      alert("Could Not Delete Try Again");
  }
  }
  const handleOnClickEdit = ()=>{
    props.setModalData(props.data);
    props.showModal(true);
}
    return (
      
      <>
        <tr>
          <td>{props.data.appointmentId}</td>
          <td>Serive center name</td>
          <td>{props.data.productName}</td>
          <td>{props.data.bookingDate}</td><br></br>
          <td>{props.data.bookingTime}</td> 
          <td>
            <span onClick={()=>handleOnClickEdit()}>
            <EditIcon/>
            </span>
          </td>
          <td>
            <Link to="" onClick={()=>handleOnClickDelete()} className="btn_black">
              <DeleteIcon/>
            </Link>
          </td>
        </tr>
      </>
                      
  );
};
  
export default Mybooking;