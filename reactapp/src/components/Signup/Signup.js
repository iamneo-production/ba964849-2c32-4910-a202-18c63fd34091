import React from "react";
import {Formik, Form} from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";
import { Link } from "react-router-dom";
export const Signup = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validate = Yup.object({
    userType: Yup.string().oneOf(['admin','user'],'Should be admin/user').required('Required'),
    username: Yup.string().max(25,'Must be 15 characters or less')
    .required('Required'),
    email: Yup.string()
              .email('Email is invalid')
              .required('Required'),
    mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                    .required('Required'),
    password: Yup.string()
                 .min(6,'Password must be atleast 6 charachters')
                 .required('Required'),
    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null],'Password must match')
                        .required('Required')
    });

    const handleOnSubmit = async (value)=>{
        const res = await axios({
            method:'POST',
            url:'http://localhost:9090/signup',
            data: value
        });
        console.log(res);
    }
    return(
        <Formik
            initialValues={{
                userType:'',
                username:'',
                email: '',
                mobile: '',
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
                    <TextField id="admin/user" label="Are you a 'user' or 'admin' ?" name="userType" type="text" />
                    <TextField id="username" label="Name" name="username" type="text" />
                    <TextField id="email" label="Email" name="email" type="text" />
                    <TextField id="mobile" label="Mobile Number" name="mobile" type="text"/>
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