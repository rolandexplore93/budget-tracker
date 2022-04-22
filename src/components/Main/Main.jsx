import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'

import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';

const Main = ({title, subheader, amount}) => {
    const classes = useStyles();

  return (
      <Card className={`${classes.root}, ${classes.expenseTracker}`}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography align='center' variant='h6'>Total Balance: ${amount}</Typography>
                {/* Infocard for Speechly text API */}
                <Typography align='center' variant='subtitle2'>Try to say: Add Expense from $200 in Catagory Salary for Monday</Typography>
                <Divider />
              <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>

                </Grid>
            </CardContent>

      </Card>
  )
}

export default Main