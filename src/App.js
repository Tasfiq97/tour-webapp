
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Dashboard from './Dashboard/Dashboard';
import AddTours from './Pages/AddTours/AddTours';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Home/Footer/Footer';
import Home from "./Pages/Home/Home/Home";
import Navbar from './Pages/Home/Navbar/Navbar';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivalteRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import TourDetails from './Pages/Services/TourDetails';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
   <Routes>
     <Route path='/'  element={<Home></Home>}/>
     <Route path='/home'  element={<Home></Home>}/>
     <Route path='register'  element={<Register></Register>}/>
     <Route path='login'  element={<Login></Login>}/>
     <Route path="/tour/:tourId" element={<PrivateRoute><TourDetails></TourDetails></PrivateRoute>}></Route>
     <Route path="/book/:bookId" element={<Booking></Booking>}></Route>
     <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
     <Route path="/addtours" element={<AddTours></AddTours>}></Route>
   </Routes>
   </BrowserRouter>
   <Footer></Footer>
   </AuthProvider>
    </div>
  );
}

export default App;
