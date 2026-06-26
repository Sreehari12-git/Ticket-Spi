
import "./App.css"
import React, { useState } from "react";
import { MapPin, ShoppingCart, Search, LogIn , Ticket } from "lucide-react";
import CityModal from "./Components/CityModal";
import { Routes, Route, Link } from "react-router-dom";
import StoresPage from "./Components/StoresPage";
import { NavLink, useLocation} from "react-router-dom";


function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<MovieSection />} />
          <Route path="/stores" element={<StoresPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");

  const location = useLocation();
  const isStorePage = location.pathname.startsWith("/stores");

  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="navbar">

  <div className="nav-left">
    <img className="logo" src="https://tickets.ticketspi.com/_next/image?url=%2Fassets%2Fticketspi_logoleaf.png&w=3840&q=75
" alt="logo" />

    <div className="nav-links">
      <NavLink to="/" end>
  Tickets
</NavLink>

<NavLink to="/stores">
  Stores
</NavLink>    </div>

    <div className="search-wrapper">
      <Search size={18} className="search-icon" />
      <input
        type="text"
        placeholder="Search products"
        className="search-input"
      />
    </div>
  </div>

  <div className="nav-right">
    {!isStorePage && (
    <button className="publish-btn">  <Ticket size={18} />Publish Event</button>)}
    <button
        className="city-select-btn"
        onClick={() => setShowModal(true)}
      >
        <MapPin size={18} />
        {selectedCity}
      </button>

      {showModal && (
        <CityModal
          setShowModal={setShowModal}
          setSelectedCity={setSelectedCity}
        />
      )}
      {isStorePage && (
        <button className="cart-btn"><ShoppingCart size={20} /><span className="cart-badge">{cartCount}</span></button>
      )}

    <button className="login">  <LogIn size={18} />
Login</button>
  </div>

</nav>
  );
}

function MovieSection() {
  return(
    <div className="no-movies-container">
      <div className="no-movies-card">
        <img src="	https://tickets.ticketspi.com/_next/image?url=%2Fassets%2Fimages%2Fnomovies.jpg&w=640&q=75" alt="no-movies" className="no-movies-image"></img>
        <h2>No movies playing in selected location</h2>
        <p>It looks like there are no movies showing. You can change your location to find more show, or create your own event to become the spotlight!</p>
        <button className="change-location-btn">
          CHANGE LOCATION
        </button>
        <div className="explore-section">
          <h2>Check out some amazing events from Ticketspi!</h2>
          <p>
            Whether it's a film festival, exclusive premiere, or VIP experience —
            Ticketspi has something magical lined up. Browse through our showcase events and take inspiration, or step into the spotlight create your own!
          </p>
          <button className="show-case-events">
            SHOWCASE EVENTS
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-top">
        <p><strong>Looking for a collaboration partner? Get with us and get listed on TicketsPi!</strong></p>
        <button className="business-btn">Create a Business Account</button>
      </div>

      <div className="footer-content">
        <img
          src="https://tickets.ticketspi.com/_next/image?url=%2Fassets%2Fticketspi_logoleaf.png&w=3840&q=75"
          alt="logo"
          className="footer-logo"
        />

        <div className="footer-links">
          <a href="#">Help</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact</a>
          <a href="#">Downloads</a>
          <a href="#">Fees Calculator</a>
          <a href="#">Showcase</a>
          <a href="#">Get My Ticket</a>
        </div>

        <p className="copyright">
          © 2021–2026. All Rights Reserved.
        </p>
        <p className="copyright-content">The content and images used on this site are copyrights protected and  copyrights vest with the respective owners. The usage of the content and images on this website is intended to promote the works, and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>

    </footer>
  );
}

export default App
