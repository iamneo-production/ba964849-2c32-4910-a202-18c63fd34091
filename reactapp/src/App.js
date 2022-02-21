import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminHomePage from './pages/AdminHomePage/AdminHomePage';
import AdminAddCentrePage from './pages/AdminAddCentrePage/AdminAddCentrePage';
import AdminLayout from './pages/AdminLayout/AdminLayout';
import Centerprofilescreen from './pages/Centerprofilescreen/Centerprofilescreen';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
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
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
