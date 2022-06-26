import './styles/App.css';

import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import DeliveryAndPayment from "./pages/DeliveryAndPayment";
import About from "./pages/About";
import Header from "./components/header/Header";
import React from "react";
import Footer from "./components/footer/Footer";
import Authorization from "./pages/Authorization";

function App() {
  return (
      <Router>
          <Header/>
              <div className="main-container">
                  <div className="main-content">
                      <Routes>
                          <Route path="/" element={<Main />} />
                          <Route path="/Catalog" element={<Catalog />} />
                          <Route path="/DeliveryAndPayment" element={<DeliveryAndPayment />} />
                          <Route path="/About" element={<About />} />
                          <Route path="/auth" element={<Authorization />} />
                      </Routes>
                  </div>
              </div>
          <Footer/>
      </Router>

  );
}

export default App;
