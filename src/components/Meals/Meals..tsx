import { Fragment } from 'react';

import Mealssummary from './Mealssummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <Mealssummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;