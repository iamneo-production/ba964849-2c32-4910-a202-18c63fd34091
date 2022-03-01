import {  Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const navigate = useNavigate();
    const handleOnClickLogout = () =>{
        localStorage.removeItem("user");
        setTimeout(()=>{
            toast.success("Logged out successfully");
        },1000);
        navigate("/");
    }
    return (
      <div>
        
<nav class="navbar navbar-expand-lg bg-dark">
         <div class="container-fluid">
             <ul class="navbar-nav">
             <li>  
                 <h4 style={{marginRight:"300px",color: "white" }} >Vacuum service</h4>
                 </li>
                 <li class="nav-item">  
                 <Link id='HomeButton'style={{marginRight:"260px",color: "white"}}to="/user/home">Home</Link>
                 </li>
                 <li class="nav-item">
                 <Link id='myBookingButton'style={{marginRight:"260px",color: "white"}}to="/user/mybooking">Mybooking</Link>
                 </li>
                 <li class="nav-item">
                 <a style={{onHover:"pointer"}}id='Logout' style={{color: "white"}}  onClick={()=>handleOnClickLogout()}>Logout</a>
                 </li>
             </ul>
             <ToastContainer/>
</div>

</nav>
</div>
);
};
export default Navbar;