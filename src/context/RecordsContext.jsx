import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const STORAGE_KEY = 'records-data-v1';

const RecordsContext = createContext();

export function RecordsProvider({ children }) {
  const [records, setRecords] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [
      { id: uuid(), name: 'Sample Item', category: 'General', status: 'Active', createdAt: new Date().toISOString() },
    ];
  });
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const addRecord = data => {
    setRecords(prev => [
      { id: uuid(), createdAt: new Date().toISOString(), ...data },
      ...prev,
    ]);
  };

  const updateRecord = (id, updates) => {
    setRecords(prev => prev.map(r => (r.id === id ? { ...r, ...updates } : r)));
  };

  const deleteRecord = id => {
    setRecords(prev => prev.filter(r => r.id !== id));
  };

  const filtered = records.filter(r => {
    const matchesQuery = [r.name, r.category, r.status].some(v => v.toLowerCase().includes(query.toLowerCase()));
    const matchesFilter = filter === 'all' || r.status === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <RecordsContext.Provider value={{ records, filtered, addRecord, updateRecord, deleteRecord, query, setQuery, filter, setFilter }}>
      {children}
    </RecordsContext.Provider>
  );
}

export function useRecords() {
  const ctx = useContext(RecordsContext);
  if (!ctx) throw new Error('useRecords must be inside RecordsProvider');
  return ctx;
}
