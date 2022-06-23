import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,
         Routes,
         Route, 
} from "react-router-dom";
// import App from './App';
import Navbar from './components/Navbar';
import Gallery from './components/gallery';
import Upload from './components/upload';
import Details from './components/details';
import Home from './components/home'
import reportWebVitals from './reportWebVitals';

// Rooting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/details" element={<Details />} />
      </Route> 
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
