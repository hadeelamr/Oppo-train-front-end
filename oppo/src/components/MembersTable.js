import React, { useState } from "react";

const membersData = [
  { id: 1, name: "Jane Cooper", email: "jessica.hanson@example.com", status: "Active", avatar: "JC" },
  { id: 2, name: "Jane Cooper", email: "willie.jennings@example.com", status: "Active", avatar: "JC" },
  { id: 3, name: "Jane Cooper", email: "d.chambers@example.com", status: "Inactive", avatar: "JC" },
  { id: 4, name: "Jane Cooper", email: "willie.jennings@example.com", status: "Inactive", avatar: "JC" },
  { id: 5, name: "Jane Cooper", email: "michael.mitc@example.com", status: "Inactive", avatar: "JC" },
  { id: 6, name: "Wade Warren", email: "michael.mitc@example.com", status: "Active", avatar: "WW" },
  { id: 7, name: "Jacob Jones", email: "deanna.curtis@example.com", status: "Pending", avatar: "JJ" },
  { id: 8, name: "Devon Lane", email: "alma.lawson@example.com", status: "Active", avatar: "DL" },
  { id: 9, name: "Jerome Bell", email: "tanya.hill@example.com", status: "Active", avatar: "JB" },
];

const getNextStatus = (currentStatus) => {
  switch (currentStatus) {
    case "Active":
      return "Inactive";
    case "Inactive":
      return "Pending";
    case "Pending":
      return "Active";
    default:
      return "Active";
  }
};

const getAvatarColor = (name) => {
  const colors = {
    "Jane Cooper": "#8B5CF6", 
    "Wade Warren": "#1F2937", 
    "Jacob Jones": "#10B981", 
    "Devon Lane": "#8B5CF6", 
    "Jerome Bell": "#8B5CF6", 
  };
  return colors[name] || "#8B5CF6";
};

const MembersTable = () => {
  const [members, setMembers] = useState(membersData);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    setShowModal(false);
  };

  const handleDelete = () => {
    if (selectedMember) {
      setMembers(members.filter(m => m.id !== selectedMember.id));
      handleCloseModal();
    }
  };

  const handleStatusChange = (memberId) => {
    setMembers(members.map(member => {
      if (member.id === memberId) {
        return { ...member, status: getNextStatus(member.status) };
      }
      return member;
    }));
  };

  const handleMessage = (member) => {
    alert(`Send message ${member.name} (${member.email})`);
  };

  return (
    <div style={{ 
      padding: '0px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" rel="stylesheet" />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginBottom: '40px' }}>
        <h2 style={{  fontSize: '40px', fontWeight: '600', color: '#2a3752ff'}}></h2>
        <div style={{ display: 'flex', gap: '12px' }}>
         <button
  style={{
    padding: '12px 24px',
    border: 'none',
    backgroundColor: '#6488ae',
    color: 'white',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.1s'
  }}
  onMouseDown={e => e.currentTarget.style.transform = 'scale(0.99)'}
  onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
>
  Add Member
</button>

          <button style={{
            padding: '8px 16px',
            backgroundColor: '#ffffffff',
            color: '#6488aeff',
            borderColor: '#6488aeff',
            borderRadius: '15px',
            width:'300 px',

            cursor: 'pointer',
            fontSize:'18px',
            transition: 'background-color 2s'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = ' #ffffffff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffffff'}>
            Send Message
          </button>
        </div>
      </div>


      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        overflow: 'hidden'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: '0'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f1f1ff', borderBottom: '10px solid #E2E8F0'}}>
              <th style={{
                color: '#4c5055ff',
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '12px 24px',
                textAlign: 'left',
                borderBottom: '1px solid #E2E8F0'
              }}>Users</th>
              <th style={{
                color: '#4c5055ff',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'left',
                borderBottom: '1px solid #E2E8F0',
              }}>E-mail</th>
              <th style={{
                color: '#4c5055ff',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center',
                borderBottom: '1px solid #E2E8F0'
              }}>Status</th>
              <th style={{
                color: '#4c5055ff',
                fontSize: '16px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '12px 24px',
                textAlign: 'center',
                borderBottom: '1px solid #E2E8F0'
              }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id} style={{ 
                borderBottom: index < members.length - 1 ? '1px solid #F1F5F9' : 'none',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: getAvatarColor(member.name),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {member.avatar}
                    </div>
                    <span style={{ 
                      fontSize: '14px', 
                      fontWeight: '500', 
                      color: '#1E293B' 
                    }}>
                      {member.name}
                    </span>
                  </div>
                </td>
                
                <td style={{ 
                  padding: '16px 24px',
                  fontSize: '14px',
                  color: '#000000ff'
                }}>
                  {member.email}
                </td>
                
                <td style={{ 
                  padding: '16px 24px',
                  textAlign: 'center'
                }}>
                  <button
                    onClick={() => handleStatusChange(member.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: member.status === 'Active' ? '#D1FAE5' : 
                                     member.status === 'Pending' ? '#FEF3C7' : '#F1F5F9',
                      color: member.status === 'Active' ? '#065F46' : 
                             member.status === 'Pending' ? '#92400E' : '#475569'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: member.status === 'Active' ? '#10B981' : 
                                       member.status === 'Pending' ? '#feb22fff' : '#64748B'
                      }}></div>
                      {member.status}
                    </span>
                  </button>
                </td>
                
                <td style={{ 
                  padding: '16px 24px',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button 
                      onClick={() => handleMessage(member)}
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        padding: '8px',
                        transition: 'all 0.2s',
                        borderRadius: '6px'
                      }}
                      onMouseEnter={(e) => { e.target.style.backgroundColor = '#F3F4F6'; }}
                      onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                    >
                      <i className={
                        member.status === 'Pending' 
                          ? "bi bi-check-circle"
                          : "bi bi-chat-left-text"
                      } 
                      style={{ fontSize: '16px', color: '#6B7280' }}
                      ></i>
                    </button>

                    <button 
                      onClick={() => handleOpenModal(member)}
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        padding: '8px',
                        transition: 'all 0.2s',
                        borderRadius: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#FEF2F2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <i className="bi bi-trash3" style={{ 
                        fontSize: '16px', 
                        color: '#EF4444' 
                      }}></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000'
          }}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            width: '420px',
            maxWidth: '90vw',
            padding: '32px'
          }}>
            <div style={{ 
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#111827'
              }}>
                Delete This Resource?
              </h3>
              <p style={{
                margin: '0',
                fontSize: '14px',
                color: '#6B7280',
                lineHeight: '1.5'
              }}>
                This action will permanently remove this resource from the platform. Are you sure you want to delete it?
              </p>
            </div>
            
            <div style={{ 
              display: 'flex',
              gap: '12px',
              width: '100%'
            }}>
              <button 
                onClick={handleDelete}
                style={{
                  flex: '1',
                  padding: '12px 24px',
                  border: 'none',
                  backgroundColor: '#DC2626',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
              >
                Delete
              </button>
              
              <button 
                onClick={handleCloseModal}
                style={{
                  flex: '1',
                  padding: '12px 24px',
                  border: '1px solid #D1D5DB',
                  backgroundColor: 'white',
                  color: '#6B7280',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F9FAFB';
                  e.target.style.borderColor = '#9CA3AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.borderColor = '#D1D5DB';
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembersTable;
