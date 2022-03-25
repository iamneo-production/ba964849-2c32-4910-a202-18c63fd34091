import React from "react";
import './UserBooking.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import { deleteBooking } from "../../../api/myaxios";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Mybooking = (props) => {
  const id = props.data.appointmentId;
  const deleteURL = `deleteAppointment/${id}`;

  const handleOnClickDelete = async()=>{
    try{
      if(window.confirm('Are you sure you want to delete?')){
          const res = await deleteBooking(deleteURL);
          toast.success("Booking Deleted");
          props.onDelete();
      }
  }catch(error){
      console.log("delete error: ",error);
      alert("Could Not Delete Try Again");
  }
  }
  const handleOnClickEdit = ()=>{
    localStorage.getItem("bookCenterDetails",JSON.stringify(props.data)); 
    localStorage.setItem("AppointmentDetails",JSON.stringify(props.data));
    localStorage.setItem("isNewAppointment","false");
    //props.setModalData(props.data);
    //props.showModal(true);
}
    return (
      
      <>
        <tr>
          <td>{props.data.appointmentId}</td>
          <td>{props.data.centerName}</td>
          <td>{props.data.productName}</td>
          <td>{props.data.bookingDate}</td><br></br>
          <td>{props.data.bookingTime}</td> 
          <td>
          <Link to="/user/dashboard" onClick={()=>handleOnClickEdit()}>
            <EditIcon/>
          </Link>
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