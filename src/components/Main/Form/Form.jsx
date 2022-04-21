import React from 'react'
import {TextField, Typography, Button, Select, InputLabel, Grid, FormControl, MenuItem} from '@material-ui/core'

import useStyles from './styles'

const Form = () => {
    const classes = useStyles();

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
                ......
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value='income'>Income</MenuItem>
                    <MenuItem value='expense'>Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value='business'>Business</MenuItem>
                    <MenuItem value='salary'>Salary</MenuItem>
                    <MenuItem value='health'>Health</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid xs={6}>
            <TextField type='number' label='Amount' fullWidth/>
        </Grid>
        <Grid xs={6}>
            <TextField type='date' label='Date' fullWidth/>
        </Grid>
        <button className={classes.button} color='primary' variant='outlined' fullWidth>CREATE</button>
    </Grid>
  )
}

export default Form