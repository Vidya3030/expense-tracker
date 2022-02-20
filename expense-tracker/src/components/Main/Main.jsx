import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import Form from './Form/Form';

const Main = () => {
    
   const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="A dollar a day..."></CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $100 </Typography>
                <Typography align="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                 {/* info card*/ }
                 Try saying: Add income for $100 in category Salary for Monday 
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    {/* list */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main