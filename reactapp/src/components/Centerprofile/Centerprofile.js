import React from "react";
import { Formik, Form } from 'formik';
import { TextField } from "./TextField";
import * as Yup from 'yup';
import axios from "axios";
import styles from './Centerprofile.module.css';
function Centerprofile() {
    const validate = Yup.object({
        name: Yup.string().max(25, 'Must be 15 characters or less')
            .required('Required'),
        mobileNumber: Yup.string().required('Required').matches("^[0-9]{10}$", 'Phone number is not valid'),
        address: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
        imageURL: Yup.string().url('Invalid URL'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        description: Yup.string().max(200, 'Must be 200 characters or less').required('Required')
    });
    const handleOnSubmit = async (value) => {
        try {
            const res = await axios({
                method: 'PUT',
                url: 'http://localhost:9090/signup',
                data: value
            });
            console.log(res);
            alert(res.data);
        } catch (err) {
            alert("Error while updating")
        }
    }
    return (
        <Formik
            initialValues={{
                name: '',
                mobileNumber: '',
                address: '',
                imageUrl: '',
                email: '',
                description: ''
            }}
            validationSchema={validate}
            onSubmit={
                (values, { resetForm }) => {
                    handleOnSubmit(values);
                    resetForm({ values: '' });
                }
            }
        >
            {formik => (
                <div className={styles.container}>
                    <h1 className="my-4 font-weight-bold-display-4">Edit Center</h1>
                    <Form>
                        <TextField id="updateName" placeholder='Name' name="name" type="text" />
                        <TextField id="updateNumber" placeholder="Enter the phone number" name="mobileNumber" type="text" />
                        <TextField id="updateAddress" placeholder="Enter the address" name="address" type="text" />
                        <TextField id="updateImageUrl" placeholder="Enter the image url" name="imageURL" type="text" />
                        <TextField id="updateEmail" placeholder="Enter the email id" name="email" type="email" />
                        <TextField id="updateCentreDescription" placeholder="Give Description" name="description" type="textarea" />
                        <br></br>
                        <button className="btn btn-dark mt-3" type="submit">update</button>
                    </Form>
                    <br />
                </div>
            )}
        </Formik>
    )
}
export default Centerprofile