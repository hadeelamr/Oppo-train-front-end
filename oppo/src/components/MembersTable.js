import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const members = [
  { name: "Jane Cooper", email: "jessica.hanson@example.com", status: "Active", avatar: "JC" },
  { name: "Jane Cooper", email: "willie.jennings@example.com", status: "Active", avatar: "JC" },
  { name: "Jane Cooper", email: "d.chambers@example.com", status: "Inactive", avatar: "JC" },
  { name: "Jane Cooper", email: "willie.jennings@example.com", status: "Inactive", avatar: "JC" },
  { name: "Jane Cooper", email: "michael.mitc@example.com", status: "Inactive", avatar: "JC" },
  { name: "Wade Warren", email: "michael.mitc@example.com", status: "Active", avatar: "WW" },
  { name: "Jacob Jones", email: "deanna.curtis@example.com", status: "Pending", avatar: "JJ" },
  { name: "Devon Lane", email: "alma.lawson@example.com", status: "Active", avatar: "DL" },
  { name: "Jerome Bell", email: "tanya.hill@example.com", status: "Active", avatar: "JB" },
];

const getBadgeClass = (status) => {
  switch (status) {
    case "Active":
      return "bg-success";
    case "Pending":
      return "bg-warning text-dark";
    case "Inactive":
      return "bg-secondary";
    default:
      return "bg-light text-dark";
  }
};

const MembersTable = () => {
  return (
    <div className="p-4">
      {}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Members</h4>
        <div>
          <button className="btn btn-primary me-2">Add Member</button>
          <button className="btn btn-outline-secondary">Send Message</button>
        </div>
      </div>

      {}
      <div className="table-responsive bg-white shadow-sm rounded p-3">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th>Users</th>
              <th>E-mail</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <tr key={idx}>
                {}
                <td>
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
                      style={{ width: "36px", height: "36px", fontSize: "0.8rem" }}
                    >
                      {member.avatar}
                    </div>
                    <span>{member.name}</span>
                  </div>
                </td>
                {}
                <td>{member.email}</td>
                {}
                <td>
                  <span className={`badge ${getBadgeClass(member.status)}`}>
                    {member.status}
                  </span>
                </td>
                {}
                <td>
                  <button className="btn btn-sm btn-outline-success me-2">
                    <i className="bi bi-chat-dots"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersTable;
