import React from 'react';
import styles from './UserCentreCard.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
import axios from 'axios';

function UserCentreCard(props) {

    const deleteURL = `http://localhost:9090/deleteServiceCenter/${props.data.id}`;

  return (
    <div className={`container, ${styles.main}`} style={props.style}>
        <div className="row">
            <div className="col-sm">
                <div class="card" >
                    <img style={{width:'100%',height:'250px',objectFit:'fill'}}src={props.data.imgUrl} class="card-img-top" id="Grid1" alt="Vacuumservice"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.data.name}</h5>
                        <p class="card-text">{`Place: ${props.data.address}`}</p>
                        <p class="card-text">Timings: 10:00AM to 05:00PM</p>
                        <p class="card-text">{`Phone: ${props.data.mobileNumber}`}</p>
                        <p class="card-text">{`Email: ${props.data.email}`}</p>
                        <p style={{fontSize:'18px',color:'green'}} class="card-text">{props.data.description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCentreCard


