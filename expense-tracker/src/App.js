import './App.css';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';
import useStyles from './styles';

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>        
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />        
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses"/>        
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
