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
        productName: Yup.string().max(25, 'cannot exceed limit 25')
            .required('Required')
            .min(3,'Minimum 3 characters' ),
        productModelNo:Yup.string().max(15,'Maximum 15 character')
             .required('Required')
             .min(2,'Minimum 2 characters'),
        purchaseDate:Yup.date().required('Required'),
        problemStatement: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
        bookingDate:Yup.string().required("Required"),
        bookingTime:Yup.string().required("Required")
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
                problemStatement: props.data.problemStatement,
                bookingDate: props.data.bookingDate,
                bookingTime: props.data.bookingTime
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
                        <TextField id="editProblem" placeholder="Enter the problem of the product" name="problemStatement" type="textarea" />
                        <TextField id="editDateOfPurchase" placeholder="Enter the date of booking" name="bookingDate" type="text" />
                        <TextField  placeholder="Enter booking time" name="bookingTime" type="text" />
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