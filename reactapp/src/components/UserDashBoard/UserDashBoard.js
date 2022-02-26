import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import axios from "axios";
import Navba from '../UserNavbar/UserNavbar';
import styles from '../UserDashBoard/UserDashBoard.module.css';
import img from "../../assets/vacuumservice.jpg";
function Dashboard(props) {
    
    const validate = Yup.object({
        name: Yup.string().max(25, 'Must be 15 characters or less')
            .required('Required')
            .min(10,'Minimum 10 characters' ),
        model:Yup.string().max(15,'Maximum 15 character')
             .required('Required')
             .min(15,'Minimum 15 characters'),
        date:Yup.date().required('Required'),
        number: Yup.string().required('Required').matches("^[0-9]{10}$", 'Phone number is not valid'),
        problem: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
        
    });
    
    return (
        <div>

        <Navba/>
        <div className="card1">
      <div className="upper-container">
        <div className="image-container">
        <img src={img} alt="" height="100px" width="100px" />
      </div>
    </div>
    <div className="lower-container">
      <h3><u>Vacuumservice</u></h3>
      <h5>Address:xxx</h5>
      <h5>Phone No:xxx</h5>
      <h5>Email Id:xxx</h5>
      <h5>Timing:10:00Am to 05:00Pm</h5>
      
    </div>
</div>
        <Formik
        
            initialValues={{
                name: '',
                model: '',
                date: '',
                number: '',
                problem: '',
                description:'',
            }}
            validationSchema={validate}
            
            
        >
            {formik => (
                
                <div className={styles.container} >
                
                    <h1 className="my-4 font-weight-bold-display-4">Enter the details</h1>
                    <Form>
                    
                        <TextField id="enterProductName" placeholder='Enter the name of the product' name="name" type="text" />
                        <TextField id="enterModelNo" placeholder="Enter the model no of the product" name="model" type="text" />
                        <TextField id="enterDateOfPurchase" placeholder="Enter the date of purchase" name="date" type="text" />
                        <TextField id="enterContactNumber" placeholder="Enter the contact number" name="number" type="text" />
                        <TextField id="enterProblem" placeholder="Enter the problem of the product" name="problem" type="textarea" />
                        <TextField  placeholder="Available Slot" name="description" type="textarea" />
                        <br></br>
                        
                        <p className="btn btn-dark mt-3" id="bookButton"> <Link to="/myBooking">Book</Link></p>
                    </Form>
                    <br />
                </div>
            )}
        </Formik>
        </div>
    )
}
export default Dashboard