import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import axios from 'axios';

const URL = 'http://localhost:8000';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();



  useEffect(() => {
    const fetchMeals = async () => {
      const response =   await axios.get(`${URL}/meals`);

     

      const responseData = response.data;

      console.log(responseData);
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          _id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          img : responseData[key].img
        });
      }

        

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal._id}
      _id={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img = {meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul >{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


