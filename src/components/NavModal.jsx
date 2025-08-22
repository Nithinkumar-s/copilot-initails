import React, { useMemo, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Tooltip, Snackbar, Alert, Fab, Stack, TextField, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useNavData } from '../context/NavDataContext';

export default function NavModal({ section, open, onClose }) {
  const { data, createItem, updateItem, deleteItem } = useNavData();
  const [editingId, setEditingId] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', status: 'active' });
  const [snack, setSnack] = useState(null);

  const rows = useMemo(() => (data[section] || []).filter(r => r.status === 'active'), [data, section]);

  const resetForm = () => { setEditingId(null); setFormValues({ name: '', status: 'active' }); };

  const handleAddClick = () => { resetForm(); setEditingId('new'); };
  const handleEditClick = (row) => { setEditingId(row.id); setFormValues({ name: row.name, status: row.status }); };
  const handleDelete = (id) => { deleteItem(section, id); setSnack({ type: 'success', message: 'Deleted successfully' }); };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const trimmed = formValues.name.trim();
    if (!trimmed) return;
    // Duplicate name check (case-insensitive) within the same section
  const exists = (data[section] || []).some(r => r.status === 'active' && r.name.toLowerCase() === trimmed.toLowerCase() && (editingId === 'new' || r.id !== editingId));
    if (exists) {
      setSnack({ type: 'error', message: 'Name already exists' });
      return; // keep form open
    }
    if (editingId === 'new') {
      createItem(section, { name: trimmed, status: formValues.status });
      setSnack({ type: 'success', message: 'Created successfully' });
    } else if (editingId) {
      updateItem(section, editingId, { name: trimmed, status: formValues.status });
      setSnack({ type: 'success', message: 'Updated successfully' });
    }
    resetForm();
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 160 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'actions', headerName: 'Actions', width: 120, sortable: false, filterable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => handleEditClick(params.row)}>
              <EditIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton size="small" color="error" onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Stack>
      )
    }
  ];

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ pr: 6 }}>{section}
          <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ position: 'relative', minHeight: 300 }}>
          <div style={{ height: 320, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5,10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              getRowId={(row) => row.id}
            />
          </div>
          {editingId && (
            <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  size="small"
                  label="Name"
                  value={formValues.name}
                  onChange={e=>setFormValues(v=>({...v,name:e.target.value}))}
                  required
                />
                <TextField
                  select
                  size="small"
                  label="Status"
                  value={formValues.status}
                  onChange={e=>setFormValues(v=>({...v,status:e.target.value}))}
                >
                  <MenuItem value="active">active</MenuItem>
                  <MenuItem value="inactive">inactive</MenuItem>
                </TextField>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Button type="submit" variant="contained" color="primary">{editingId==='new'?'Create':'Update'}</Button>
                  <Button variant="text" onClick={resetForm}>Cancel</Button>
                </Stack>
              </Stack>
            </form>
          )}
          <Fab color="primary" size="medium" onClick={handleAddClick} aria-label="Add" sx={{ position:'absolute', bottom: 16, right: 16 }}>
            <AddIcon />
          </Fab>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">Close</Button>
        </DialogActions>
      </Dialog>
  <Snackbar open={!!snack} autoHideDuration={2500} onClose={()=>setSnack(null)} anchorOrigin={{ vertical:'top', horizontal:'right' }}>
        {snack && <Alert onClose={()=>setSnack(null)} severity={snack.type} variant="filled">{snack.message}</Alert>}
      </Snackbar>
    </>
  );
}
