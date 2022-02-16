import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";
import { Link } from "react-router-dom";
export const Signup = () => {
   
    const validate = Yup.object({
    name: Yup.string().max(25,'Must be 15 characters or less')
    .required('Required'),
    email: Yup.string()
              .email('Email is invalid')
              .required('Required'),
    mobileNumber: Yup.string().matches("^[0-9]{10}$", 'Phone number is not valid')
                    .required('Required'),
    password: Yup.string()
                 .min(6,'Password must be atleast 6 charachters')
                 .required('Required'),
    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null],'Password must match')
                        .required('Required')
    });

    const handleOnSubmit = async (value)=>{
        try{
        const res = await axios({
            method:'POST',
            url:'http://localhost:9090/signup',
            data: value
        });
        console.log(res);
        alert(res.data);
    }catch(err){
        alert("signup failed !!")
    }
    }
    return(
        <Formik
            initialValues={{
                name:'',
                email: '',
                mobileNumber: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit = {values => handleOnSubmit(values)}
        >
           {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                <Form>
                    <TextField id="username" label="Name" name="name" type="text" />
                    <TextField id="email" label="Email" name="email" type="text" />
                    <TextField id="mobile" label="Mobile Number" name="mobileNumber" type="text"/>
                    <TextField id="password" label="Password" name="password" type="password" />
                    <TextField id="confirmPassword" label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-dark mt-3" type="submit">Register</button>
                </Form>
                <br/>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
           )}
        </Formik>
    )
}