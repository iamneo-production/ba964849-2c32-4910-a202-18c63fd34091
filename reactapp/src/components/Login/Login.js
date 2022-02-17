import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import * as Yup from 'yup';
import axios from 'axios';
 
export const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  async function handleOnSubmit(val){
    try{
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
    }catch(error){
      console.log(error);
      alert('Login Failed');
    }
    
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values,{resetForm}) => {
        handleOnSubmit(values);
        resetForm({values:''});
      }}
    >
      {formik => (
        <div>
          <h1 >Login</h1>
          <Form>
              <div>
            <TextField id="email" label='Enter Email' name="email" type="email" />
            <br></br>
            </div>
            <TextField id="password" label="Enter password" name="password" type="password" />
            <br></br>
            <button className="btn btn-dark mt-3" type="submit">Login</button>
          </Form>
          <br />
          <p>New User/Admin? <Link to="/signup">Signup</Link></p>
        </div>
      )}
    </Formik>
  )
}

