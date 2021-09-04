import React from 'react';
import { Grid } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function App() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '400px' }}
    >
      <Grid item>
        <AcUnitIcon color="primary" />
      </Grid>
      <Grid item>
        <AcUnitIcon color="secondary" />
      </Grid>
    </Grid>
  );
}

export default App;
