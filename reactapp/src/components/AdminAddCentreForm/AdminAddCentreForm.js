import React from 'react'

function AdminAddCentreForm() {
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
            email: '',
            password: '',
          }}
          validationSchema={validate}
          onSubmit={values => {
            handleOnSubmit(values);
            // if(res.data==false){
            // alert("Invalid credentials");}
            // else{
            //   alert("Logged in Sucessfully!");
            // }
          }}
        >
          {formik => (
            <div>
              <h1 >Login</h1>
              <Form>
                  <div>
                <TextField id="addName" label='Name' name="name" type="text" />
                <br></br>
                </div>
                <TextField id="addNumber" label="Enter the phone number" name="phoneNumber" type="text" />
                <TextField id="addAddress" label="Enter the address" name="address" type="text" />
                <TextField id="addImageUrl" label="Enter the image url" name="imageURL" type="text" />
                <TextField id="addImageUrl" label="Enter the image url" name="imageURL" type="text" />
                <TextField id="addEmail" label="Enter the email id" name="email" type="email" />
                <TextField id="addCentreDescription" label="Give Description" name="description" type="text" />
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