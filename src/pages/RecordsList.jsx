import React from 'react';
import { useRecords } from '../context/RecordsContext';
import RecordTable from '../components/RecordTable';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function RecordsList() {
  const { filtered, deleteRecord } = useRecords();
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <h1 className="text-2xl">Records</h1>
        {/** Add New button temporarily disabled per request. Restore by uncommenting below. */}
        {false && (
          <Link to="/add" className="btn self-start sm:self-auto">Add New</Link>
        )}
      </div>
      <SearchBar />
      <div className="card p-0">
        <RecordTable records={filtered} onDelete={deleteRecord} />
      </div>
    </div>
  );
}
