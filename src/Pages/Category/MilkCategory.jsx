import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../Components/Context/CartContext.jsx';
import Swal from "sweetalert2";

const MilkCategory = () => {
  const { addToCart } = useCart();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ecommercebackend-nlx8.onrender.com/api/all-products');
        console.log('this is mil data',response)
        setData(response.data.allproducts);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load products');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);  // only add to cart, no navigation
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${product.title} has been added to your cart.`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <section className="w-full pb-20 md:pb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-2 sm:p-3"
          >
            <div className="flex justify-center mb-2">
              <img
                src={item.img}
                alt={item.title}
                className="h-24 sm:h-32 w-24 sm:w-32 object-contain"
              />
            </div>
            <div className="inline-block bg-amber-50 px-2 py-0.5 rounded-full mb-2">
              <p className="text-amber-700 text-xs font-semibold">⏱️ {item.time}</p>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 h-8 sm:h-10">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-1">{item.weight || item.litre}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1 flex-wrap">
                <p className="text-sm sm:text-base font-bold text-gray-900">₹{item.price}</p>
                {item.cancelPrice && (
                  <p className="text-xs text-gray-400 line-through">₹{item.cancelPrice}</p>
                )}
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold text-green-700 border border-green-500 rounded-full hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilkCategory;