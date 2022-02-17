import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LandingPage.module.css';

const LandingPage = () => {

  return (
    <div className={classes.container}>
      <div className={classes.image}></div>
        <div className={classes.element} >
          <h2>Welcome to Vaccum Cleaner Service App</h2>
          <p>Now book your vaccum cleaner service at your finger tips.</p>
          <p>Get Started !</p>
          <Link className="btn btn-primary" style={{marginRight:"16px"}}to="/signup">Signup</Link>
          <h3>Already have an account?</h3>
          <Link className="btn btn-success" to="/login">Login</Link>
          </div>
        </div>
       
        
  
        
       
       
  
        
       
        
      
  );
};

export default LandingPage;
