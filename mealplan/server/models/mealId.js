const meals = [
    { id: 1, name: 'Breakfast', description: 'Healthy breakfast options' },
    { id: 2, name: 'Lunch', description: 'Delicious lunch choices' },
    { id: 3, name: 'Dinner', description: 'Savory dinner selections' }
  ];
  
  class MealPlan {
    constructor(id, meals) {
      this.id = id;
      this.meals = meals;
    }
  }
  
  class User {
    constructor(mealPlanName) {
      this.mealPlanName = mealPlanName;
    }
  }
  
  module.exports = { meals, MealPlan, User };
  