import React from "react";
import classes from './AdminHomePage.module.css';
import AdminCentreCard from "../../../components/Admin/AdminCentreCard/AdminCentreCard";
import { useEffect,useState} from "react";
import { fetchAllCenter } from "../../../api/myaxios";

const AdminHomePage = (props) => {

  const [centreList,setCentreList]= useState([]);
  
  const fetchCentreList = async()=>{
    const res = await fetchAllCenter();
    setCentreList(res.data);
  }

  useEffect(()=>{
    fetchCentreList();
  },[])

  return (
    <div >
        <div className={classes.searchBar}>
        <form action="" method="get">
            <label htmlFor="header-search"></label>
            <input
            className="container"
                type="text"
                placeholder="Search"
                name="search" 
                id="searchButton"
            />
            <button className="btn btn-dark"id='searchButton' type="submit">Search</button>
        </form>
        </div>
        <br></br>
        <div className={classes.centreCardsContainer}>
           {
             centreList.map((item,index)=>{
               return <AdminCentreCard data={item} key={index} onDelete={fetchCentreList} enableOptions={true} />; 
             })
           }
        </div>
  </div>

  );
};
  
export default AdminHomePage;