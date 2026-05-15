import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import O1 from "../../assets/oats/o1.avif";
import O2 from "../../assets/oats/o2.avif";
import O3 from "../../assets/oats/o3.avif";
import O4 from "../../assets/oats/o4.avif";
import O5 from "../../assets/oats/o5.avif";
import O6 from "../../assets/oats/o6.avif";
import O7 from "../../assets/oats/o7.avif";
import O8 from "../../assets/oats/o8.avif";
import O9 from "../../assets/oats/o9.avif";
import O10 from "../../assets/oats/o10.avif";
import O11 from "../../assets/oats/o11.avif";
import O12 from "../../assets/oats/o12.avif";
import O13 from "../../assets/oats/o13.avif";
import O14 from "../../assets/oats/o14.avif";
import O15 from "../../assets/oats/o15.avif";
import O16 from "../../assets/oats/o16.avif";
import O17 from "../../assets/oats/o17.avif";
import O18 from "../../assets/oats/o18.avif";
import O19 from "../../assets/oats/o19.avif";
import O20 from "../../assets/oats/o20.avif";
import O21 from "../../assets/oats/o21.avif";
import O22 from "../../assets/oats/o22.avif";
import O23 from "../../assets/oats/o23.avif";
import O24 from "../../assets/oats/o24.avif";
import O25 from "../../assets/oats/o25.avif";
import O26 from "../../assets/oats/o26.avif";
import O27 from "../../assets/oats/o27.avif";
import O28 from "../../assets/oats/o28.avif";
import O29 from "../../assets/oats/o29.avif";
import O30 from "../../assets/oats/o30.avif";
import O31 from "../../assets/oats/o31.avif";
import O32 from "../../assets/oats/o32.avif";
import O33 from "../../assets/oats/o33.avif";
import O34 from "../../assets/oats/o34.avif";
import O35 from "../../assets/oats/o35.avif";
import O36 from "../../assets/oats/o36.avif";
import O37 from "../../assets/oats/o37.avif";
import O38 from "../../assets/oats/o38.avif";
import O39 from "../../assets/oats/o39.avif";
import O40 from "../../assets/oats/o40.avif";
import O41 from "../../assets/oats/o41.avif";
import O42 from "../../assets/oats/o42.avif";
import O43 from "../../assets/oats/o43.avif";
import O44 from "../../assets/oats/o44.avif";
import O45 from "../../assets/oats/o45.avif";
import O46 from "../../assets/oats/o46.avif";
import O47 from "../../assets/oats/o47.avif";
import O48 from "../../assets/oats/o48.avif";
import O49 from "../../assets/oats/o49.avif";
import O50 from "../../assets/oats/o50.avif";
import O51 from "../../assets/oats/o51.avif";
import O52 from "../../assets/oats/o52.avif";
import O53 from "../../assets/oats/o53.avif";
import O54 from "../../assets/oats/o54.avif";

const OatsCategory = () => {
  const oatsProducts = [
    { id: 1, img: O1, title: "Quaker Oats (Rolled)", weight: "500g", price: "110", cancelPrice: "135", time: "9mins" },
    { id: 2, img: O2, title: "Saffola Oats (Masala)", weight: "400g", price: "145", cancelPrice: "165", time: "9mins" },
    { id: 3, img: O3, title: "Kellogg's Oats & More (Almonds)", weight: "375g", price: "190", cancelPrice: "220", time: "9mins" },
    { id: 4, img: O4, title: "Bagrry's Rolled Oats", weight: "1kg", price: "149", cancelPrice: "189", time: "9mins" },
    { id: 5, img: O5, title: "True Elements Steel Cut Oats", weight: "500g", price: "160", cancelPrice: "195", time: "9mins" },
    { id: 6, img: O6, title: "Quaker Oats (Instant) – 1kg", weight: "1kg", price: "199", cancelPrice: "240", time: "9mins" },
    { id: 7, img: O7, title: "Saffola Oats (Plain)", weight: "500g", price: "165", cancelPrice: "190", time: "9mins" },
    { id: 8, img: O8, title: "Kellogg's Oats & Honey", weight: "450g", price: "210", cancelPrice: "245", time: "9mins" },
    { id: 9, img: O9, title: "Bagrry's Oats (High Fibre)", weight: "500g", price: "125", cancelPrice: "150", time: "9mins" },
    { id: 10, img: O10, title: "True Elements Gluten-Free Oats", weight: "500g", price: "179", cancelPrice: "220", time: "9mins" },
    { id: 11, img: O11, title: "Quaker Oats (Instant) – 500g", weight: "500g", price: "115", cancelPrice: "140", time: "9mins" },
    { id: 12, img: O12, title: "Saffola Oats (Desi Masala)", weight: "500g", price: "175", cancelPrice: "210", time: "9mins" },
    { id: 13, img: O13, title: "Kellogg's Oats & Fruits", weight: "375g", price: "195", cancelPrice: "230", time: "9mins" },
    { id: 14, img: O14, title: "Bagrry's Organic Oats", weight: "500g", price: "165", cancelPrice: "200", time: "9mins" },
    { id: 15, img: O15, title: "True Elements Oat Bran", weight: "300g", price: "149", cancelPrice: "180", time: "9mins" },
    { id: 16, img: O16, title: "Quaker Oats (Steel Cut)", weight: "700g", price: "220", cancelPrice: "260", time: "9mins" },
    { id: 17, img: O17, title: "Saffola Oats (Classic)", weight: "1kg", price: "299", cancelPrice: "350", time: "9mins" },
    { id: 18, img: O18, title: "Kellogg's Oats & Almond", weight: "450g", price: "205", cancelPrice: "240", time: "9mins" },
    { id: 19, img: O19, title: "Bagrry's Quick Cooking Oats", weight: "500g", price: "120", cancelPrice: "145", time: "9mins" },
    { id: 20, img: O20, title: "True Elements Rolled Oats (Jumbo)", weight: "1kg", price: "185", cancelPrice: "230", time: "9mins" },
    { id: 21, img: O21, title: "Quaker Oats (Apple & Cinnamon)", weight: "400g", price: "155", cancelPrice: "185", time: "9mins" },
    { id: 22, img: O22, title: "Saffola Oats (Lemon & Herb)", weight: "500g", price: "170", cancelPrice: "200", time: "9mins" },
    { id: 23, img: O23, title: "Kellogg's Oats & Strawberry", weight: "375g", price: "200", cancelPrice: "235", time: "9mins" },
    { id: 24, img: O24, title: "Bagrry's Oats with Chia Seeds", weight: "500g", price: "190", cancelPrice: "230", time: "9mins" },
    { id: 25, img: O25, title: "True Elements Instant Oats (Masala)", weight: "350g", price: "125", cancelPrice: "155", time: "9mins" },
    { id: 26, img: O26, title: "Quaker Oats (Maple & Brown Sugar)", weight: "400g", price: "160", cancelPrice: "195", time: "9mins" },
    { id: 27, img: O27, title: "Saffola Oats (Tadka)", weight: "400g", price: "155", cancelPrice: "185", time: "9mins" },
    { id: 28, img: O28, title: "Kellogg's Oats & Nuts Delight", weight: "450g", price: "225", cancelPrice: "265", time: "9mins" },
    { id: 29, img: O29, title: "Bagrry's Oats with Muesli Mix", weight: "500g", price: "210", cancelPrice: "250", time: "9mins" },
    { id: 30, img: O30, title: "True Elements Organic Oats", weight: "500g", price: "199", cancelPrice: "245", time: "9mins" },
    { id: 31, img: O31, title: "Quaker Oats (Blueberry)", weight: "400g", price: "165", cancelPrice: "200", time: "9mins" },
    { id: 32, img: O32, title: "Saffola Oats (Italian Tomato)", weight: "500g", price: "180", cancelPrice: "215", time: "9mins" },
    { id: 33, img: O33, title: "Kellogg's Oats & Dates", weight: "375g", price: "195", cancelPrice: "230", time: "9mins" },
    { id: 34, img: O34, title: "Bagrry's Protein Oats", weight: "400g", price: "220", cancelPrice: "270", time: "9mins" },
    { id: 35, img: O35, title: "True Elements Oats + Quinoa", weight: "400g", price: "210", cancelPrice: "260", time: "9mins" },
    { id: 36, img: O36, title: "Quaker Oats (Original) – 2kg", weight: "2kg", price: "349", cancelPrice: "420", time: "9mins" },
    { id: 37, img: O37, title: "Saffola Oats (Super Grains)", weight: "500g", price: "195", cancelPrice: "235", time: "9mins" },
    { id: 38, img: O38, title: "Kellogg's Oats & Caramel", weight: "375g", price: "210", cancelPrice: "245", time: "9mins" },
    { id: 39, img: O39, title: "Bagrry's Multigrain Oats", weight: "500g", price: "175", cancelPrice: "215", time: "9mins" },
    { id: 40, img: O40, title: "True Elements Oats (Masala)", weight: "350g", price: "135", cancelPrice: "165", time: "9mins" },
    { id: 41, img: O41, title: "Quaker Oats (Cream of Oats)", weight: "400g", price: "145", cancelPrice: "175", time: "9mins" },
    { id: 42, img: O42, title: "Saffola Oats (Pudina)", weight: "500g", price: "170", cancelPrice: "205", time: "9mins" },
    { id: 43, img: O43, title: "Kellogg's Oats & Berry Burst", weight: "375g", price: "200", cancelPrice: "240", time: "9mins" },
    { id: 44, img: O44, title: "Bagrry's Oats with Flax Seeds", weight: "500g", price: "185", cancelPrice: "225", time: "9mins" },
    { id: 45, img: O45, title: "True Elements Quick Rolled Oats", weight: "500g", price: "140", cancelPrice: "170", time: "9mins" },
    { id: 46, img: O46, title: "Quaker Oats (Cinnamon Roll)", weight: "400g", price: "170", cancelPrice: "210", time: "9mins" },
    { id: 47, img: O47, title: "Saffola Oats (Mexican Fiesta)", weight: "500g", price: "185", cancelPrice: "225", time: "9mins" },
    { id: 48, img: O48, title: "Kellogg's Oats & Peanut Butter", weight: "450g", price: "230", cancelPrice: "280", time: "9mins" },
    { id: 49, img: O49, title: "Bagrry's Oats with Pumpkin Seeds", weight: "500g", price: "195", cancelPrice: "240", time: "9mins" },
    { id: 50, img: O50, title: "True Elements Ragi Oats Mix", weight: "400g", price: "165", cancelPrice: "200", time: "9mins" },
    { id: 51, img: O51, title: "Quaker Oats (Apple Cinnamon) – Large", weight: "600g", price: "230", cancelPrice: "280", time: "9mins" },
    { id: 52, img: O52, title: "Saffola Oats (Chatpata)", weight: "500g", price: "175", cancelPrice: "215", time: "9mins" },
    { id: 53, img: O53, title: "Kellogg's Oats & Coconut", weight: "375g", price: "195", cancelPrice: "235", time: "9mins" },
    { id: 54, img: O54, title: "Bagrry's Oats with Sunflower Seeds", weight: "500g", price: "190", cancelPrice: "230", time: "9mins" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Oats & Breakfast Cereals</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {oatsProducts.map((item) => (
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

export default OatsCategory;