import React from 'react';
import { TextField, Grid } from '@mui/material';

const PersonalForm = ({ data, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalForm;
