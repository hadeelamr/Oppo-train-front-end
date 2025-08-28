import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const ResourceFormModal = ({ show, handleClose, resource, onSave }) => {
  const isEditMode = Boolean(resource);

  const [formData, setFormData] = useState({
    title: '',
    type: 'Youtube Video',
    description: '',
    guest: '',
    url: '',
  });

  useEffect(() => {
    if (show) {
      if (isEditMode && resource) {
        setFormData({
          title: resource.title || '',
          type: resource.type || 'Youtube Video',
          description: resource.description || '',
          guest: resource.guest || '',
          url: resource.url || '',
        });
      } else {
        setFormData({
          title: '',
          type: 'Youtube Video',
          description: '',
          guest: '',
          url: '',
        });
      }
    }
  }, [resource, isEditMode, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave({ ...formData, id: resource?.id });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="add-resource-modal">
      <Modal.Header>
        <Modal.Title as="h2" className="fw-bold">
          {isEditMode ? 'Edit this resource' : 'Add new Resource'}
        </Modal.Title>
        <button className="close-button" onClick={handleClose}>
          <BsArrowRight />
        </button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-4" controlId="formTitle">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="enter the title of the resource"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formType">
            <Form.Label>Type *</Form.Label>
            <Form.Select name="type" value={formData.type} onChange={handleChange}>
              <option>Youtube Video</option>
              <option>Course</option>
              <option>Google Drive</option>
              <option>Article</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formDescription">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              placeholder="enter the description of the resource"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGuest">
            <Form.Label>Guest *</Form.Label>
            <Form.Control
              type="text"
              name="guest"
              placeholder="enter the name of the guest"
              value={formData.guest}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formWebsiteURL">
            <Form.Label>Website URL</Form.Label>
            <InputGroup>
              <InputGroup.Text>https://</InputGroup.Text>
              <Form.Control
                name="url"
                placeholder="Link goes here"
                value={formData.url}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" size="lg" className="w-100 add-resource-btn" onClick={handleSubmit}>
          {isEditMode ? 'Save' : 'Add Resource'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResourceFormModal;