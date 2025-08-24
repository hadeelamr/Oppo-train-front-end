import React, { useState } from "react";
import { SidebarPlaceholder, EventsToolbar, EventItemCard, PaginationStatic } from "../components";
import { useDataFetching } from "../hooks/useDataFetching";

const ITEMS_PER_PAGE = 6;

export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const { data: events, loading, error, usingMockData } = useDataFetching('events');
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.discerption.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); 
  };

  if (loading) {
    return (
      <div className="container-fluid bg-light min-vh-100">
        <div className="row">
          <SidebarPlaceholder />
          <main className="col-10">
            <div className="container py-4">
              <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <SidebarPlaceholder />
        <main className="col-10">
          <div className="container py-4">
            <EventsToolbar onSearch={handleSearch} />
            <div className="mt-4 row g-3">
              {currentEvents.map((e, i) => (
                <div className="col-12 col-sm-6 col-lg-4" key={startIndex + i}>
                  <EventItemCard variant="event" {...e} />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <PaginationStatic 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
