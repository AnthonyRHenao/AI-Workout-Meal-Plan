import React from 'react';
import { ListItemButton, Typography } from '@mui/material';
import {ListItemText} from '@mui/material';
//import { Box } from '@mui/system';
import CardGenerator from '../CardGenerator';
import {Grid} from '@mui/material'

function Mealplan() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={4} sx={{sm:'122px', xs:"40px", width:300, alignItems:'center'}}>
            <Typography>
                Here are your Menu Items: 
            </Typography>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Breakfast" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Lunch" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Dinner" />
            </ListItemButton>
        </Grid>
        <Grid item xs={8}>
            <CardGenerator />
        </Grid>
    </Grid>
  )
}

export default Mealplan;
