import React from "react";
import './UserBooking.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
  function UserBooking(props) {

    const id = props.data.appointmentId;
    const deleteURL = `http://localhost:9090/deleteAppointment/${id}`;

    const handleOnClickDelete = async()=>{
        try{
            if(window.confirm('Are you sure you want to delete?')){
                const res = await axios({
                    method:'delete',
                    url:deleteURL
                });
                alert('Deleted Sucessfully');
                props.onDelete();
            }
        }catch(error){
            console.log("delete error: ",error);
            alert("Could Not Delete Try Again");
        }
        
    }
    const handleOnClickEdit = ()=>{
      localStorage.setItem("data",JSON.stringify(props.data));
  }
      
    return (
      <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Timing</th>
        </tr>
        <tr>
          <td>Vacuum Service</td>
          <td>DD/MM/YYYY</td>
          <td>4pm to 5pm 
            <>
            {
            props.enableOptions ?  
            <>
                            <></><Link to="/user/home" onClick={()=>handleOnClickDelete()} className="btn_black">
                        <DeleteIcon/>
                        </Link>
                        <Link to="/user/EditCenter"onClick={()=>handleOnClickEdit()} className="btn_black">
                        <EditIcon/>
                        </Link>
                        </> 
                            : ''
                        }
                        </></td>
                        
          
                        
        </tr>
       
      </table>   
    </div>
  );
};
  
export default UserBooking;