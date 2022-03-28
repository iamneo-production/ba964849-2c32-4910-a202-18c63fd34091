import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Userreview.module.css';
import UserReview from '../../components/UserReview/UserReview'
import re from '../../assets/re.jpg'


function Userreview() {

  return (
    
    
    <div className={classes.container}>
      <div className={classes.image}></div>
      <UserReview/>
        </div>   
  

      
  )
}

export default Userreview

