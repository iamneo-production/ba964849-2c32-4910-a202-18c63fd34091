import React from "react";
import './UserBooking.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
const Mybooking = () => {
      
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
          <td>4pm to 5pm <Link to="" onClick={DeleteIcon} className="btn_black">
                        <DeleteIcon/>
                        </Link>
                        <Link to="/EditCenter"onClick={EditIcon} className="btn_black">
                        <EditIcon/>
                        </Link></td>
                        
          
                        
        </tr>
        <tr>
          <td>VacUumService</td>
          <td>DD/MM/YYYY</td>
          <td>5pm to 6pm <Link to="" onClick={DeleteIcon} className="btn_black">
                        <DeleteIcon/>
                        </Link>
                        <Link to="/EditCenter" onClick={EditIcon} className="btn_black">
                        <EditIcon/>
                        </Link></td>
        </tr>
        <tr>
          <td>Forbes Service</td>
          <td>DD/MM/YYYY</td>
          <td>9am to 11am <Link to="" onClick={DeleteIcon} className="btn_black">
                        <DeleteIcon/>
                        </Link>
                        <Link to="/EditCenter" onClick={EditIcon} className="btn_black">
                        <EditIcon/>
                        </Link></td>
        </tr>
      </table>   
    </div>
  );
};
  
export default Mybooking;