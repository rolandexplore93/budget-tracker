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
    <div style={{height: 'auto', boxSizing: 'border-box'}}>
      <Grid container style={{height: 'inherit', boxSizing: 'border-box'
      }
     } className={classes.grid} spacing={2} alignItems='center' justifyContent='center'>
        
        <Grid item xs={10} sm={6} md={4}  ref={main}>
              <Main title='Expense Tracker' subheader='Powered by Speechly'
                amount='300'
              />
        </Grid>

        <Grid container spacing={1} item xs={10} sm={6} md={6}>

          <Grid  item xs={12} md={6} sm={10} style={{ marginBottom: '20px'}}>
              <Details title='Income' amount='100'/>
          </Grid>
          
          <Grid item xs={12} md={6} sm={10}>
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