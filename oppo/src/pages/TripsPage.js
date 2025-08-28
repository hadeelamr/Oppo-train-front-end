
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { EventsToolbar, EventItemCard, PaginationStatic } from "../components";
import { useDataFetching } from "../hooks/useDataFetching";

const ITEMS_PER_PAGE = 4;

export default function TripsPage() {
  const navigate = useNavigate(); 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: trips = [], loading, error } = useDataFetching("trips");

  const filteredTrips = trips.filter((trip) => {
    const title = (trip.title ?? "").toLowerCase();
    const desc  = (trip.discerption ?? "").toLowerCase();
    const loc   = (trip.location ?? "").toLowerCase();
    const q     = (searchTerm ?? "").toLowerCase();
    return title.includes(q) || desc.includes(q) || loc.includes(q);
  });

  const totalPages = Math.max(1, Math.ceil(filteredTrips.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTrips = filteredTrips.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (term) => { setSearchTerm(term); setCurrentPage(1); };

  if (loading) { }
  if (error)   { }

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <main className="col-10">
          <div className="container py-4">
            <EventsToolbar onSearch={handleSearch} onAdd={() => navigate('/events/new')} /> {}
            <div className="mt-4">
              {currentTrips.length > 0 ? (
                currentTrips.map((t, i) => (
                  <EventItemCard key={t.id ?? startIndex + i} variant="trip" {...t} />
                ))
              ) : (
                <div className="text-center text-muted py-5">No trips found.</div>
              )}
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
