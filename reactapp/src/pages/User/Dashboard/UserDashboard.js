import React, { useEffect, useState } from 'react'
import BookAppointmentForm from '../../../components/User/BookAppointmentForm/BookAppointmentForm'
import styles from './UserDashboard.module.css';
import UserCentreCard from '../../../components/User/UserCentreCard/UserCentreCard';
function UserDashboard(props) {

  const [cardData,setCardData] = useState({});

  const getCardData = ()=>{
    const card = JSON.parse(localStorage.getItem("bookCenterDetails"));
    setCardData(card);
    console.log("card data in user dashboard",cardData);
  }

  useEffect(()=>{
    getCardData();
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <UserCentreCard data={cardData}/>
      </div>
      <div className={styles.form}>
        <BookAppointmentForm center={cardData}/>
      </div>
    </div>
  )
}

export default UserDashboard