import React from 'react';
import { TextField, Grid } from '@mui/material';

const AddressForm = ({ data, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 1"
          name="addressLine1"
          value={data.addressLine1}
          onChange={handleChange}
          error={!!errors.addressLine1}
          helperText={errors.addressLine1}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 2"
          name="addressLine2"
          value={data.addressLine2}
          onChange={handleChange}
          error={!!errors.addressLine2}
          helperText={errors.addressLine2}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={data.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={data.state}
          onChange={handleChange}
          error={!!errors.state}
          helperText={errors.state}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Zip Code"
          name="zipCode"
          value={data.zipCode}
          onChange={handleChange}
          error={!!errors.zipCode}
          helperText={errors.zipCode}
        />
      </Grid>
    </Grid>
  );
};

export default AddressForm;
