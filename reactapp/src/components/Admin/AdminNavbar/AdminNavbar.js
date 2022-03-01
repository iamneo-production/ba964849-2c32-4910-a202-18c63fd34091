import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AdminNavbar = () => {
    const navigate = useNavigate();
    const handleOnClickLogout = ()=>{
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
                            <h4 style={{marginRight:"280px",color: "white" }} >Vacuum service</h4>
                        </li>
                        <li class="nav-item">  
                            <Link id='adminCentreProfile'style={{marginRight:"280px",color: "white",textDecoration:'none'}}to="/admin/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link id='adminAddCentre'style={{marginRight:"250px",color: "white",textDecoration:'none'}}to="/admin/add-centre">Add Centre</Link>
                        </li>
                        <li class="nav-item">
                            <a id='Logout' style={{color: "white",textDecoration:'none'}} onClick={()=>handleOnClickLogout()}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <ToastContainer/>
        </div>
    );
};
export default AdminNavbar;