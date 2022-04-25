// import logo from './logo.svg';
import React, { useEffect, useRef } from 'react'
import {Grid} from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'


const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  console.log(useSpeechContext)

  const main = useRef(null)
  const executeScroll = () => main.current.scrollIntoView()

    // main is the reference to the main component
    // Whenever the speechState changes, call the useEffect()
    useEffect(() => {
      // SpeechState.Recording didn't work out as expected
      if({speechState} === SpeechState) {
        executeScroll();
      }
    }, [speechState]);

  

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
        <Grid ref={main} xs={12} sm={6} md={4}>
          <Grid item >
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

// To prevent menu from popping up during texting, in the browser console
// Add window.oncontextmenu = function(){return false}
// press enter