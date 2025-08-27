import React from 'react';
import EditResource from '../components/EditResource.js';

const EditResourcePage = ({ onNext }) => {
  return (
    <div className="min-vh-100 bg-light">
      <EditResource onNext={onNext} />
    </div>
  );
};

export default EditResourcePage;
