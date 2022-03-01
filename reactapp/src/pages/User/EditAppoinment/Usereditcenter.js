import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserEditCenter from '../../../components/User/UserEditCenter/UserEditCenter'

function Usereditcenter(props) {
  const [editCard,setEditCard] = useState({});
  
  const getCardtoEdit = ()=>{
    const data=JSON.parse(localStorage.getItem('data'));
    setEditCard(data);
  }

  useEffect(()=>{
    getCardtoEdit();
  },[]);

  return (
    
  <div style={{ display: 'flex', flexDirection: "row",justifyContent:'space-between'}}>
      <div style={{width:'40%'}}>
        <UserEditCenter data={editCard} getCardtoEdit={getCardtoEdit}/>
      </div>
    </div>
  )
}

export default Usereditcenter