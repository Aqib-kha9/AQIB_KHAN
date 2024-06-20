import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Confirmation = ({ data }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Confirmation
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={data.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={data.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={data.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 1" secondary={data.addressLine1} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 2" secondary={data.addressLine2} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={data.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={data.state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zip Code" secondary={data.zipCode} />
        </ListItem>
      </List>
    </div>
  );
};

export default Confirmation;
