import React, {useContext, useState} from 'react'
import {TextField, Typography, Button, Select, InputLabel, Grid, FormControl, MenuItem} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../Context/Context';
import {v4 as uuidv4 } from 'uuid'

import useStyles from './styles'
import { incomeCategories, expenseCategories } from '../../../Constants/Category';
import {formatInputDate} from '../../../utils/formatDate';

// Put all form input into a state
const initialState = {
    type: 'income',
    category: '',
    amount: '',
    date: formatInputDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const { createTransaction } = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)
    console.log(formData)

    const createNewTransaction = () => {
        const transaction = {
            ...formData,
            amount: Number(formData.amount),
            id: uuidv4()
        }
    console.log(transaction)

        createTransaction(transaction)
        setFormData(initialState)
    }
    
    // Separate Income and Expense categories and map through each category in the form category
    const selectedCategory = formData.type === 'income' ? incomeCategories : expenseCategories;

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
                    { selectedCategory.map((category) => <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid xs={6}>
            <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})}/>
        </Grid>
        <Grid xs={6}>
            <TextField type='date' label='Date' fullWidth value={formData.date} onChange={e => setFormData({...formData, date: formatInputDate(e.target.value)})}/>
        </Grid>
        <Button className={classes.button} color='primary' size='small' variant='contained' fullWidth onClick={createNewTransaction}>CREATE</Button>
    </Grid>
  )
}

export default Form