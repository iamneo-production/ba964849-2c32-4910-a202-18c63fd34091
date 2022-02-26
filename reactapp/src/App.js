import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import AdminAddCentrePage from './pages/AdminAddCentrePage/AdminAddCentrePage';
import AdminLayout from './pages/AdminLayout/AdminLayout';
import UserLayOut from './pages/UserLayOut/UserLayOut';
import Centerprofilescreen from './pages/Centerprofilescreen/Centerprofilescreen';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import  UserHomePage  from './pages/UserHomePage/UserHomePage';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Userbooking from './pages/Userbooking/Userbooking';
import Usereditcenter from './pages/Usereditcenter/Usereditcenter';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/admin" element={<AdminLayout/>}>

          <Route path="/admin/home" element={<AdminHomePage/>}></Route>
          <Route path="/admin/add-centre" element={<AdminAddCentrePage/>}></Route>
          <Route path="/admin/edit-center" element={<Centerprofilescreen/>}></Route>
        </Route>
        <Route path="/user" element={<UserLayOut/>}>
        <Route path='/user/home' element={<UserHomePage/>}></Route>
        
    </Route>
    <Route path='/dashboard' element={<UserDashboard/>}></Route>
    <Route path='/Mybooking' element={<Userbooking/>}></Route>
    <Route path='/EditCenter' element={<Usereditcenter/>}></Route>

        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
