import React from 'react';
import Sidebar from "../../Components/Sidebar";
import Navbar from '../../Components/Navbar';
import Egg1 from "../../assets/eggs/e1.avif";
import Egg2 from "../../assets/eggs/e2.avif";
import Egg3 from "../../assets/eggs/e3.avif";
import Egg4 from "../../assets/eggs/e4.avif";
import Egg5 from "../../assets/eggs/e5.avif";
import Egg6 from "../../assets/eggs/e6.avif";
import Egg7 from "../../assets/eggs/egg7.avif";
import Egg8 from "../../assets/eggs/egg8.avif";
import Egg9 from "../../assets/eggs/egg9.avif";
import Egg10 from "../../assets/eggs/egg10.avif";
import Egg11 from "../../assets/eggs/egg11.avif";
import Egg12 from "../../assets/eggs/egg12.avif";
import Egg13 from "../../assets/eggs/egg13.avif";
import Egg14 from "../../assets/eggs/egg14.avif";
import Egg15 from "../../assets/eggs/egg15.avif";
import Egg16 from "../../assets/eggs/egg16.avif";
import Egg17 from "../../assets/eggs/egg17.avif";
import Egg18 from "../../assets/eggs/egg18.avif";
import Egg19 from "../../assets/eggs/egg19.avif";
import Egg20 from "../../assets/eggs/egg20.avif";
import Egg21 from "../../assets/eggs/egg21.avif";
import Egg22 from "../../assets/eggs/egg22.avif";
import Egg23 from "../../assets/eggs/egg23.avif";
import Egg24 from "../../assets/eggs/egg24.avif";
import Egg25 from "../../assets/eggs/egg25.avif";
import Egg26 from "../../assets/eggs/egg26.avif";
import Egg27 from "../../assets/eggs/egg27.avif";
import Egg28 from "../../assets/eggs/egg28.avif";
import Egg29 from "../../assets/eggs/egg29.avif";
import Egg30 from "../../assets/eggs/egg30.avif";
import Egg31 from "../../assets/eggs/egg31.avif";
import Egg32 from "../../assets/eggs/egg32.avif";
import Egg33 from "../../assets/eggs/egg33.avif";
import Egg34 from "../../assets/eggs/egg34.avif";
import Egg35 from "../../assets/eggs/egg35.avif";
import Egg36 from "../../assets/eggs/egg36.avif";

const EggCategory = () => {
  const eggItems = [
    { id: 1, img: Egg1, title: "Eggoz Nutrition White Protein Rich Eggs", pieces: "30 pcs", price: "369", cancelPrice: "429", time: "16 mins" },
    { id: 2, img: Egg2, title: "Table White White Eggs", pieces: "10 pcs", price: "90", cancelPrice: "140", time: "16 mins" },
    { id: 3, img: Egg3, title: "Licious Farm Fresh Classic White Protein", pieces: "6 pcs", price: "84", time: "16 mins" },
    { id: 4, img: Egg4, title: "Organic India Free Range Brown Eggs", pieces: "12 pcs", price: "150", cancelPrice: "180", time: "16 mins" },
    { id: 5, img: Egg5, title: "Henfruit Gold Eggs (Pack of 6)", pieces: "6 pcs", price: "75", time: "16 mins" },
    { id: 6, img: Egg6, title: "Happy Hens Farm Fresh Eggs", pieces: "30 pcs", price: "320", cancelPrice: "360", time: "16 mins" },
    { id: 7, img: Egg7, title: "Kegg Omega-3 Enriched Eggs", pieces: "6 pcs", price: "95", time: "16 mins" },
    { id: 8, img: Egg8, title: "Eggoz Brown Protein Rich Eggs", pieces: "30 pcs", price: "399", cancelPrice: "450", time: "16 mins" },
    { id: 9, img: Egg9, title: "Country Delight Farm Fresh Eggs", pieces: "12 pcs", price: "130", time: "16 mins" },
    { id: 10, img: Egg10, title: "Nutralife White Eggs", pieces: "10 pcs", price: "85", cancelPrice: "100", time: "16 mins" },
    { id: 11, img: Egg11, title: "Organic Mandya Brown Eggs", pieces: "6 pcs", price: "110", time: "16 mins" },
    { id: 12, img: Egg12, title: "Vital Farms Pasture-Raised Eggs", pieces: "12 pcs", price: "280", cancelPrice: "320", time: "16 mins" },
    { id: 13, img: Egg13, title: "Eggoz Nutrition White (12 pcs)", pieces: "12 pcs", price: "159", cancelPrice: "189", time: "16 mins" },
    { id: 14, img: Egg14, title: "FreshToHome Table Eggs", pieces: "10 pcs", price: "95", time: "16 mins" },
    { id: 15, img: Egg15, title: "Happy Hens White Eggs (12 pcs)", pieces: "12 pcs", price: "140", cancelPrice: "160", time: "16 mins" },
    { id: 16, img: Egg16, title: "Licious Brown Eggs (12 pcs)", pieces: "12 pcs", price: "155", time: "16 mins" },
    { id: 17, img: Egg17, title: "Eggoz Nutrition Cage Free Eggs", pieces: "30 pcs", price: "375", cancelPrice: "420", time: "16 mins" },
    { id: 18, img: Egg18, title: "Country Delight Brown Eggs", pieces: "6 pcs", price: "70", time: "16 mins" },
    { id: 19, img: Egg19, title: "Kegg White Eggs (30 pcs)", pieces: "30 pcs", price: "340", cancelPrice: "380", time: "16 mins" },
    { id: 20, img: Egg20, title: "Organic India White Eggs", pieces: "12 pcs", price: "145", time: "16 mins" },
    { id: 21, img: Egg21, title: "Henfruit Gold Omega-3 Eggs", pieces: "6 pcs", price: "99", cancelPrice: "120", time: "16 mins" },
    { id: 22, img: Egg22, title: "Farmez Free Range Egg Tray", pieces: "15 pcs", price: "175", time: "16 mins" },
    { id: 23, img: Egg23, title: "Eggoz Nutrition Brown (6 pcs)", pieces: "6 pcs", price: "85", cancelPrice: "99", time: "16 mins" },
    { id: 24, img: Egg24, title: "Licious Classic White Eggs (30 pcs)", pieces: "30 pcs", price: "360", time: "16 mins" },
    { id: 25, img: Egg25, title: "Happy Hens Organic Eggs", pieces: "10 pcs", price: "125", cancelPrice: "150", time: "16 mins" },
    { id: 26, img: Egg26, title: "Kegg Brown Eggs (12 pcs)", pieces: "12 pcs", price: "135", time: "16 mins" },
    { id: 27, img: Egg27, title: "Country Delight White Eggs (30 pcs)", pieces: "30 pcs", price: "345", cancelPrice: "390", time: "16 mins" },
    { id: 28, img: Egg28, title: "FreshToHome Brown Eggs", pieces: "10 pcs", price: "105", time: "16 mins" },
    { id: 29, img: Egg29, title: "Nutralife Brown Eggs (6 pcs)", pieces: "6 pcs", price: "65", cancelPrice: "75", time: "16 mins" },
    { id: 30, img: Egg30, title: "Eggoz Nutrition White (6 pcs)", pieces: "6 pcs", price: "79", time: "16 mins" },
    { id: 31, img: Egg31, title: "Organic Mandya White Eggs (12 pcs)", pieces: "12 pcs", price: "140", cancelPrice: "160", time: "16 mins" },
    { id: 32, img: Egg32, title: "Vital Farms Organic Eggs", pieces: "12 pcs", price: "320", cancelPrice: "360", time: "16 mins" },
    { id: 33, img: Egg33, title: "Happy Hens Brown Omega-3 Eggs", pieces: "6 pcs", price: "89", time: "16 mins" },
    { id: 34, img: Egg34, title: "Licious Cage Free Brown Eggs", pieces: "30 pcs", price: "390", cancelPrice: "440", time: "16 mins" },
    { id: 35, img: Egg35, title: "Farmez Desi Eggs (6 pcs)", pieces: "6 pcs", price: "110", time: "16 mins" },
    { id: 36, img: Egg36, title: "Kegg White Eggs (6 pcs)", pieces: "6 pcs", price: "69", cancelPrice: "80", time: "16 mins" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Eggs & Dairy</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {eggItems.map((item) => (
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
                <p className="text-xs text-gray-500 mt-1">{item.pieces}</p>
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

export default EggCategory;