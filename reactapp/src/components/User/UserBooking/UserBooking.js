import React, { useState } from "react";
import './UserBooking.module.css'
import styles from './UserBooking.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReactModal from "react-modal";
import UserEditCenter from "../UserEditCenter/UserEditCenter";
const Mybooking = (props) => {

  const [showModal,setShowModal] = useState(false);

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
    localStorage.setItem("data",JSON.stringify(props.data));
    setShowModal(true);
}
    return (
      
      <>
        <tr>
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
        <ToastContainer/>
        <ReactModal isOpen={showModal} className={styles.modal}>
          <UserEditCenter data={props.data} onClose={setShowModal}/>
          <button className={styles.closeButton} onClick={()=>setShowModal(false)}>Close</button>
        </ReactModal>
      </>
                      
  );
};
  
export default Mybooking;