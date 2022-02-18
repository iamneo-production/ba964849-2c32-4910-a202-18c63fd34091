import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminCentreCard from './components/AdminCentreCard/AdminCentreCard';
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import AdminAddCentreForm from './components/AdminAddCentreForm/AdminAddCentreForm';
import AdminAddCentrePage from './pages/AdminAddCentrePage/AdminAddCentrePage';
import AdminLayout from './pages/AdminLayout/AdminLayout';
import Centerprofilescreen from './pages/Centerprofilescreen/Centerprofilescreen';
import { useState } from 'react';
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
        {/* <Route path="/admin/cards" element={<AdminCentreCard/>}></Route>
        <Route path="/admin/navbar" element={<AdminNavbar/>}></Route>
        <Route path="/admin/addcentre" element={<AdminAddCentreForm/>}></Route> */}
        <Route path="*" element={"404: Page not found"}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
