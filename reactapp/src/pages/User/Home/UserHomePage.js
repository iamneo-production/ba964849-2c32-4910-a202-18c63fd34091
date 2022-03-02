import React from "react";
import classes from './UserHomePage.module.css';
import UserCentreCard from "../../../components/User/UserCentreCard/UserCentreCard";
import { useEffect,useState} from "react";
import { fetchAllCenter } from "../../../api/myaxios";

const UserHomePage = (props) => {

  const [centreList,setCentreList]= useState([]);
  
  const fetchCentreList = async()=>{
    const res = await fetchAllCenter();
    setCentreList(res.data);
  }

  useEffect(()=>{
    fetchCentreList();
  },[])

  return (
    <div>
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
             centreList.map((item)=>{
               return <div className={classes.card}><UserCentreCard data={item} key={item.serviceCenterId} enableOptions={true}/></div>;
             })
           }
        </div>
</div>

  );
};
  
export default UserHomePage;