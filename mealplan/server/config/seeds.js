const db = require('./connection');
const { User, Product, MealPlan } = require('../models');

db.once('open', async () => {
  
  await User.deleteMany();
  await Product.deleteMany();
  await MealPlan.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      ingredients: "",
    },
  ]);

  const mealplans = await MealPlan.insertMany([
    {
      name: 'Tin of Cookies',
      createdAt: "time",
      products: products[0]._id,
    },
  ]);

  const users = await User.create([
    {
      firstName: 'Pamela',
      lastName: 'Washington',
      email: 'pamela@testmail.com',
      password: 'password12345',
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id],
        },
      ],
    },
    {
      firstName: 'Elijah',
      lastName: 'Holt',
      email: 'eholt@testmail.com',
      password: 'password12345',
    },
  ]);

  console.log('Seed data created successfully!');

  process.exit();
});
