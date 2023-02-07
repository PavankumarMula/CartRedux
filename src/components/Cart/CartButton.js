import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartUiActions } from '../../store/Ui-slice';
const CartButton = (props) => {
  const dispatch=useDispatch()
  const cartitemNums=useSelector(state=>state.addToCart.totalQuantity)
  console.log(cartitemNums)
  const cartShowHandler=()=>{
    dispatch(cartUiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartitemNums}</span>
    </button>
  );
};

export default CartButton;
