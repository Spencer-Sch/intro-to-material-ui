import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Content from './Content';

// const useStyles = makeStyles({

// });

function App() {
  // const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item sx={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
