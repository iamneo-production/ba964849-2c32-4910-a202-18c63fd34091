import React from 'react';
import styles from './UserCentreCard.module.css';
import AddIcon from '@material-ui/icons/Add';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import {Link} from 'react-router-dom';

function UserCentreCard(props) {  
    console.log(props.data);
    const handleOnClickAdd=()=>{
        localStorage.setItem("bookCenterDetails",JSON.stringify(props.data));
    }

  return (
    <div className={`container, ${styles.main}`} style={props.style}>
        <div className="row">
            <div className="col-sm">
                <div class="card" >
                    <img style={{width:'100%',height:'250px',objectFit:'fill'}}src={props.data.imgUrl} class="card-img-top" id="Grid1" alt="Vacuumservice"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.data.name}</h5>
                        <p class="card-text"><LocationOnSharpIcon style={{fontSize:"small",color:"black",marginRight:"4px"}}/>{` ${props.data.address}, ${props.data.city}-${props.data.pincode}`}</p>
                        <p class="card-text"><AccessTimeFilledSharpIcon style={{fontSize:"small",color:"black",marginRight:"4px"}}/> 10:00AM to 05:00PM</p>
                        <p class="card-text"><PhoneAndroidSharpIcon style={{fontSize:"small",color:"black",marginRight:"4px"}}/>{` ${props.data.mobileNumber}`}</p>
                        <p class="card-text"><EmailSharpIcon style={{fontSize:"small",color:"black",marginRight:"4px"}}/>{` ${props.data.email}`}</p>
                        <p style={{fontSize:'18px',color:'darkgray'}} class="card-text">{props.data.description}</p>
                        <>
                        {   props.enableOptions &&
                            <Link to="/user/dashboard" style={{marginRight:'8px'}} onClick={()=>handleOnClickAdd()}
                            >
                            <span className={`btn-success ${styles.bookButton}`}>Book<AddIcon/></span>
                            </Link>
                        }
                        </>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCentreCard



