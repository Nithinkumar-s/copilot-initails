import React from 'react';
import { useRecords } from '../context/RecordsContext';

export default function SearchBar() {
  const { query, setQuery, filter, setFilter } = useRecords();
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <label htmlFor="search" className="sr-only">Search</label>
        <input id="search" type="search" placeholder="Search records..." value={query} onChange={e=>setQuery(e.target.value)} className="input" />
      </div>
      <div>
        <label htmlFor="filter" className="sr-only">Filter status</label>
        <select id="filter" value={filter} onChange={e=>setFilter(e.target.value)} className="input">
          <option value="all">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Archived">Archived</option>
        </select>
      </div>
    </div>
  );
}
