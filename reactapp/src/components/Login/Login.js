import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
 
export const Login = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });

  async function handleOnSubmit(val){
    const res = await axios({
      method:'post',
      url:'http://localhost:8000/signin',
      data:val
    });
    console.log(res);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        handleOnSubmit(values);
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
