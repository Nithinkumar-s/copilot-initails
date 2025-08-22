import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecordForm from '../components/RecordForm';
import { useRecords } from '../context/RecordsContext';

export default function EditRecord() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { records, updateRecord } = useRecords();
  const record = records.find(r => r.id === id);

  const handleSubmit = data => {
    updateRecord(id, data);
    navigate('/records');
  };

  if (!record) return <p className="text-sm text-red-600">Record not found.</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Edit Record</h1>
      <div className="card">
        <RecordForm onSubmit={handleSubmit} initialValues={record} submitLabel="Update" />
      </div>
    </div>
  );
}
