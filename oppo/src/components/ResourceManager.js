import React, { useState } from 'react';
import AddEventPage from '../pages/AddEventPage.js';
import EditEventPage from '../pages/EditEventPage.js';
import AddResourcePage from '../pages/AddResourcePage.js';
import EditResourcePage from '../pages/EditResourcePage.js';

const ResourceManager = () => {
  const [currentPage, setCurrentPage] = useState('addEvent');
  
  const pages = ['addEvent', 'editEvent', 'addResource', 'editResource'];
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleNextPage = () => {
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentPage(pages[nextIndex]);
  };

  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Resource Manager</span>
          
          <div className="navbar-nav ms-auto">
            <button
              className={`btn me-2 ${
                currentPage === 'addEvent' 
                  ? 'btn-light' 
                  : 'btn-outline-light'
              }`}
              onClick={() => handlePageChange('addEvent')}
            >
              Add Event
            </button>
            <button
              className={`btn me-2 ${
                currentPage === 'editEvent' 
                  ? 'btn-light' 
                  : 'btn-outline-light'
              }`}
              onClick={() => handlePageChange('editEvent')}
            >
              Edit Event
            </button>
            <button
              className={`btn me-2 ${
                currentPage === 'addResource' 
                  ? 'btn-light' 
                  : 'btn-outline-light'
              }`}
              onClick={() => handlePageChange('addResource')}
            >
              Add Resource
            </button>
            <button
              className={`btn ${
                currentPage === 'editResource' 
                  ? 'btn-light' 
                  : 'btn-outline-light'
              }`}
              onClick={() => handlePageChange('editResource')}
            >
              Edit Resource
            </button>
          </div>
        </div>
      </nav>

     
      <div>
        {currentPage === 'addEvent' && <AddEventPage onNext={handleNextPage} />}
        {currentPage === 'editEvent' && <EditEventPage onNext={handleNextPage} />}
        {currentPage === 'addResource' && <AddResourcePage onNext={handleNextPage} />}
        {currentPage === 'editResource' && <EditResourcePage onNext={handleNextPage} />}
      </div>
    </div>
  );
};

export default ResourceManager;

