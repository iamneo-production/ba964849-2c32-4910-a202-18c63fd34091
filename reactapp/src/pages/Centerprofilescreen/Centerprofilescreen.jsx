import React from 'react'
import AdminCentreCard from '../../components/AdminCentreCard/AdminCentreCard'
import EditCentreForm from '../../components/Centerprofile/EditCentreForm'
function Centerprofilescreen(props) {
  console.log('centreprofilescreen:',props);
  return (
    <div style={{ display: 'flex', flexDirection: "row",justifyContent:'space-between'}}>
      <div style={{width:'40%'}}>
        <AdminCentreCard data={JSON.parse(localStorage.getItem('data'))}/> 
      </div>
      <div style={{width:'40%'}}>
        <EditCentreForm />
      </div>
    </div>
  )
}
export default Centerprofilescreen