
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ResourceItem from '../../components/ResourceItem';

import ResourceFormModal from '../../components/ResourceFormModal'; 
import './ResourcesManagement.css';


const resourcesData = [
    { id: 1, initials: 'JC', title: 'Introduction to AI', type: 'Youtube Video', description: 'Discover the basics of Artificial Intelligence...', guest: 'Zahaa muhanna', color: '#7289da' },
    
    { id: 2, initials: 'JC', title: 'Python programming', type: 'Course', color: '#7289da' },
    { id: 3, initials: 'JC', title: 'Data Science', type: 'Course', color: '#7289da' },
    { id: 4, initials: 'JC', title: 'Database in Firestore', type: 'Youtube Video', color: '#7289da' },
    { id: 5, initials: 'JC', title: 'Authentication form in js', type: 'Youtube Video', color: '#7289da' },
    { id: 6, img: 'https://i.pravatar.cc/40?img=1', title: 'Deep Learning Tutorial', type: 'Google Drive' },
    { id: 7, img: 'https://i.pravatar.cc/40?img=2', title: 'C++ Slides', type: 'Google Drive' },
    { id: 8, initials: 'DL', title: 'Introduction to Software Engineer', type: 'Course', color: '#99aab5' },
    { id: 9, initials: 'JB', title: 'UX/UI Tutorial', type: 'Youtube Video', color: '#57f287' },
];

const ResourcesManagement = () => {
  
  const [showAddModal, setShowAddModal] = useState(false);


  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

 
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedResource(null); 
  };
  const handleShowEditModal = (resource) => {
    setSelectedResource(resource); 
    setShowEditModal(true);
  };

  return (
    <>
      <main className="main-content">
        <Container fluid>
          <Row className="mb-4 align-items-center">
            <Col>
              <h1 className="fw-bold">Resources Management</h1>
            </Col>
            <Col xs="auto">
              <Button onClick={handleShowAddModal}>Add Resource</Button>
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
                {resourcesData.map(resource => (
                  <ResourceItem 
                    key={resource.id} 
                    resource={resource}
                   
                    onEdit={() => handleShowEditModal(resource)} 
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Container>
      </main>

    
      <ResourceFormModal show={showAddModal} handleClose={handleCloseAddModal} />
      
     
      <ResourceFormModal 
        show={showEditModal} 
        handleClose={handleCloseEditModal} 
        resource={selectedResource}
      />
    </>
  );
};

export default ResourcesManagement;