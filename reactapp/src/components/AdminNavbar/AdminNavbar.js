import { BrowserRouter, Link } from "react-router-dom";
import classes from './AdminNavbar.module.css';
const AdminNavbar = () => {
    return (
      <div>
        
<nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
             <ul class="navbar-nav">
             <li>  
                 <h4 style={{marginRight:"280px",color: "white" }} >Vacuum service</h4>
                 </li>
                 <li class="nav-item">  
                 <Link id='adminCentreProfile'style={{marginRight:"280px",color: "white",textDecoration:'none'}}to="/admin/home">Home</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='adminAddCentre'style={{marginRight:"250px",color: "white",textDecoration:'none'}}to="/admin/add-centre">Add Centre</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='Logout' style={{color: "white",textDecoration:'none'}}to="/">Logout</Link>
                 </li>
             </ul>
</div>

</nav>
</div>
);
};
export default AdminNavbar;