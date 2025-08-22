import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4">© {new Date().getFullYear()} MyCRUD. All rights reserved.</div>
    </footer>
  );
}
