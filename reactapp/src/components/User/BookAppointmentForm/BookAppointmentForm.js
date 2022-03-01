import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import styles from "./BookAppointmentForm.module.css";
function BookAppointmentForm(props) {

    const navigate=useNavigate();
    const validate = Yup.object({
        productName: Yup.string().max(25, 'Must be 15 characters or less')
            .required('Required')
            .min(10,'Minimum 10 characters' ),
        productModelNo:Yup.string().max(15,'Maximum 15 character')
             .required('Required')
             .min(10,'Minimum 15 characters'),
        purchaseDate:Yup.date().required('Required'),
        problemStatement: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
        bookingDate:Yup.string().required("Required"),
        bookingTime:Yup.string().required("Required")
        
    });

    const userInfo = JSON.parse(localStorage.getItem("user"));
    async function handleOnSubmit(val){
        try{
          val["userId"]=userInfo.userId;
          val["serviceCenterId"] = props.center.serviceCenterId;
          console.log(val);
          const res = await axios({
            method:'post',
            url:'http://localhost:9090/bookappointment',
            data:val
          });
          alert("Booked Successfully");
          navigate('/user/Mybooking');
        }catch(error){
          console.log(error);
          alert('Booking Failed');
        }
      }
    
    return (
        <Formik
        
            initialValues={{
                productName: '',
                productModelNo: '',
                purchaseDate: '',
                problemStatement: '',
                bookingDate:'',
                bookingTime:'',

            }}
            validationSchema={validate}
          onSubmit={(values,{resetForm}) => {
            handleOnSubmit(values);
            resetForm({values:''});
          }}
            
            
        >
            {formik => (
                
                <div className={styles.container} >
                
                    <h3 className="my-3 font-weight-bold-display-3">Enter the details</h3>
                    <Form>
                    
                        <TextField id="enterProductName" placeholder='Enter the name of the product' name="productName" type="text" />
                        <TextField id="enterModelNo" placeholder="Enter the model no of the product" name="productModelNo" type="text" />
                        <TextField id="enterDateOfPurchase" placeholder="Enter the date of purchase" name="purchaseDate" type="text" />
                        <TextField id="enterProblem" placeholder="Enter the problem of the product" name="problemStatement" type="textarea" />
                        <TextField  placeholder="Enter booking date" name="bookingDate" type="text" />
                        <TextField  placeholder="Enter booking time" name="bookingTime" type="text" />
                        <br></br>
                        
                        <button className="btn btn-dark mt-3" id="bookButton" type="submit">Book </button>
                    </Form>
                    <br />
                </div>
            )}
        </Formik>
    )
}
export default BookAppointmentForm