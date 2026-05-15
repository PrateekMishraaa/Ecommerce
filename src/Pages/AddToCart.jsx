import React from 'react';
import { useParams } from 'react-router-dom';
import { CiTrash } from 'react-icons/ci';
import { useCart } from '../Components/Context/CartContext.jsx'; 
import Navbar from '../Components/Navbar.jsx';

const AddToCart = () => {
  const { id } = useParams(); // optional, can be used later
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Cart</h1>
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <button
            onClick={() => window.history.back()}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
          >
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
  <>
  <Navbar/>
    <main className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex gap-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{item.weight || item.litre}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-base font-bold text-gray-900">₹{item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <CiTrash
                  onClick={() => removeFromCart(item._id)}
                  className="text-xl text-red-500 cursor-pointer hover:text-red-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Order Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-semibold">₹{deliveryFee}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-base font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition">
          Proceed to Checkout
        </button>
      </div>
    </main>
  </>
  );
};

export default AddToCart;