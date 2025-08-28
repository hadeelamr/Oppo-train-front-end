import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ResourceItem from '../../components/ResourceItem';
import ResourceFormModal from '../../components/ResourceFormModal';
import './ResourcesManagement.css';

const initialResourcesData = [
  { id: 1, initials: 'JC', title: 'Introduction to AI', type: 'Youtube Video', description: 'Discover the basics of Artificial Intelligence...', guest: 'Zahaa muhanna', url: 'youtube.com/ai', color: '#7289DA' },
  { id: 2, initials: 'JC', title: 'Python programming', type: 'Course', color: '#7289DA' },
  { id: 3, initials: 'JC', title: 'Data Science', type: 'Course', color: '#7289DA' },
  { id: 4, initials: 'JC', title: 'Database in Firestore', type: 'Youtube Video', color: '#7289DA' },
  { id: 5, initials: 'JC', title: 'Authentication form in js', type: 'Youtube Video', color: '#7289DA' },
  { id: 6, img: 'https://i.pravatar.cc/40?img=1', title: 'Deep Learning Tutorial', type: 'Google Drive' },
  { id: 7, img: 'https://i.pravatar.cc/40?img=2', title: 'C++ Slides', type: 'Google Drive' },
  { id: 8, initials: 'DL', title: 'Introduction to Software Engineer', type: 'Course', color: '#99AAB5' },
  { id: 9, initials: 'JB', title: 'UX/UI Tutorial', type: 'Youtube Video', color: '#57F287' },
];

const ResourcesManagement = () => {
  const [resources, setResources] = useState(initialResourcesData);
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleShowModal = (resource = null) => {
    setSelectedResource(resource);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedResource(null);
  };

  const handleSave = (formData) => {
    if (formData.id) {
      setResources(prevResources =>
        prevResources.map(resource =>
          resource.id === formData.id ? { ...resource, ...formData } : resource
        )
      );
    } else {
      const newResource = {
        ...formData,
        id: Date.now(),
        initials: formData.title.substring(0, 2).toUpperCase(),
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      };
      setResources(prevResources => [newResource, ...prevResources]);
    }
  };

  const handleDeleteResource = (resourceIdToDelete) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      setResources(prevResources =>
        prevResources.filter(resource => resource.id !== resourceIdToDelete)
      );
    }
  };

  return (
    <>
      <main className="main-content">
        <Container fluid>
          <Row className="mb-4 align-items-center">
            <Col><h1 className="fw-bold">Resources Management</h1></Col>
            <Col xs="auto">
              <Button onClick={() => handleShowModal()}>Add Resource</Button>
            </Col>
          </Row>

          <Card className="resource-card">
            <Card.Body className="p-0">
              <div className="list-header">
                <div style={{ flex: 1 }}>Title</div>
                <div style={{ flex: 0.5 }}>Type</div>
                <div style={{ width: '80px' }}></div>
              </div>
              <div>
                {resources.map(resource => (
                  <ResourceItem
                    key={resource.id}
                    resource={resource}
                    onEdit={() => handleShowModal(resource)}
                    onDelete={() => handleDeleteResource(resource.id)}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Container>
      </main>

      <ResourceFormModal
        show={showModal}
        handleClose={handleCloseModal}
        resource={selectedResource}
        onSave={handleSave}
      />
    </>
  );
};

export default ResourcesManagement;