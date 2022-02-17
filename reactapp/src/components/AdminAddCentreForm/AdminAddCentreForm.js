import React from 'react'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './AdminAddCentreForm.module.css';
function AdminAddCentreForm() {
    const validate = Yup.object({
        name: Yup.string()
          .max(15,'Should be less than 15 characters')
          .required('Name is required'),
          phoneNumber: Yup.string().matches("^[0-9]{10}$", 'Phone number is not valid')
          .required('Required'),
          address:Yup.string().max(50,'Should be less than 50 characters').required('Required'),
          imageURL: Yup.string().url('Invalid URL'),
          email:Yup.string().email('Invalid email').required('Required'),
          description:Yup.string().max(100,'Should not exceed 100 characters')

      });
    
      async function handleOnSubmit(val){
        const res = await axios({
          method:'post',
          url:'http://localhost:9090/login',
          data:val
        });
        if(res.data==false){
          alert("Invalid credentials");}
          else{
            alert("Logged in Sucessfully!");
          }
      }
    
      return (
        <Formik
          initialValues={{
            name: '',
            phoneNumber: '',
            address:'',
            imageURL:'',
            email:'',
            description:''
          }}
          validationSchema={validate}
          onSubmit={(values,{resetForm}) => {
            console.log(values);
            // handleOnSubmit(values);
            resetForm({values:''});
          }}
        >
          {formik => (
            <div className={styles.container}>
              <h1 >Add Centre</h1>
              <Form>
                <TextField id="addName" label='Name' name="name" type="text" />
                <TextField id="addNumber" label="Enter the phone number" name="phoneNumber" type="text" />
                <TextField id="addAddress" label="Enter the address" name="address" type="text" />
                <TextField id="addImageUrl" label="Enter the image url" name="imageURL" type="text" />
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