import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import F1 from "../../assets/flakes/f1.avif";
import F2 from "../../assets/flakes/f2.avif";
import F3 from "../../assets/flakes/f3.avif";
import F4 from "../../assets/flakes/f4.avif";
import F5 from "../../assets/flakes/f5.avif";
import F6 from "../../assets/flakes/f6.avif";
import F7 from "../../assets/flakes/f7.avif";
import F8 from "../../assets/flakes/f8.avif";
import F9 from "../../assets/flakes/f9.avif";
import F10 from "../../assets/flakes/f10.avif";
import F11 from "../../assets/flakes/f11.avif";
import F12 from "../../assets/flakes/f12.avif";
import F13 from "../../assets/flakes/f13.avif";
import F14 from "../../assets/flakes/f14.avif";
import F15 from "../../assets/flakes/f15.avif";
import F16 from "../../assets/flakes/f16.avif";
import F17 from "../../assets/flakes/f17.avif";
import F18 from "../../assets/flakes/f18.avif";
import F19 from "../../assets/flakes/f19.avif";
import F20 from "../../assets/flakes/f20.avif";
import F21 from "../../assets/flakes/f21.avif";
import F22 from "../../assets/flakes/f22.avif";
import F23 from "../../assets/flakes/f23.avif";
import F24 from "../../assets/flakes/f24.avif";
import F25 from "../../assets/flakes/f25.avif";
import F26 from "../../assets/flakes/f26.avif";
import F27 from "../../assets/flakes/f27.avif";
import F28 from "../../assets/flakes/f28.avif";
import F29 from "../../assets/flakes/f29.avif";
import F30 from "../../assets/flakes/f30.avif";
import F31 from "../../assets/flakes/f31.avif";
import F32 from "../../assets/flakes/f32.avif";
import F33 from "../../assets/flakes/f33.avif";
import F34 from "../../assets/flakes/f34.avif";
import F35 from "../../assets/flakes/f35.avif";
import F36 from "../../assets/flakes/f36.avif";
import F37 from "../../assets/flakes/f37.avif";
import F38 from "../../assets/flakes/f38.avif";
import F39 from "../../assets/flakes/f39.avif";
import F40 from "../../assets/flakes/f40.avif";
import F41 from "../../assets/flakes/f41.avif";
import F42 from "../../assets/flakes/f42.avif";

const FlakesCategory = () => {
  const flakesItems = [
    { id: 1, img: F1, title: "Kellogg's Corn Flakes Original", weight: "500 g", price: "165", cancelPrice: "185", time: "16 mins" },
    { id: 2, img: F2, title: "Nestlé Chocos Filled with Chocolate", weight: "400 g", price: "175", cancelPrice: "195", time: "16 mins" },
    { id: 3, img: F3, title: "Kellogg's Special K Strawberry", weight: "400 g", price: "220", time: "16 mins" },
    { id: 4, img: F4, title: "Bagrry's Wheat Flakes", weight: "500 g", price: "140", cancelPrice: "160", time: "16 mins" },
    { id: 5, img: F5, title: "Kellogg's Muesli Fruit & Nut", weight: "500 g", price: "310", time: "16 mins" },
    { id: 6, img: F6, title: "Nestlé Koko Krunch", weight: "300 g", price: "150", cancelPrice: "175", time: "16 mins" },
    { id: 7, img: F7, title: "Kellogg's All-Brown Wheat Flakes", weight: "500 g", price: "120", time: "16 mins" },
    { id: 8, img: F8, title: "Bagrry's Corn Flakes Lite", weight: "500 g", price: "125", cancelPrice: "145", time: "16 mins" },
    { id: 9, img: F9, title: "Nestlé Honey Gold Flakes", weight: "350 g", price: "160", time: "16 mins" },
    { id: 10, img: F10, title: "Kellogg's Oats & More", weight: "400 g", price: "190", cancelPrice: "215", time: "16 mins" },
    { id: 11, img: F11, title: "True Elements Rolled Oats", weight: "500 g", price: "99", time: "16 mins" },
    { id: 12, img: F12, title: "Honey Bunches of Oats", weight: "400 g", price: "210", cancelPrice: "240", time: "16 mins" },
    { id: 13, img: F13, title: "Post Grape Nuts Flakes", weight: "350 g", price: "280", time: "16 mins" },
    { id: 14, img: F14, title: "Kellogg's Granola Chocolate", weight: "450 g", price: "285", cancelPrice: "320", time: "16 mins" },
    { id: 15, img: F15, title: "Bagrry's Organic Oats", weight: "500 g", price: "110", time: "16 mins" },
    { id: 16, img: F16, title: "Nestlé Nesplus Corn Flakes", weight: "500 g", price: "130", cancelPrice: "150", time: "16 mins" },
    { id: 17, img: F17, title: "Kellogg's Fruit N Nut Muesli", weight: "500 g", price: "320", time: "16 mins" },
    { id: 18, img: F18, title: "Nature Valley Granola Oats", weight: "400 g", price: "260", cancelPrice: "290", time: "16 mins" },
    { id: 19, img: F19, title: "Quaker Oats Pouch", weight: "500 g", price: "90", time: "16 mins" },
    { id: 20, img: F20, title: "Kellogg's Frosted Flakes", weight: "350 g", price: "170", cancelPrice: "195", time: "16 mins" },
    { id: 21, img: F21, title: "Bagrry's Fruit & Nut Muesli", weight: "500 g", price: "270", time: "16 mins" },
    { id: 22, img: F22, title: "Nestlé Chocos Duet", weight: "400 g", price: "180", cancelPrice: "200", time: "16 mins" },
    { id: 23, img: F23, title: "Kellogg's Oats & Honey", weight: "400 g", price: "185", time: "16 mins" },
    { id: 24, img: F24, title: "True Elements Choco Oats", weight: "400 g", price: "149", cancelPrice: "169", time: "16 mins" },
    { id: 25, img: F25, title: "Post Honey Oh's", weight: "300 g", price: "220", time: "16 mins" },
    { id: 26, img: F26, title: "Kellogg's Apple Cinnamon Mini-wheats", weight: "400 g", price: "230", cancelPrice: "260", time: "16 mins" },
    { id: 27, img: F27, title: "Bagrry's Chocolate Muesli", weight: "500 g", price: "290", time: "16 mins" },
    { id: 28, img: F28, title: "Nestlé Nesplus Oat Clusters", weight: "350 g", price: "195", cancelPrice: "215", time: "16 mins" },
    { id: 29, img: F29, title: "Kellogg's Chocos Fills", weight: "300 g", price: "155", time: "16 mins" },
    { id: 30, img: F30, title: "Healthy World Muesli Cranberry", weight: "500 g", price: "250", cancelPrice: "280", time: "16 mins" },
    { id: 31, img: F31, title: "Kellogg's Red Berries Special K", weight: "400 g", price: "225", time: "16 mins" },
    { id: 32, img: F32, title: "Bagrry's Berry & Seeds Muesli", weight: "500 g", price: "310", cancelPrice: "350", time: "16 mins" },
    { id: 33, img: F33, title: "Nestlé Nesplus Whole Grain Flakes", weight: "500 g", price: "140", time: "16 mins" },
    { id: 34, img: F34, title: "True Elements Quinoa Flakes", weight: "250 g", price: "110", cancelPrice: "130", time: "16 mins" },
    { id: 35, img: F35, title: "Kellogg's Peanut Butter Flakes", weight: "350 g", price: "210", time: "16 mins" },
    { id: 36, img: F36, title: "Post Fruity Pebbles", weight: "250 g", price: "180", cancelPrice: "200", time: "16 mins" },
    { id: 37, img: F37, title: "Bagrry's Millet Flakes", weight: "500 g", price: "160", time: "16 mins" },
    { id: 38, img: F38, title: "Kellogg's Magic Crunch", weight: "300 g", price: "145", cancelPrice: "165", time: "16 mins" },
    { id: 39, img: F39, title: "Nestlé Chocos Magic Stars", weight: "250 g", price: "135", time: "16 mins" },
    { id: 40, img: F40, title: "Organic India Jowar Flakes", weight: "400 g", price: "120", cancelPrice: "140", time: "16 mins" },
    { id: 41, img: F41, title: "Kellogg's Rice Krispies", weight: "300 g", price: "110", time: "16 mins" },
    { id: 42, img: F42, title: "Bagrry's Protein Oats", weight: "400 g", price: "190", cancelPrice: "220", time: "16 mins" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Breakfast Cereals & Flakes</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {flakesItems.map((item) => (
              <div
                key={item.id}
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
                <p className="text-xs text-gray-500 mt-1">{item.weight}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 flex-wrap">
                    <p className="text-sm sm:text-base font-bold text-gray-900">₹{item.price}</p>
                    {item.cancelPrice && (
                      <p className="text-xs text-gray-400 line-through">₹{item.cancelPrice}</p>
                    )}
                  </div>
                  <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold text-green-700 border border-green-500 rounded-full hover:bg-green-50 transition-colors whitespace-nowrap">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default FlakesCategory;