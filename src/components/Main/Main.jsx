import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import { ExpenseTrackerContext } from '../../Context/Context';
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const Main = ({title, subheader, amount}) => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)

  return (
      <Card className={`${classes.root}, ${classes.expenseTracker}`}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography align='center' variant='h6'>Total Balance: ${balance}</Typography>
                <Typography align='center' variant='subtitle2'>
                    {/* Infocard for Speechly voice */}
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
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