import React from 'react'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './AdminAddCentreForm.module.css';
import { useNavigate } from 'react-router-dom';
function AdminAddCentreForm() {

    const navigate = useNavigate();
    
    const validate = Yup.object({
        name: Yup.string()
          .max(25,'Should be less than 15 characters')
          .required('Name is required'),
          mobileNumber: Yup.string().matches("^[0-9]{10}$", 'Phone number is not valid')
          .required('Required'),
          address:Yup.string().max(50,'Should be less than 50 characters').required('Required'),
          imgUrl: Yup.string().url('Invalid URL'),
          email:Yup.string().email('Invalid email').required('Required'),
          description:Yup.string().max(100,'Should not exceed 100 characters')

      });
    
      async function handleOnSubmit(val){
        try{
          const res = await axios({
            method:'post',
            url:'http://localhost:9090/addServiceCenter',
            data:val
          });
          alert("Centre Added Successfully");
          navigate('/admin/home');
        }catch(error){
          console.log(error);
          alert('Add Centre Failed');
        }
      }
    
      return (
        <Formik
          initialValues={{
            name: '',
            mobileNumber: '',
            address:'',
            imgUrl:'',
            email:'',
            description:''
          }}
          validationSchema={validate}
          onSubmit={(values,{resetForm}) => {
            handleOnSubmit(values);
            resetForm({values:''});
          }}
        >
          {formik => (
            <div className={styles.container}>
              <h1 >Add Centre</h1>
              <Form>
                <TextField id="addName" label='Name' name="name" type="text" />
                <TextField id="addNumber" label="Enter the phone number" name="mobileNumber" type="text" />
                <TextField id="addAddress" label="Enter the address" name="address" type="text" />
                <TextField id="addImageUrl" label="Enter the image url" name="imgUrl" type="text" />
                <TextField id="addEmail" label="Enter the email id" name="email" type="email" />
                <TextField id="addCentreDescription" label="Give Description" name="description" type="textarea" />
                <br></br>
                <button className="btn btn-dark mt-3" type="submit">Add Centre</button>
              </Form>
              <br />
            </div>
          )}
        </Formik>
      )
}

export default AdminAddCentreForm