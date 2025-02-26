
import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingModal = ({ show, handleClose, selectedDate, selectedSlot, selectedMachine }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!name || !email || !reason) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setLoading(true);

    console.log("Booking Details:", {
      name,
      email,
      reason,
      date: selectedDate.toDateString(),
      time: selectedSlot
    });

    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
    }, 1000);
  };

  const handleFinalConfirm = () => {
    setShowConfirmation(false);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="p-4 rounded" style={{ maxWidth: "600px" }}>
            <p><strong>Machine:</strong> {selectedMachine}</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
            <p><strong>Time:</strong> {selectedSlot}</p>
            <Form onSubmit={handleConfirm}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Reason for Booking</Form.Label>
                <Form.Control as="textarea" rows={3} value={reason} onChange={(e) => setReason(e.target.value)} required />
              </Form.Group>
              <Row className="justify-content-between">
                <Col xs="auto">
                  <Button variant="secondary" onClick={handleClose} disabled={loading}>Cancel</Button>
                </Col>
                <Col xs="auto">
                  <Button variant="success" type="submit" disabled={loading} style={{ backgroundColor: "green", borderColor: "green" }}>
                    {loading ? <Spinner animation="border" size="sm" /> : "Confirm Booking"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
      <Modal show={showConfirmation} onHide={handleFinalConfirm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your booking for {selectedDate.toDateString()} at {selectedSlot} has been confirmed!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleFinalConfirm}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingModal;