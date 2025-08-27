// src/components/EditEvent.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: 'Sample Event Name',
    description: 'This is a sample description for the event that can be edited.',
    type: 'Workshop',
    priceForUsers: '50',
    priceForMembers: '30',
    dateTime: '2024-01-15T10:00',
    hours: '2',
    capacity: '50',
    place: 'Conference Room A'
  });

  const eventTypes = ['Workshop','Conference','Seminar','Training','Webinar','Meeting'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form updated:', formData);
    alert('✅ Event updated successfully!');
    navigate(`/events/${id}/overview`);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body p-5">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div></div>
                <h2 className="card-title mb-0 text-center">Edit this event</h2>
                <button
                  className="btn btn-link p-0"
                  title="Back"
                  onClick={() => navigate(`/events/${id}/overview`)}
                >
                  <i
                    className="bi bi-arrow-up-right-circle custom-icon"
                    style={{
                      fontSize: '33px',
                      color: '#0b0c10',
                      borderRadius: '50%',
                      padding: '5px',
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#ffffff'
                    }}
                  ></i>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label" style={{textAlign:'left',display:'block'}}>
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{textAlign:'left',display:'block'}}>
                    Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="type" className="form-label" style={{textAlign:'left',display:'block'}}>
                    Type <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a type</option>
                    {eventTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="priceForUsers" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Price for Users <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="priceForUsers"
                      name="priceForUsers"
                      value={formData.priceForUsers}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="priceForMembers" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Price for Members <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="priceForMembers"
                      name="priceForMembers"
                      value={formData.priceForMembers}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="dateTime" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Date & Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="dateTime"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="hours" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Duration (Hours) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="hours"
                      name="hours"
                      value={formData.hours}
                      onChange={handleInputChange}
                      required
                      min="0.5"
                      step="0.5"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="capacity" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Capacity <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      required
                      min="1"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="place" className="form-label" style={{textAlign:'left',display:'block'}}>
                      Place <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="place"
                      name="place"
                      value={formData.place}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-info btn-lg text-white">
                    Save Event
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
