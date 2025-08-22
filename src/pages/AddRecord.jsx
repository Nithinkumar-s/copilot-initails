import React from 'react';
import RecordForm from '../components/RecordForm';
import { useRecords } from '../context/RecordsContext';
import { useNavigate } from 'react-router-dom';

export default function AddRecord() {
  const { addRecord } = useRecords();
  const navigate = useNavigate();

  const handleSubmit = data => {
    addRecord(data);
    navigate('/records');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Add Record</h1>
      <div className="card">
        <RecordForm onSubmit={handleSubmit} submitLabel="Create" />
      </div>
    </div>
  );
}
