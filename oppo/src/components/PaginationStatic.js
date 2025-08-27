import React from "react";

export default function PaginationStatic({ 
  currentPage = 1, 
  totalPages = 3, 
  onPageChange = () => {} 
}) {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className="page-item">
          <button 
            className={`page-link bg-transparent border-0 ${
              i === currentPage ? 'text-primary fw-semibold' : 'text-dark'
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav className="d-flex justify-content-center">
      <div className="bg-light rounded-pill px-4 py-2">
        <ul className="pagination pagination-sm mb-0">
          <li className="page-item">
            <button 
              className="page-link bg-transparent border-0 text-muted"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li className="page-item">
            <button 
              className="page-link bg-transparent border-0 text-muted"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
