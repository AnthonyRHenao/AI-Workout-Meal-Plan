import React, { useState } from 'react';
import { Card, CardContent, CardMedia, ListItemButton, Paper, Typography } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';

function Mealplan() {
  // Step 1: Create a state variable to store the API data
  const [apiData, setApiData] = useState(null);

  // Step 2: Create a function to fetch data from the API
  const fetchDataFromAPI = async () => {
    // Define the options for the API request
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: {
        tags: 'breakfast,lunch,dinner',
        number: '10'
      },
      headers: {
        'X-RapidAPI-Key': '464f4e24d8msh0f17a2a749ab23ep126989jsnad9e27712e09',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      // Make the API request using Axios
      const response = await axios.request(options);
      // Set the API response data in the state
      setApiData(response.data);
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3} sx={{ sm: '122px', xs: '40px', width: 300, alignItems: 'center' }}>
        <Typography>Here are your Menu Items:</Typography>
        {/* Step 3: Trigger the API call on button click */}
        <ListItemButton component="a" href="#simple-list" onClick={fetchDataFromAPI}>
          <ListItemText primary="Fetch Recipe" />
        </ListItemButton>
      </Grid>
      <Grid item xs={9}>
        {apiData && (
          <Paper elevation={3} style={{padding:"20px"}} >
            {/* Render the API data here */}
            <Typography variant='h5' component="div" gutterBottom>Title: {apiData.recipes[0].title}</Typography>
            <Typography variant='body2' color="textSecondary" gutterBottom><b>Instructions:</b> {apiData.recipes[0].instructions}</Typography>
            <div className='text-center' padding="20px" marginTop="10px">
            <img $thumbnail-padding= '.25rem' src={apiData.recipes[0].image} alt="recipe" className='img-fluid rounded' style={{width:"auto", height:"auto"}} />
            </div>

            {/* Add other data you want to display from the response */}
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}

export default Mealplan;
