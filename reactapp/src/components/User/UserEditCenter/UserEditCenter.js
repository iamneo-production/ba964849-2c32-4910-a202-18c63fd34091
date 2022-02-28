import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Navba from '../UserNavbar/UserNavbar';
import styles from './UserEditCenter.module.css';

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
        <div className={styles.one}>
        <Formik
        
            initialValues={{
                name: '',
                model: '',
                date: '',
                number: '',
                problem: '',
                }}
            validationSchema={validate}
            
            
        >
            {formik => (
                
                <div className={styles.container}>
                
                    <h1 className="my-4 font-weight-bold-display-4">Edit the details</h1>
                    <Form>
                    
                        <TextField id="editProductName" placeholder='Enter the name of the product' name="name" type="text" />
                        <TextField id="editModelNo" placeholder="Enter the model no of the product" name="model" type="text" />
                        <TextField id="editDateOfPurchase" placeholder="Enter the date of purchase" name="date" type="text" />
                        <TextField id="editrContactNumber" placeholder="Enter the contact number" name="number" type="text" />
                        <TextField id="editProblem" placeholder="Enter the problem of the product" name="problem" type="textarea" />
                        <TextField  placeholder="Available Slot" name="description" type="textarea" />
                        <br></br>
                        
                        <p className="btn btn-dark mt-3" id="tobookButton"> <Link to="">Update</Link></p>
                    </Form>
                    <br />
                </div>
                
            )}
        </Formik>
        </div>
        </div>
    )
}
export default Dashboard