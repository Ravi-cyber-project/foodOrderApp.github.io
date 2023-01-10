import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import {styled}  from '@mui/material';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `INR ${props.price}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      _id: props._id,
      name: props.name,
      amount: amount,
      price: props.price,
      img : props.img
    });
  };

  return (
    <li className={classes.all}>
     
        <div >
          <img  className={classes.img} src = {props.img} />
        </div>
        <div className={classes.meal}>
          <div >
            <h3 className={classes.heading}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
          </div>
          <div>
            <MealItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
        
    </li>
  );
};

// const Container = styled("div")({
//   backgroundColor:"green",
//   display:"flex",
//   justifyContent:'space-between'
// });


export default MealItem;
