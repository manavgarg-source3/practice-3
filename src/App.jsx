
/*import React, { useState } from "react";
import CalendarGrid from "./components/CalendarGrid";
import BookingModal from "./components/BookingModal";
import { bookingData } from "./data/dummyData";

const App = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSlotSelect = (slot) => {
    setSelectedSlots([slot]);
    setShowModal(true);
  };

  const handleConfirmBooking = (data) => {
    console.log("Final Booking JSON:", data);
    setShowModal(false);
    setSelectedSlots([]);
  };

  return (
    <div classNameName="p-4 bg-light min-vh-100">
      <h1 classNameName="text-center mb-4">Facility Booking System</h1>
      <CalendarGrid onSlotSelect={handleSlotSelect} />
      {showModal && (
        <BookingModal
          selectedSlots={selectedSlots}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default App;*/
import React from "react";
import BookingCalendar from "./components/BookingCalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div classNameName="app-container">
      <BookingCalendar />
    </div>
  );
}

export default App;

