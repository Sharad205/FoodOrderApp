import React,{ Fragment }from 'react';
import MealsSummary from './MealsSummery.js';
import AvailableMeals from './AvailableMeals.js';


const Meals=()=>
{
   return(
       <Fragment>
           <MealsSummary/>
           <AvailableMeals/>
       </Fragment>
   );
};

export default Meals;