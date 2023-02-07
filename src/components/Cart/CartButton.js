import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartUiActions } from '../../store/Ui-slice';
const CartButton = (props) => {
  const dispatch=useDispatch()
  const cartShowHandler=()=>{
    dispatch(cartUiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
