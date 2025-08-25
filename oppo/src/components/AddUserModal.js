import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddUserModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div className="row">
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter password" />
                </Form.Group>
                <div className="row">
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Select>
                        
                    </Form.Group>
                    <Form.Group className="col-md-6 mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
                <Button variant="primary" type="submit">Add user</Button>
            </Form>
        </Modal.Body>
    </Modal>
);

export default AddUserModal;