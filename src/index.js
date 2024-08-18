
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Subscribe from './Pages/Subscribe';
import NavBar from './components/NavBar';
import MainPage from './MainPage/MainPage';
import { NewsDetails } from './FrontNews/NewsDetails';
import { Footer } from './components/Footer';
import Thankyou from './Pages/Thankyou';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar/>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route index element={<MainPage />} />
        <Route path="/storage/:id" element={< NewsDetails/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path='/subscribed-successfully' element={<Thankyou />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
  </BrowserRouter>
);


