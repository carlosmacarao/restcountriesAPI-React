import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import AllCountries from './assets/AllCountries/AllCountries';
import CountryInfo from './assets/CountryInfo/CountryInfo';

function App() {
  

  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
      <div className="container">
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
