import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MessagePopup = ({ show, handleClose, members, selectedUser }) => {
  const [selected, setSelected] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setSelected(selectedUser.id);
      setMessage(`Hello ${selectedUser.name}, how's it going ?`);
    } else {
      setSelected("all");
      setMessage("");
    }
  }, [selectedUser]);

  const handleSend = () => {
    if (selected === "all") {
      alert(`Message sent to all users: "${message}"`);
    } else {
      const user = members.find((m) => m.id === selected);
      alert(`Message sent to ${user.name}: "${message}"`);
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Send Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Select
              value={selected}
              onChange={(e) =>
                setSelected(e.target.value === "all" ? "all" : parseInt(e.target.value))
              }
            >
              <option value="all">Select All</option>
              {members.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message text goes here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="w-100 d-flex justify-content-center align-items-center"
            onClick={handleSend}
          >
            Send Message <span style={{ marginLeft: "8px" }}>➔</span>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MessagePopup;
