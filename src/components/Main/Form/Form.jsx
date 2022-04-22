import React, {useContext, useState} from 'react'
import {TextField, Typography, Button, Select, InputLabel, Grid, FormControl, MenuItem} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../Context/Context';
import {v4 as uuidv4 } from 'uuid'



import useStyles from './styles'

// get days of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[new Date().getDay()];

// get months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[new Date().getMonth()];

// Put all form input into a state
const initialState = {
    type: 'income',
    category: '',
    amount: '',
    date: `${day}, ${new Date().getDate()} ${month} ${new Date().getFullYear()}`
}

const Form = () => {
    const classes = useStyles();
    const { createTransaction } = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)
    // console.log(createTransaction)
    // console.log(formData)

    const createNewTransaction = () => {
        const transaction = {
            ...formData,
            amount: Number(formData.amount),
            id: uuidv4()
        }
        createTransaction(transaction)
        setFormData(initialState)
    }

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
                <Select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value})}>
                    <MenuItem value='income'>Income</MenuItem>
                    <MenuItem value='expense'>Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value})}>
                    <MenuItem value='business'>Business</MenuItem>
                    <MenuItem value='salary'>Salary</MenuItem>
                    <MenuItem value='health'>Health</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid xs={6}>
            <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})}/>
        </Grid>
        <Grid xs={6}>
            <TextField type='date' label='Date' fullWidth value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}/>
        </Grid>
        <Button className={classes.button} color='primary' size='small' variant='contained' fullWidth onClick={createNewTransaction}>CREATE</Button>
    </Grid>
  )
}

export default Form