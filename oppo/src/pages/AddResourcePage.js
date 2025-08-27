import React from 'react';
import AddResource from '../components/AddResource.js';

const AddResourcePage = ({ onNext }) => {
  return (
    <div className="min-vh-100 bg-light">
      <AddResource onNext={onNext} />
    </div>
  );
};

export default AddResourcePage;
