import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingModal from "./BookingModal";
import Navbar from "./Navbar";

// Define machines and their available time slots
const machineSlots = {
  "Machine 1": ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
  "Machine 2": ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
  "Machine 3": ["05:00 PM", "06:00 PM", "07:00 PM"],
  "Machine 4": ["11:00 AM", "12:00 PM", "07:00 PM"],

};

// Mock booked slots data (Replace with real API later)
const bookedSlots = {
  "Machine 1": {
    "2025-03-10": ["09:00 AM"],
    "2025-03-12": ["10:00 AM"],
  },
  "Machine 2": {
    "2025-03-10": ["02:00 PM"],
    "2025-03-12": ["03:00 PM"],
  },
};

const BookingCalendar = () => {
  const [selectedMachine, setSelectedMachine] = useState("Machine 1");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Disable weekends & past dates
  const isHoliday = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
  };

  // Disable past dates
  const isPastDate = (date) => {
    return date < new Date().setHours(0, 0, 0, 0);
  };

  // Get available slots for the selected machine & date
  const formattedDate = selectedDate.toISOString().split("T")[0];
  const unavailableSlots = bookedSlots[selectedMachine]?.[formattedDate] || [];

  // Filter slots: Remove booked slots
  const availableSlots = machineSlots[selectedMachine].filter(
    (slot) => !unavailableSlots.includes(slot)
  );

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  return ( 
    <div>
      <Navbar></Navbar>
    <Container className="mt-5 booking-container">
      <h2 className="text-center mb-4">Facility Booking</h2>

      {/* Machine Selection */}
      <Form.Group className="mb-3">
        <Form.Label>Select Machine</Form.Label>
        <Form.Control as="select" value={selectedMachine} onChange={(e) => setSelectedMachine(e.target.value)}>
          {Object.keys(machineSlots).map((machine) => (
            <option key={machine} value={machine}>{machine}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* Date Selection */}
      <div className="d-flex justify-content-center mb-3">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control date-picker"
          dateFormat="MMMM d, yyyy"
          filterDate={(date) => !isHoliday(date) && !isPastDate(date)} // Disable weekends & past dates
        />
      </div>

      {/* Available Slots */}
      {availableSlots.length === 0 ? (
        <p className="text-center text-danger">No slots available for {selectedMachine} on this date.</p>
      ) : (
        <Row className="g-3">
          {availableSlots.map((slot, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <Button className="slot-button w-100" variant="success" onClick={() => handleSlotSelect(slot)}>
                {slot}
              </Button>
            </Col>
          ))}
        </Row>
      )}

      <BookingModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedMachine={selectedMachine}
        selectedDate={selectedDate}
        selectedSlot={selectedSlot}
      />
    </Container>
    </div>
  );
};

export default BookingCalendar;
