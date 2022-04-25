import React, {useContext, useEffect, useState} from 'react'
import {TextField, Typography, Button, Select, InputLabel, Grid, FormControl, MenuItem} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../../Context/Context';
import {v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from '@speechly/react-client';

import useStyles from './styles'
import { incomeCategories, expenseCategories } from '../../../Constants/Category';
import {formatInputDate} from '../../../utils/formatDate';
import CustomizedSnackbar from '../../Snackbar/Snackbar';

// Put all form input into a state
const initialState = {
    type: 'Income',
    category: '',
    amount: '',
    date: formatInputDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const { createTransaction } = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)
    const { segment } = useSpeechContext()

    // Define state here
    const [open, setOpen] = useState(false)

    const createNewTransaction = () => {
        // Add Error handling condition for voice-to-speech
        // If any of the condition below is ture, Go outside of the transaction and do not create the transaction
        if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-")) return;
        
        const transaction = {
            ...formData,
            amount: Number(formData.amount),
            id: uuidv4()
        }
        setOpen(true)
        createTransaction(transaction)
        setFormData(initialState)
    }

    useEffect(() => {
        if (segment){
            if(segment.intent.intent === 'add_expense'){
                setFormData({...formData, type: 'Expense'})
            } else if (segment.intent.intent === 'add_income'){
                setFormData({...formData, type: 'Income'})
            } else if (segment.isFinal && segment.intent.intent === "create_transaction"){
                return createTransaction();
            }else if (segment.isFinal && segment.intent.intent === "cancel_transaction"){
                return setFormData(initialState);
            }

            // To select the categories, amount and date using voice speech
            segment.entities.forEach(e => {
                console.log(e.value)
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLocaleLowerCase()}`
                // Create switch statement for the entities
                switch (e.type){
                    case 'amount':
                        setFormData({...formData, amount: e.value});
                        break;
                    case 'category':
                        if (incomeCategories.map(iC => iC.type).includes(category)){
                            setFormData({...formData, type: 'Income', category});
                        } else if (expenseCategories.map(iC => iC.type).includes(category)){
                            setFormData({...formData, type: 'Expense', category});
                        }
                        
                        break;
                    case 'date':
                        setFormData({...formData, date: e.value});
                        break;
                    default:
                        break;
                }
            });

            // Add create button automatically after voice speech
            if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
                createNewTransaction();
            }

        }
    }, [segment])

    // Separate Income and Expense categories and map through each category in the form category
    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
        {/* The imported props in CustomizedSnackbar are STATE */}
        <CustomizedSnackbar open={open} setOpen={setOpen} />
        <Grid item xs={12}>
            <Typography align='center' variant='subtitle2' gutterBottom>
                {segment && segment.words.map((w) => w.value).join(" ")}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value})}>
                    <MenuItem value='Income'>Income</MenuItem>
                    <MenuItem value='Expense'>Expense</MenuItem>
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