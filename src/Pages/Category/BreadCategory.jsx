import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import B1 from "../../assets/breads/b1.avif";
import B2 from "../../assets/breads/b2.avif";
import B3 from "../../assets/breads/b3.avif";
import B4 from "../../assets/breads/b4.avif";
import B5 from "../../assets/breads/b5.avif";
import B6 from "../../assets/breads/b6.avif";
import B7 from "../../assets/breads/b7.avif";
import B8 from "../../assets/breads/b8.avif";
import B9 from "../../assets/breads/b9.avif";
import B10 from "../../assets/breads/b10.avif";
import B11 from "../../assets/breads/b11.avif";
import B12 from "../../assets/breads/b12.avif";
import B13 from "../../assets/breads/b13.avif";
import B14 from "../../assets/breads/b14.avif";
import B15 from "../../assets/breads/b15.avif";
import B16 from "../../assets/breads/b16.avif";
import B17 from "../../assets/breads/b17.avif";
import B18 from "../../assets/breads/b18.avif";
import B19 from "../../assets/breads/b19.avif";
import B20 from "../../assets/breads/b20.avif";
import B21 from "../../assets/breads/b21.avif";
import B22 from "../../assets/breads/b22.avif";
import B23 from "../../assets/breads/b23.avif";
import B24 from "../../assets/breads/b24.avif";
import B25 from "../../assets/breads/b25.avif";
import B26 from "../../assets/breads/b26.avif";
import B27 from "../../assets/breads/b27.avif";
import B28 from "../../assets/breads/b28.avif";
import B29 from "../../assets/breads/b29.avif";
import B30 from "../../assets/breads/b30.avif";
import B31 from "../../assets/breads/b31.avif";
import B32 from "../../assets/breads/b32.avif";
import B33 from "../../assets/breads/b33.avif";
import B34 from "../../assets/breads/b34.avif";
import B35 from "../../assets/breads/b35.avif";
import B36 from "../../assets/breads/b36.avif";
import B37 from "../../assets/breads/b37.avif";
import B38 from "../../assets/breads/b38.avif";
import B39 from "../../assets/breads/b39.avif";
import B40 from "../../assets/breads/b40.avif";
import B41 from "../../assets/breads/b41.avif";
import B42 from "../../assets/breads/b42.avif";
import B43 from "../../assets/breads/b43.avif";
import B44 from "../../assets/breads/b44.avif";
import B45 from "../../assets/breads/b45.avif";
import B46 from "../../assets/breads/b46.avif";
import B47 from "../../assets/breads/b47.avif";
import B48 from "../../assets/breads/b48.avif";
import B49 from "../../assets/breads/b49.avif";
import B50 from "../../assets/breads/b50.avif";
import B51 from "../../assets/breads/b51.avif";
import B52 from "../../assets/breads/b52.avif";
import B53 from "../../assets/breads/b53.avif";
import B54 from "../../assets/breads/b54.avif";
import B55 from "../../assets/breads/b55.avif";
import B56 from "../../assets/breads/b56.avif";
import B57 from "../../assets/breads/b57.avif";
import B58 from "../../assets/breads/b58.avif";
import B59 from "../../assets/breads/b59.avif";
import B60 from "../../assets/breads/b60.avif";

const BreadCategory = () => {
  const breads = [
    { id: 1, img: B1, title: "Fresh White Bread", weight: "400 g", price: "35", time: "16 mins" },
    { id: 2, img: B2, title: "Brown Bread", weight: "400 g", price: "40", time: "16 mins" },
    { id: 3, img: B3, title: "Multigrain Bread", weight: "400 g", price: "45", time: "16 mins", cancelPrice: "50" },
    { id: 4, img: B4, title: "Whole Wheat Bread", weight: "400 g", price: "38", time: "16 mins" },
    { id: 5, img: B5, title: "Garlic Bread", weight: "200 g", price: "55", time: "16 mins" },
    { id: 6, img: B6, title: "Cheese Bread", weight: "250 g", price: "65", time: "16 mins", cancelPrice: "75" },
    { id: 7, img: B7, title: "Pav (6 pcs)", weight: "200 g", price: "20", time: "16 mins" },
    { id: 8, img: B8, title: "Dinner Rolls (6 pcs)", weight: "180 g", price: "30", time: "16 mins" },
    { id: 9, img: B9, title: "Baguette", weight: "300 g", price: "50", time: "16 mins" },
    { id: 10, img: B10, title: "Croissant (Butter)", weight: "80 g", price: "45", time: "16 mins" },
    { id: 11, img: B11, title: "Chocolate Croissant", weight: "90 g", price: "55", time: "16 mins" },
    { id: 12, img: B12, title: "Cinnamon Roll", weight: "100 g", price: "60", time: "16 mins" },
    { id: 13, img: B13, title: "Danish Pastry", weight: "110 g", price: "65", time: "16 mins" },
    { id: 14, img: B14, title: "Blueberry Muffin", weight: "90 g", price: "50", time: "16 mins" },
    { id: 15, img: B15, title: "Chocolate Muffin", weight: "90 g", price: "50", time: "16 mins" },
    { id: 16, img: B16, title: "Banana Bread Slice", weight: "120 g", price: "55", time: "16 mins" },
    { id: 17, img: B17, title: "Fruit Loaf", weight: "350 g", price: "70", time: "16 mins", cancelPrice: "85" },
    { id: 18, img: B18, title: "Rye Bread", weight: "400 g", price: "60", time: "16 mins" },
    { id: 19, img: B19, title: "Sourdough Bread", weight: "450 g", price: "80", time: "16 mins" },
    { id: 20, img: B20, title: "Focaccia (Herb)", weight: "250 g", price: "75", time: "16 mins" },
    { id: 21, img: B21, title: "Pita Bread (4 pcs)", weight: "200 g", price: "40", time: "16 mins" },
    { id: 22, img: B22, title: "Tortilla Wraps (6 pcs)", weight: "300 g", price: "55", time: "16 mins" },
    { id: 23, img: B23, title: "Bagel (Plain)", weight: "100 g", price: "35", time: "16 mins" },
    { id: 24, img: B24, title: "Sesame Bagel", weight: "105 g", price: "40", time: "16 mins" },
    { id: 25, img: B25, title: "Eggless Cake (Vanilla)", weight: "300 g", price: "120", time: "16 mins" },
    { id: 26, img: B26, title: "Chocolate Cake Slice", weight: "150 g", price: "90", time: "16 mins", cancelPrice: "110" },
    { id: 27, img: B27, title: "Pineapple Pastry", weight: "100 g", price: "60", time: "16 mins" },
    { id: 28, img: B28, title: "Black Forest Pastry", weight: "100 g", price: "65", time: "16 mins" },
    { id: 29, img: B29, title: "Butter Cookie Jar", weight: "200 g", price: "110", time: "16 mins" },
    { id: 30, img: B30, title: "Oatmeal Cookies (6 pcs)", weight: "150 g", price: "55", time: "16 mins" },
    { id: 31, img: B31, title: "Chocolate Chip Cookies (6 pcs)", weight: "150 g", price: "60", time: "16 mins" },
    { id: 32, img: B32, title: "Brittle Almond Biscotti (10 pcs)", weight: "200 g", price: "85", time: "16 mins" },
    { id: 33, img: B33, title: "Cream Roll (Veg)", weight: "100 g", price: "40", time: "16 mins" },
    { id: 34, img: B34, title: "Puff (Veg)", weight: "120 g", price: "35", time: "16 mins" },
    { id: 35, img: B35, title: "Chicken Puff", weight: "130 g", price: "55", time: "16 mins" },
    { id: 36, img: B36, title: "Samosa (2 pcs)", weight: "150 g", price: "30", time: "16 mins" },
    { id: 37, img: B37, title: "Khari (Plain)", weight: "150 g", price: "25", time: "16 mins" },
    { id: 38, img: B38, title: "Khasta Kachori (2 pcs)", weight: "140 g", price: "35", time: "16 mins" },
    { id: 39, img: B39, title: "Bread Pakora (2 pcs)", weight: "160 g", price: "45", time: "16 mins" },
    { id: 40, img: B40, title: "French Toast (2 slices)", weight: "120 g", price: "50", time: "16 mins" },
    { id: 41, img: B41, title: "Garlic Breadstick (4 pcs)", weight: "100 g", price: "40", time: "16 mins" },
    { id: 42, img: B42, title: "Cheese Straws (6 pcs)", weight: "120 g", price: "60", time: "16 mins" },
    { id: 43, img: B43, title: "Brioche Bun", weight: "90 g", price: "35", time: "16 mins" },
    { id: 44, img: B44, title: "Burger Bun (4 pcs)", weight: "240 g", price: "50", time: "16 mins" },
    { id: 45, img: B45, title: "Hot Dog Bun (4 pcs)", weight: "240 g", price: "50", time: "16 mins" },
    { id: 46, img: B46, title: "Slider Buns (8 pcs)", weight: "320 g", price: "65", time: "16 mins" },
    { id: 47, img: B47, title: "Rusk (Sweet)", weight: "200 g", price: "40", time: "16 mins" },
    { id: 48, img: B48, title: "Rusk (Salted)", weight: "200 g", price: "40", time: "16 mins" },
    { id: 49, img: B49, title: "Cupcake (Chocolate)", weight: "80 g", price: "45", time: "16 mins" },
    { id: 50, img: B50, title: "Cupcake (Vanilla)", weight: "80 g", price: "45", time: "16 mins" },
    { id: 51, img: B51, title: "Donut (Glazed)", weight: "75 g", price: "50", time: "16 mins" },
    { id: 52, img: B52, title: "Donut (Chocolate)", weight: "80 g", price: "55", time: "16 mins" },
    { id: 53, img: B53, title: "Brownie (Chocolate)", weight: "90 g", price: "70", time: "16 mins", cancelPrice: "85" },
    { id: 54, img: B54, title: "Blondie (Caramel)", weight: "90 g", price: "75", time: "16 mins" },
    { id: 55, img: B55, title: "Cinnamon Bun", weight: "110 g", price: "65", time: "16 mins" },
    { id: 56, img: B56, title: "Pain Au Chocolat", weight: "95 g", price: "70", time: "16 mins" },
    { id: 57, img: B57, title: "Almond Croissant", weight: "100 g", price: "80", time: "16 mins" },
    { id: 58, img: B58, title: "Pretzel (Soft)", weight: "120 g", price: "45", time: "16 mins" },
    { id: 59, img: B59, title: "Baklava (2 pcs)", weight: "100 g", price: "90", time: "16 mins" },
    { id: 60, img: B60, title: "Macaron Box (6 pcs)", weight: "120 g", price: "150", time: "16 mins", cancelPrice: "180" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Breads & Bakery</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {breads.map((item) => (
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

export default BreadCategory;