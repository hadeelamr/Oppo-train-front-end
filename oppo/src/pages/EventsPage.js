
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { EventsToolbar, EventItemCard, PaginationStatic } from "../components";
import { useDataFetching } from "../hooks/useDataFetching";

const ITEMS_PER_PAGE = 6;

export default function EventsPage() {
  const navigate = useNavigate(); 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: events = [], loading, error } = useDataFetching("events");

  const filteredEvents = events.filter((e) => {
    const title = (e.title ?? "").toLowerCase();
    const desc  = (e.discerption ?? "").toLowerCase();
    const loc   = (e.location ?? "").toLowerCase();
    const q     = (searchTerm ?? "").toLowerCase();
    return title.includes(q) || desc.includes(q) || loc.includes(q);
  });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (term) => { setSearchTerm(term); setCurrentPage(1); };

  if (loading) { }
  if (error)   { }

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <main className="col-10">
          <div className="container py-4">
            <EventsToolbar onSearch={handleSearch} onAdd={() => navigate('/events/new')} /> {/* <-- جديد */}
            <div className="mt-4 row g-3">
              {currentEvents.map((e, i) => (
                <div className="col-12 col-sm-6 col-lg-4" key={e.id ?? startIndex + i}>
                  <EventItemCard variant="event" id={e.id} {...e} />
                </div>
              ))}
              {currentEvents.length === 0 && (
                <div className="text-center text-muted py-5">No matches.</div>
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
