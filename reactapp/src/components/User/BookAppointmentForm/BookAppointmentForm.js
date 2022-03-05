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

  //Managing Date for calendar #########################################################

    const startDate = new Date();
    startDate.setDate(startDate.getDate()+1);
    const endDate = new Date();
    endDate.setDate(endDate.getDate()+6);

    const convertDateToString = (date) => {
      let dd = date.getDate();
      dd = dd >= 10 ? dd : '0' + dd;
      let mm = date.getMonth()+1;
      mm = mm >= 10 ? mm : '0' + mm;
      let yyyy = date.getFullYear();
      return yyyy+"-"+mm+"-"+dd;
    }

    const startDateString = convertDateToString(startDate);
    const endDateString = convertDateToString(endDate);

    console.log(startDateString,endDateString);

  //###################################################################################

    const user = JSON.parse(localStorage.getItem("user"));
    const userInfo = user.data;
    
    async function handleOnSubmit(val){
        try{
          val["userId"]=userInfo.userId;
          val["serviceCenterId"] = props.center.serviceCenterId;
          const res = await bookAppointment(val);
          console.log("user appointment:",res.data);
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
      bookingDate:Yup.string().required("Required"),
      bookingTime:Yup.string().required("Required") 
    });
    
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
                    
                        <TextField id="enterProductName" placeholder='Enter the name of the product' name="productName" type="text" label="Product Name"/>
                        <TextField id="enterModelNo" placeholder="Enter the model no of the product" name="productModelNo" type="text" label="Model No."/>
                        <TextField id="enterDateOfPurchase" placeholder="Enter the date of purchase" name="purchaseDate" type="date" label="Purchase Date"/>
                        <TextField id="enterProblem" placeholder="Enter the problem of the product" name="problemStatement" type="textarea" label="Problem"/>
                        <TextField  placeholder="Enter booking date" name="bookingDate" type="date" label="Booking Date" min={startDateString} max={endDateString}/>
                        <TextField  placeholder="Enter booking time" name="bookingTime" type="time" label="Booking Time"/>
                        <br></br>
                        
                        <button className="btn btn-dark mt-3" id="bookButton" type="submit">Book </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default BookAppointmentForm