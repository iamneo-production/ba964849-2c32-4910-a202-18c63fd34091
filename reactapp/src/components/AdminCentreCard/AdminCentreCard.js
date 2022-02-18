import React from 'react';
import styles from './AdminCentreCard.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
import axios from 'axios';

function AdminCentreCard(props) {
    const deleteURL = `http://localhost:9090/deleteServiceCenter/${props.data.id}`;
    const handleOnClickDelete = async()=>{
        try{
            if(window.confirm('Are you sure you want to delete?')){
                const res = await axios({
                    method:'delete',
                    url:deleteURL
                });
                console.log(res);
                alert('Deleted Sucessfully');
               props.onDelete();
            }
        }catch(error){
            console.log(error);
            alert("Could Not Delete Try Again");
        }
        
    }
    const handleOnClickEdit = ()=>{
        localStorage.setItem("data",JSON.stringify(props.data));
    }

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
                        <Link to="/admin/edit-center" style={{marginRight:'8px'}}>
                        <EditIcon onClick={()=>handleOnClickEdit()}/>
                        </Link>
                        <Link to="/admin/home" onClick={()=>handleOnClickDelete()}
                        >
                        <DeleteIcon/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCentreCard



