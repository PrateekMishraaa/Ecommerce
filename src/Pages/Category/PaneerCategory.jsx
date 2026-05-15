import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import P1 from "../../assets/paneer/p1.avif";
import P2 from "../../assets/paneer/p2.avif";
import P3 from "../../assets/paneer/p3.avif";
import P4 from "../../assets/paneer/p4.avif";
import P5 from "../../assets/paneer/p5.avif";
import P6 from "../../assets/paneer/p6.avif";
import P7 from "../../assets/paneer/p7.avif";
import P8 from "../../assets/paneer/p8.avif";
import P9 from "../../assets/paneer/p9.avif";
import P10 from "../../assets/paneer/p10.avif";
import P11 from "../../assets/paneer/p11.avif";
import P12 from "../../assets/paneer/p12.avif";
import P13 from "../../assets/paneer/p13.avif";
import P14 from "../../assets/paneer/p14.avif";
import P15 from "../../assets/paneer/p15.avif";
import P16 from "../../assets/paneer/p16.avif";
import P17 from "../../assets/paneer/p17.avif";
import P18 from "../../assets/paneer/p18.avif";
import P19 from "../../assets/paneer/p19.avif";
import P20 from "../../assets/paneer/p20.avif";
import P21 from "../../assets/paneer/p21.avif";
import P22 from "../../assets/paneer/p22.avif";
import P23 from "../../assets/paneer/p23.avif";
import P24 from "../../assets/paneer/p24.avif";
import P25 from "../../assets/paneer/p25.avif";
import P26 from "../../assets/paneer/p26.avif";
import P27 from "../../assets/paneer/p27.avif";
import P28 from "../../assets/paneer/p28.avif";
import P29 from "../../assets/paneer/p29.avif";
import P30 from "../../assets/paneer/p30.avif";
import P31 from "../../assets/paneer/p31.avif";
import P32 from "../../assets/paneer/p32.avif";
import P33 from "../../assets/paneer/p33.avif";
import P34 from "../../assets/paneer/p34.avif";
import P35 from "../../assets/paneer/p35.avif";
import P36 from "../../assets/paneer/p36.avif";
import P37 from "../../assets/paneer/p37.avif";
import P38 from "../../assets/paneer/p38.avif";
import P39 from "../../assets/paneer/p39.avif";
import P40 from "../../assets/paneer/p40.avif";
import P41 from "../../assets/paneer/p41.avif";
import P42 from "../../assets/paneer/p42.avif";
import P43 from "../../assets/paneer/p43.avif";

const PaneerCategory = () => {
  const paneerProducts = [
    { id: 1, img: P1, title: "Amul Fresh Paneer", weight: "200g", price: "69", cancelPrice: "80", time: "16 mins" },
    { id: 2, img: P2, title: "Mother Dairy Fresh Paneer", weight: "200g", price: "65", cancelPrice: "75", time: "16 mins" },
    { id: 3, img: P3, title: "Milky Mist Paneer (Soft)", weight: "200g", price: "59", cancelPrice: "70", time: "16 mins" },
    { id: 4, img: P4, title: "Verka Malai Paneer", weight: "200g", price: "63", cancelPrice: "72", time: "16 mins" },
    { id: 5, img: P5, title: "Gowardhan Fresh Paneer", weight: "200g", price: "67", cancelPrice: "78", time: "16 mins" },
    { id: 6, img: P6, title: "Amul Malai Paneer (400g)", weight: "400g", price: "129", cancelPrice: "150", time: "16 mins" },
    { id: 7, img: P7, title: "Mother Dairy Paneer (400g)", weight: "400g", price: "125", cancelPrice: "145", time: "16 mins" },
    { id: 8, img: P8, title: "Milky Mist Paneer (400g)", weight: "400g", price: "115", cancelPrice: "135", time: "16 mins" },
    { id: 9, img: P9, title: "Verka Paneer (400g)", weight: "400g", price: "120", cancelPrice: "140", time: "16 mins" },
    { id: 10, img: P10, title: "Gowardhan Paneer (400g)", weight: "400g", price: "130", cancelPrice: "150", time: "16 mins" },
    { id: 11, img: P11, title: "Amul Fresh Paneer (1kg)", weight: "1kg", price: "299", cancelPrice: "350", time: "16 mins" },
    { id: 12, img: P12, title: "Mother Dairy Paneer (1kg)", weight: "1kg", price: "290", cancelPrice: "340", time: "16 mins" },
    { id: 13, img: P13, title: "Milky Mist Paneer (1kg)", weight: "1kg", price: "275", cancelPrice: "325", time: "16 mins" },
    { id: 14, img: P14, title: "Verka Paneer (1kg)", weight: "1kg", price: "285", cancelPrice: "330", time: "16 mins" },
    { id: 15, img: P15, title: "Gowardhan Paneer (1kg)", weight: "1kg", price: "295", cancelPrice: "345", time: "16 mins" },
    { id: 16, img: P16, title: "Amul Tofu Paneer (Plant-Based)", weight: "200g", price: "99", cancelPrice: "120", time: "16 mins" },
    { id: 17, img: P17, title: "Mother Dairy Tofu", weight: "200g", price: "95", time: "16 mins" },
    { id: 18, img: P18, title: "Milky Mist Low-Fat Paneer", weight: "200g", price: "69", cancelPrice: "80", time: "16 mins" },
    { id: 19, img: P19, title: "Haldiram's Paneer (Frozen)", weight: "500g", price: "149", cancelPrice: "180", time: "16 mins" },
    { id: 20, img: P20, title: "Gourmet Paneer by Licious", weight: "200g", price: "75", cancelPrice: "90", time: "16 mins" },
    { id: 21, img: P21, title: "Amul Paneer Cubes (Ready to Cook)", weight: "200g", price: "71", cancelPrice: "82", time: "16 mins" },
    { id: 22, img: P22, title: "Mother Dairy Paneer Cubes", weight: "200g", price: "68", cancelPrice: "78", time: "16 mins" },
    { id: 23, img: P23, title: "Milky Mist Paneer Cubes", weight: "200g", price: "62", cancelPrice: "72", time: "16 mins" },
    { id: 24, img: P24, title: "Verka Paneer Cubes", weight: "200g", price: "66", cancelPrice: "76", time: "16 mins" },
    { id: 25, img: P25, title: "Gowardhan Paneer Cubes", weight: "200g", price: "70", cancelPrice: "80", time: "16 mins" },
    { id: 26, img: P26, title: "Amul Organic Paneer", weight: "200g", price: "85", cancelPrice: "100", time: "16 mins" },
    { id: 27, img: P27, title: "Mother Dairy Organic Paneer", weight: "200g", price: "80", cancelPrice: "95", time: "16 mins" },
    { id: 28, img: P28, title: "Milky Mist Organic Paneer", weight: "200g", price: "75", cancelPrice: "90", time: "16 mins" },
    { id: 29, img: P29, title: "Verka Organic Paneer", weight: "200g", price: "78", cancelPrice: "92", time: "16 mins" },
    { id: 30, img: P30, title: "Gowardhan Organic Paneer", weight: "200g", price: "82", cancelPrice: "97", time: "16 mins" },
    { id: 31, img: P31, title: "Amul Shredded Paneer", weight: "150g", price: "79", cancelPrice: "90", time: "16 mins" },
    { id: 32, img: P32, title: "Mother Dairy Shredded Paneer", weight: "150g", price: "75", cancelPrice: "85", time: "16 mins" },
    { id: 33, img: P33, title: "Milky Mist Shredded Paneer", weight: "150g", price: "70", cancelPrice: "80", time: "16 mins" },
    { id: 34, img: P34, title: "Amul Paneer (Pickle Masala)", weight: "200g", price: "79", cancelPrice: "95", time: "16 mins" },
    { id: 35, img: P35, title: "Mother Dairy Tandoori Paneer", weight: "200g", price: "89", cancelPrice: "105", time: "16 mins" },
    { id: 36, img: P36, title: "Milky Mist Chilli Paneer", weight: "200g", price: "85", cancelPrice: "99", time: "16 mins" },
    { id: 37, img: P37, title: "Verka Smoked Paneer", weight: "200g", price: "90", cancelPrice: "108", time: "16 mins" },
    { id: 38, img: P38, title: "Gowardhan Malai Paneer (Thick)", weight: "200g", price: "73", cancelPrice: "85", time: "16 mins" },
    { id: 39, img: P39, title: "Amul Protein Paneer", weight: "200g", price: "95", cancelPrice: "115", time: "16 mins" },
    { id: 40, img: P40, title: "Mother Dairy Protein Paneer", weight: "200g", price: "92", cancelPrice: "110", time: "16 mins" },
    { id: 41, img: P41, title: "Milky Mist High-Protein Paneer", weight: "200g", price: "88", cancelPrice: "105", time: "16 mins" },
    { id: 42, img: P42, title: "FreshHome Paneer (Farm Fresh)", weight: "500g", price: "165", cancelPrice: "195", time: "16 mins" },
    { id: 43, img: P43, title: "Paneer Malai Tikka (Marinated)", weight: "250g", price: "110", cancelPrice: "135", time: "16 mins" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Paneer & Dairy Delights</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {paneerProducts.map((item) => (
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

export default PaneerCategory;