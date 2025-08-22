import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

// Initial in-memory datasets (no persistence)
const initialData = {
  Products: [
    { id: 1, name: 'Product A', status: 'active' },
    { id: 2, name: 'Product B', status: 'inactive' },
    { id: 3, name: 'Product C', status: 'active' }
  ],
  Solutions: [
    { id: 1, name: 'Solution A', status: 'active' },
    { id: 2, name: 'Solution B', status: 'inactive' }
  ],
  Resources: [
    { id: 1, name: 'Documentation', status: 'active' },
    { id: 2, name: 'API Reference', status: 'active' }
  ],
  Pricing: [
    { id: 1, name: 'Free Plan', status: 'active' },
    { id: 2, name: 'Enterprise Plan', status: 'inactive' }
  ]
};

const NavDataContext = createContext();

export function NavDataProvider({ children }) {
  const [data, setData] = useState(initialData);

  const createItem = useCallback((section, item) => {
    setData(prev => ({
      ...prev,
      [section]: [...prev[section], { id: uuid(), status: 'active', ...item }]
    }));
  }, []);

  const updateItem = useCallback((section, id, updates) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].map(r => r.id === id ? { ...r, ...updates } : r)
    }));
  }, []);

  const deleteItem = useCallback((section, id) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].filter(r => r.id !== id)
    }));
  }, []);

  return (
    <NavDataContext.Provider value={{ data, createItem, updateItem, deleteItem }}>
      {children}
    </NavDataContext.Provider>
  );
}

export function useNavData() {
  const ctx = useContext(NavDataContext);
  if (!ctx) throw new Error('useNavData must be used within NavDataProvider');
  return ctx;
}
