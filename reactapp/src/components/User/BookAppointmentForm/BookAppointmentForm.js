import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import { bookAppointment } from "../../../api/myaxios";
import styles from "./BookAppointmentForm.module.css";
import { toast } from "react-toastify";
function BookAppointmentForm(props) {

    const navigate=useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = user.data;
    
    async function handleOnSubmit(val){
        try{
          val["userId"]=userInfo.userId;
          val["serviceCenterId"] = props.center.serviceCenterId;
          val["userName"]=userInfo.name;
          val["centerName"]=props.center.name;
          const res = await bookAppointment(val);
          toast.success("Booked successfuly");
          navigate('/user/Mybooking');
        }catch(error){
          console.log(error);
          alert('Booking Failed');
        }
      }

    // Yup validate object for form validation
    const validate = Yup.object({
      productName: Yup.string().max(25, 'cannot exceed limit 25')
          .required('Required')
          .min(3,'Minimum 3 characters' ),
      productModelNo:Yup.string().max(15,'Maximum 15 character')
            .required('Required')
            .min(2,'Minimum 2 characters'),
      purchaseDate:Yup.date().required('Required'),
      problemStatement: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
      bookingDate:Yup.string(),
      bookingTime:Yup.string()
    });

    return (
        <Formik
            enableReinitialize
            initialValues={{
                productName: '',
                productModelNo: '',
                purchaseDate: '',
                problemStatement: '',
                bookingDate:props.date,
                bookingTime:props.time,
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
                    
                        <TextField id="enterProductName" placeholder='Enter the name of the product' name="productName" type="text" label="Product Name"/>
                        <TextField id="enterModelNo" placeholder="Enter the model no of the product" name="productModelNo" type="text" label="Model No."/>
                        <TextField id="enterDateOfPurchase" placeholder="Enter the date of purchase" name="purchaseDate" type="date" label="Purchase Date"/>
                        <TextField id="enterProblem" placeholder="Enter the problem of the product" name="problemStatement" type="textarea" label="Problem"/>
                        <TextField placeholder="click on select slot to choose date" type="text" name="bookingDate" label="Booking Date"/>
                        <TextField placeholder= "click on select slot to choose time" type="text"
                        name="bookingTime" label="Booking Time"/>
                        <br></br>
                        <button className="btn btn-dark mt-3" id="bookButton" type="submit">Book </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default BookAppointmentForm