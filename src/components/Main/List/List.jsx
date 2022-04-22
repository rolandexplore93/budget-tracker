import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../Context/Context';



const List = () => {
    const classes = useStyles();
    const {deleteTransaction} = useContext(ExpenseTrackerContext)
    // console.log(deleteTransaction)

    const transactions = [
        {id: "1", type: 'Income', category: 'Salary', amount: 150, date: `Thu Apr 21`},
        {id: "2", type: 'Expense', category: 'Health', amount: 30, date: `Fri Apr 22`},
        {id: "3", type: 'Income', category: 'Business', amount: 1150, date: `Fri Apr 22`},
    ]
  
    return (
        <MUIList dense="false" className={classes.list}>
            {
                transactions.map(transaction => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date }`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick=''>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                    
                ))
            }
        </MUIList>
  )
}

export default List