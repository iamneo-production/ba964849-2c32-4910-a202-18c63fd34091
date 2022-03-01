import React from "react";
import './UserBooking.module.css'
import styles from './UserBooking.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
const Mybooking = (props) => {
  const handleOnClickEdit = ()=>{
    localStorage.setItem("data",JSON.stringify(props.data));
}
    return (
      
      <><tr>
          <td>Serive center name</td>
          <td>{props.data.productName}</td>
          <td>{props.data.bookingDate}</td><br></br>
          <td>{props.data.bookingTime}</td> 
          <td>
            <Link to="" onClick={DeleteIcon} className="btn_black">
              <DeleteIcon/>
            </Link>
          </td>
          <td>
            <Link to="/user/EditCenter" onClick={()=>handleOnClickEdit()} className="btn_black">
            <EditIcon/>
            </Link>
          </td>
        </tr>
      </>
                      
  );
};
  
export default Mybooking;