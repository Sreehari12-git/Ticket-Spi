import "./CityModal.css";

function CityModal({ setShowModal, setSelectedCity }) {
  const cities = ["Indiranagar", "Mg Road", "Whitefield", "Kormangala", "Hosur"];

  const handleSelect = (city) => {
    setSelectedCity(city);
    setShowModal(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Select Your City</h2>

        <p className="section-title">Top Cities</p>

        <div className="city-list">
          {cities.map((city) => (
            <button
              key={city}
              className="city-btn"
              onClick={() => handleSelect(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CityModal;