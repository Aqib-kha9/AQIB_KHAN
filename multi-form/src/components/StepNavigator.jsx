import React from 'react';
import { Button, Grid } from '@mui/material';

const StepNavigator = ({ activeStep, steps, handleBack, handleNext, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
      </Grid>
      <Grid item>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default StepNavigator;
