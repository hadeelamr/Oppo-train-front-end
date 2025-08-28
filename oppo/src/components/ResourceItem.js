import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const ResourceItem = ({ resource, onEdit, onDelete }) => {
  return (
    <div className="resource-item">
      <div className="resource-info">
        {resource.img ? (
          <img src={resource.img} alt={resource.title} className="avatar-img" />
        ) : (
          <div className="resource-avatar" style={{ backgroundColor: resource.color }}>
            {resource.initials}
          </div>
        )}
        <span>{resource.title}</span>
      </div>
      <div className="resource-type">{resource.type}</div>
      <div className="resource-actions">
        <BsPencilSquare className="action-edit" onClick={onEdit} />
        <BsTrash className="action-delete" onClick={onDelete} />
      </div>
    </div>
  );
};

export default ResourceItem;