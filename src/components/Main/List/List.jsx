import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../Context/Context';



const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)

    return (
        <MUIList dense="false" className={classes.list}>
            {
                transactions.map(transaction => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction}>
                        <ListItem key={transaction.id}>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date }`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick={() => {
                                    let confirmationText = 'Are you sure you want to delete this transaction?';
                                    if (window.confirm(confirmationText) === true){
                                        deleteTransaction(transaction.id);
                                    } return
                                }}>
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