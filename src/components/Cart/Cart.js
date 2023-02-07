import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import addToCartSlice from "../../store/AddtoCart-slice";
const Cart = (props) => {
  const price = useSelector((state) => state.addToCart.totalprice);
  const quantity = useSelector((state) => state.addToCart.totalQuantity);
  const cart = useSelector((state) => state.addToCart.items);

  console.log(cart);
  console.log(quantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => {
          return <CartItem
            item={{
              key:item.id,
              id:item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalprice,
              price: item.price,
            }}
          />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
