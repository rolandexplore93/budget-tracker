// import logo from './logo.svg';
import {Grid} from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'


import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'

// style={{border: '1px solid yellow'}}

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
        <Grid xs={12} sm={6} md={4}>
          <Grid item>
              <Main title='Expense Tracker' subheader='Powered by Speechly'
                amount='300'
              />
          </Grid>
        </Grid>
        <Grid xs={12} sm={5} md={7} >

          <Grid item md={6} style={{ marginBottom: '50px'}}>
              <Details title='Income' amount='100'/>
          </Grid>
          
          <Grid item md={6}>
              <Details title='Expense' amount='400'/>
          </Grid>
        </Grid>

      </Grid>
      <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
      </PushToTalkButtonContainer>

    </div>
  );
}

export default App;
