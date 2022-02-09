import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LandingPage.module.css';
const LandingPage = () => {
  return (
      <div className={classes.container}>
        <div classNmae={classes.element}>
          <h1>Welcome to Vaccum Cleaner Service App</h1>
        </div>
        <div className={classes.element}>
          <p style={{textAlign:'center',fontSize:'20px'}}>Now book your vaccum cleaner service at your finger tips.</p>
          <p style={{textAlign:'center',fontSize:'20px'}}>Get Started !</p>
        </div>
        <div className={classes.element}>
          <Link className="btn btn-dark" style={{marginRight:"16px"}}to="/signup">Signup</Link>
          <Link className="btn btn-light" to="/login">Login</Link>
        </div>
        
      </div>
  );
};

export default LandingPage;
