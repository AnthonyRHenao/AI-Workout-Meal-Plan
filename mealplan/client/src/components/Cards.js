import React from 'react';
import CardGenerator from './CardGenerator';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
  params: {
    tags: 'breakfast',
    number: '15'
  },
  headers: {
    'X-RapidAPI-Key': 'ee5fdde619mshc33c686fba4973ap1b9142jsna1744fc38bcc',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.recipes[0]);
} catch (error) {
	console.error(error);
} 

function Cards() {
  return (
    <CardGenerator
    image= {response.data.recipes[0].image}
    >
    </CardGenerator>
  )
}

export default Cards
