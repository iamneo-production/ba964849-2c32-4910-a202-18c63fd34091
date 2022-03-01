import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";
import styles from './UserEditCenter.module.css';

function EditCenter(props) {
    const id = props.data.appointmentId;
    console.log(id);
    console.log(props.data);
    console.log("Edit Appointment id: ",id);
    const editURL = `http://localhost:9090/editAppointment/${id}`;
    const validate = Yup.object({
        productName: Yup.string().max(25, 'Must be 15 characters or less')
            .required('Required')
            .min(10,'Minimum 10 characters' ),
        productModelNo:Yup.string().max(15,'Maximum 15 character')
             .required('Required')
             .min(15,'Minimum 15 characters'),
        purchaseDate:Yup.date().required('Required'),
        serviceCenterId: Yup.string().required('Required').matches("^[0-9]{10}$", 'Phone number is not valid'),
        problemStatement: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
        
    });
    const handleOnSubmit = async (value) => {
        
        try {
            const res = await axios({
                method: 'PUT',
                url: editURL,
                data: value
            });
            localStorage.setItem('data',JSON.stringify(res.data));
            props.getCardtoEdit();
            alert('Updated Sucessfully');
            window.location.replace("/user/mybooking");
        } catch (err) {
            console.log('error update: ',err);
            alert("Error while updating")
        }
    }

    
    return (
        
        <Formik
            enableReinitialize
            initialValues={{
                productName: props.data.productName,
                productModelNo: props.data.productModelNo,
                purchaseDate: props.data.purchaseDate,
                serviceCenterId: props.data.serviceCenterId,
                problemStatement: props.data.problemStatement
                }}
            validationSchema={validate}
            onSubmit={
                (values) => {
                    handleOnSubmit(values);
                }
            }
            
        >
            {formik => (
                
                <div className={styles.container}>
                
                    <h1 className="my-4 font-weight-bold-display-4">Edit the details</h1>
                    <Form>
                    
                        <TextField id="editProductName" placeholder='Enter the name of the product' name="productName" type="text" />
                        <TextField id="editModelNo" placeholder="Enter the model no of the product" name="productModelNo" type="text" />
                        <TextField id="editDateOfPurchase" placeholder="Enter the date of purchase" name="purchaseDate" type="text" />
                        <TextField id="editrContactNumber" placeholder="Enter the contact number" name="serviceCenterId" type="text" />
                        <TextField id="editProblem" placeholder="Enter the problem of the product" name="problemStatement" type="textarea" />
                        <TextField  placeholder="Available Slot" name="bookingTime" type="textarea" />
                        <br></br>
                        <button className="btn btn-dark mt-3" type="submit">update</button>
                        
                    </Form>
                    <br/>
                </div>
                
            )}
        </Formik>
        
    )
}
export default EditCenter