import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 min-h-screen">
      <h1 className="text-4xl font-bold">Cart</h1>
      <div className="sm:w-6/12 m-auto">
        {cartItems.length === 0 && (
          <div className='flex flex-col  items-center'>
          <h2 className="text-3xl mt-6 pb-12 font-bold">
          "Oh, look at that! The menu's as empty as a Monday morning before coffee!" 🛒.
          </h2>
          <img className='flex flex-center' src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
        )}
        <ItemList items={cartItems} />
        {cartItems.length > 0 && (
          <button
            className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
            onClick={handleClearCart}
          >
            Clear Cart 🧹
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
