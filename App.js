import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Menu from './Menu';
import Navbar from './Navbar';
import Booking from './Booking';
import Team from './Team';
import Contact from './Contact';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route> 
          <Route path='/services' element={<Service/>}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<Contact />}></Route> 
        </Routes>
      </Router>
      </>
  );
}

export default App;
