import {  Link } from "react-router-dom";
const Navbar = () => {
    return (
      <div>
        
<nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
             <ul class="navbar-nav">
             <li>  
                 <h4 style={{marginRight:"220px",color: "white" }} >Vacuum service</h4>
                 </li>
                 <li class="nav-item">  
                 <Link id='HomeButton'style={{marginRight:"200px",color: "white"}}to="/user/home">Home</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='DashBoardButton'style={{marginRight:"200px",color: "white"}}to="/dashboard">Dashboard</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='myBookingButton'style={{marginRight:"200px",color: "white"}}to="/mybooking">Mybooking</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='Logout' style={{color: "white"}}to="/">Logout</Link>
                 </li>
             </ul>
</div>

</nav>
</div>
);
};
export default Navbar;