import React, { useState } from "react";
import { SidebarPlaceholder, EventsToolbar, EventItemCard, PaginationStatic } from "../components";
import { useDataFetching } from "../hooks/useDataFetching";

const ITEMS_PER_PAGE = 4;

export default function TripsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  
  const { data: trips, loading, error, usingMockData } = useDataFetching('trips');
  
  const filteredTrips = trips.filter(trip => 
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.discerption.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTrips = filteredTrips.slice(startIndex, endIndex);

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
          <div className="mt-4">
            {currentTrips.map((t, i) => <EventItemCard key={startIndex + i} variant="trip" {...t} />)}
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
