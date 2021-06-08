import { useState } from 'react';

import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const handleShowCart = () => {
    setIsCartShown(true);
  };

  const handleHideCart = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
