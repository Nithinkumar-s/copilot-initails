import React from 'react';

export default function About() {
  return (
    <div className="prose max-w-none">
      <h1>About</h1>
      <p>This demo application showcases a small but complete client-side CRUD interface using modern React tooling (Vite + functional components + hooks) and Tailwind CSS for utility-first styling.</p>
      <ul>
        <li>State persisted to localStorage.</li>
        <li>Search + filter with immediate feedback.</li>
        <li>Accessible forms (labels, aria attributes, focus states).</li>
        <li>Responsive layout and reusable components.</li>
      </ul>
      <p>Feel free to extend it with authentication, API integration, pagination, sorting, or exporting features.</p>
    </div>
  );
}
