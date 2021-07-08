import { useContext, useEffect, useState } from 'react';

import CartIcon from '../cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((acc, currItem) => {
    return acc + currItem.amount;
  }, 0);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const timeOut = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timeOut);
    };
  }, [cartCtx.items]);

  const buttonClasses = `${classes.button} ${
    isButtonHighlighted ? classes.bump : ''
  }`;

  return (
    <button onClick={props.onShowCart} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      <span className={classes.badge}>{`$${totalAmount}`}</span>
    </button>
  );
};

export default HeaderCartButton;
