import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecordTable({ records, onDelete }) {
  const [confirmId, setConfirmId] = useState(null);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
            <th className="px-3 py-2" aria-label="Actions" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {records.length === 0 && (
            <tr>
              <td colSpan={5} className="px-3 py-6 text-center text-sm text-gray-500">No records found.</td>
            </tr>
          )}
          {records.map(r => (
            <tr key={r.id} className="hover:bg-primary-50 transition-colors">
              <td className="px-3 py-2 text-sm font-medium text-gray-900">{r.name}</td>
              <td className="px-3 py-2 text-sm text-gray-600">{r.category}</td>
              <td className="px-3 py-2 text-sm">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${r.status==='Active'?'bg-green-50 text-green-700 ring-green-600/20': r.status==='Inactive'?'bg-yellow-50 text-yellow-700 ring-yellow-600/20':'bg-gray-100 text-gray-600 ring-gray-500/20'}`}>{r.status}</span>
              </td>
              <td className="px-3 py-2 text-xs text-gray-500 whitespace-nowrap">{new Date(r.createdAt).toLocaleString()}</td>
              <td className="px-3 py-2 text-xs flex gap-2 justify-end">
                <Link to={`/edit/${r.id}`} className="link">Edit</Link>
                {confirmId === r.id ? (
                  <>
                    <button onClick={()=>{onDelete(r.id); setConfirmId(null);}} className="text-red-600 hover:text-red-700">Confirm</button>
                    <button onClick={()=>setConfirmId(null)} className="text-gray-400 hover:text-gray-500">Cancel</button>
                  </>
                ) : (
                  <button onClick={()=>setConfirmId(r.id)} className="text-red-600 hover:text-red-700">Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
