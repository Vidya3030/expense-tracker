import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const  Form = () => {

   const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                ... (where spoken text goes)
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="school">School</MenuItem>
                        <MenuItem value="salary">Salary</MenuItem>
                    </Select>                
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth>Submit</Button>
        </Grid>
    )
}

export default Form;