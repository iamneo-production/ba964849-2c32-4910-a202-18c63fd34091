import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import classes from './AdminHomePage.module.css';
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminCentreCard from "../../components/AdminCentreCard/AdminCentreCard";
const AdminHomePage = () => {
  return (
    <div>
        <AdminNavbar/>
        <br></br>
        <h1>Welcome, Admin</h1>
        <br></br>
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
           <AdminCentreCard/>
           <AdminCentreCard/>
           <AdminCentreCard/>
           <AdminCentreCard/>
           <AdminCentreCard/>
           <AdminCentreCard/>
        </div>
</div>

  );
};
  
export default AdminHomePage;