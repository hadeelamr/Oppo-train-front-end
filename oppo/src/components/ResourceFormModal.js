
import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';


const ResourceFormModal = ({ show, handleClose, resource }) => {
 
  const isEditMode = Boolean(resource);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="add-resource-modal">
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
              placeholder="enter the title of the resource" 
              defaultValue={resource?.title || ''}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formType">
            <Form.Label>Type *</Form.Label>
            <Form.Select aria-label="Select resource type" defaultValue={resource?.type || ''}>
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
              rows={3}
              placeholder="enter the description of the resource" 
              defaultValue={resource?.description || 'Discover the basics of Artificial Intelligence...'} 
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGuest">
            <Form.Label>Guest *</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="enter the name of the guest" 
              defaultValue={resource?.guest || 'Zahaa muhanna'} 
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formWebsiteURL">
            <Form.Label>Website URL</Form.Label>
            <InputGroup>
              <InputGroup.Text>https://</InputGroup.Text>
              <Form.Control 
                placeholder="Link goes here" 
                defaultValue={resource?.url || ''} 
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" size="lg" className="w-100 add-resource-btn" onClick={handleClose}>
          
          {isEditMode ? 'Save' : 'Add Resource'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResourceFormModal;