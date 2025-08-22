import React, { useEffect, useState } from 'react';

const initial = { name: '', category: '', status: 'Active' };

export default function RecordForm({ onSubmit, initialValues, submitLabel='Save' }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) setValues(v => ({...v, ...initialValues}));
  }, [initialValues]);

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = 'Name is required';
    if (!values.category.trim()) errs.category = 'Category required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name: values.name.trim(), category: values.category.trim(), status: values.status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" name="name" value={values.name} onChange={handleChange} className="input mt-1" required aria-invalid={!!errors.name} aria-describedby={errors.name? 'name-error':undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input id="category" name="category" value={values.category} onChange={handleChange} className="input mt-1" required aria-invalid={!!errors.category} aria-describedby={errors.category? 'category-error':undefined} />
          {errors.category && <p id="category-error" className="mt-1 text-xs text-red-600">{errors.category}</p>}
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select id="status" name="status" value={values.status} onChange={handleChange} className="input mt-1">
            <option>Active</option>
            <option>Inactive</option>
            <option>Archived</option>
          </select>
        </div>
      </div>
      <div className="pt-2">
        <button type="submit" className="btn">{submitLabel}</button>
      </div>
    </form>
  );
}
