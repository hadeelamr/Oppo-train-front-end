import React from 'react';
import EditEvent from '../components/EditEvent.js';

const EditEventPage = ({ onNext }) => {
  return (
    <div className="min-vh-100 bg-light">
      <EditEvent onNext={onNext} />
    </div>
  );
};

export default EditEventPage;

