import classes from './CartItem.module.css';
import { addToCartSliceActions } from '../../store/AddtoCart-slice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const dispatch=useDispatch()
  const { title, quantity, total, price,id } = props.item;
  const addToCartHandler=()=>{
    dispatch(addToCartSliceActions.addToCart({ title, quantity, total, price,id }))
  }
  const removeFromCartHandler=()=>{
    dispatch(addToCartSliceActions.removeFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
