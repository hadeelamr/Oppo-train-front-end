import React from 'react';
import AddEvent from '../components/AddEvent.js';

const AddEventPage = ({ onNext }) => {
  return (
    <div className="min-vh-100 bg-light">
      <AddEvent onNext={onNext} />
    </div>
  );
};

export default AddEventPage;

