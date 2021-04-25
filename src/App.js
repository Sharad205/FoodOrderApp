import { useState } from 'react';
import React from 'react';
import Header from './Components/Layouts/Header.js';
import Meals from './Components/Meals/Meals.js';
import Cart from './Components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';

function App() {
    
   const [cartIsShown, setCartIsShown]=useState(false);

   const showCartHandler = () =>
   {
     setCartIsShown(true);
   }

   const hideCarthandler = () =>
   {
     setCartIsShown(false);
   }


  return (
    <CartProvider>
         {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
