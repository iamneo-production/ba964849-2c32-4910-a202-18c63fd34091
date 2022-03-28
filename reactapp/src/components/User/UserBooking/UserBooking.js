import React, { useEffect,useState } from "react";
import './UserBooking.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useNavigate } from "react-router-dom";
import { deleteBooking,fetchCenterById } from "../../../api/myaxios";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Mybooking = (props) => {

  const navigate = useNavigate();
  const [centerData, setCenterData] = useState({});

  const id = props.data.appointmentId;
  const deleteURL = `deleteAppointment/${id}`;

  function getcenterData(){
    fetchCenterById(`getServiceCenter/${props.data.serviceCenterId}`)
    .then(res=>res.data)
    .then(data=>setCenterData(data));
  }

  useEffect(()=>{
    getcenterData();
  },[])

  const handleOnClickDelete = async()=>{
    try{
      if(window.confirm('Are you sure you want to delete?')){
          const res = await deleteBooking(deleteURL);
          toast.success("Booking Deleted");
          props.onDelete();
      }
  }catch(error){
      alert("Could Not Delete Try Again");
  }
  }
  const handleOnClickEdit = ()=>{
    localStorage.setItem("bookCenterDetails",JSON.stringify(centerData)); 
    localStorage.setItem("AppointmentDetails",JSON.stringify(props.data));
    localStorage.setItem("isNewAppointment",false);
    navigate("/user/dashboard");
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
          <a  onClick={()=>handleOnClickEdit()}>
            <EditIcon/>
          </a>
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