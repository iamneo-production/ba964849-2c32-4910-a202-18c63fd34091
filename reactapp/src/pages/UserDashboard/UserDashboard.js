import React, { useEffect, useState } from 'react'
import BookAppointmentForm from '../../components/BookAppointmentForm/BookAppointmentForm'
import styles from './UserDashboard.module.css';
import UserCentreCard from '../../components/UserCentreCard/UserCentreCard';
function UserDashboard(props) {
  const {cardData,setCardData} = useState({});

  useEffect(()=>{
    const card = JSON.parse(localStorage.get("bookCenterDetails"));
    setCardData(card);
  })

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