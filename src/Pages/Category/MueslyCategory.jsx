import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import M1 from "../../assets/muesli/m1.avif";
import M2 from "../../assets/muesli/m2.avif";
import M3 from "../../assets/muesli/m3.avif";
import M4 from "../../assets/muesli/m4.avif";
import M5 from "../../assets/muesli/m5.avif";
import M6 from "../../assets/muesli/m6.avif";
import M7 from "../../assets/muesli/m7.avif";
import M8 from "../../assets/muesli/m8.avif";
import M9 from "../../assets/muesli/m9.avif";
import M10 from "../../assets/muesli/m10.avif";
import M11 from "../../assets/muesli/m11.avif";
import M12 from "../../assets/muesli/m12.avif";
import M13 from "../../assets/muesli/m13.avif";
import M14 from "../../assets/muesli/m14.avif";
import M15 from "../../assets/muesli/m15.avif";
import M16 from "../../assets/muesli/m16.avif";
import M17 from "../../assets/muesli/m17.avif";
import M18 from "../../assets/muesli/m18.avif";
import M19 from "../../assets/muesli/m19.avif";
import M20 from "../../assets/muesli/m20.avif";
import M21 from "../../assets/muesli/m21.avif";
import M22 from "../../assets/muesli/m22.avif";
import M23 from "../../assets/muesli/m23.avif";
import M24 from "../../assets/muesli/m24.avif";
import M25 from "../../assets/muesli/m25.avif";
import M26 from "../../assets/muesli/m26.avif";
import M27 from "../../assets/muesli/m27.avif";
import M28 from "../../assets/muesli/m28.avif";
import M29 from "../../assets/muesli/m29.avif";
import M30 from "../../assets/muesli/m30.avif";
import M31 from "../../assets/muesli/m31.avif";
import M32 from "../../assets/muesli/m32.avif";
import M33 from "../../assets/muesli/m33.avif";
import M34 from "../../assets/muesli/m34.avif";
import M35 from "../../assets/muesli/m35.avif";
import M36 from "../../assets/muesli/m36.avif";
import M37 from "../../assets/muesli/m37.avif";
import M38 from "../../assets/muesli/m38.avif";
import M39 from "../../assets/muesli/m39.avif";
import M40 from "../../assets/muesli/m40.avif";
import M41 from "../../assets/muesli/m41.avif";
import M42 from "../../assets/muesli/m42.avif";
import M43 from "../../assets/muesli/m43.avif";
import M44 from "../../assets/muesli/m44.avif";
import M45 from "../../assets/muesli/m45.avif";
import M46 from "../../assets/muesli/m46.avif";
import M47 from "../../assets/muesli/m47.avif";
import M48 from "../../assets/muesli/m48.avif";

const MueslyCategory = () => {
  // Full 48 products – one per image
  const muesliCategory = [
    { id: 1, img: M1, title: "Kellogg's 0% Added Sugar Muesli", time: "9mins", weight: "500g", price: "263", cancelPrice: "370" },
    { id: 2, img: M2, title: "Kellogg's Muesli Fruit, Nut & Seeds", time: "9mins", weight: "240g", price: "173", cancelPrice: "185" },
    { id: 3, img: M3, title: "Kellogg's Muesli Fruit Nut & Seeds (Family Pack)", time: "9mins", weight: "750g", price: "365", cancelPrice: "489" },
    { id: 4, img: M4, title: "Pintola High Protein Muesli with Dark Chocolate", time: "9mins", weight: "400g", price: "299", cancelPrice: "325" },
    { id: 5, img: M5, title: "Kellogg's Millet Muesli (84% Fruit & Seeds)", time: "9mins", weight: "1kg", price: "345", cancelPrice: "690" },
    { id: 6, img: M6, title: "Kellogg's Crunchy Almond Berry Crumble", time: "9mins", weight: "140g", price: "95" },
    { id: 7, img: M7, title: "Kellogg's Fruit, Nut & Seeds Muesli (Pouch)", time: "9mins", weight: "72g", price: "57" },
    { id: 8, img: M8, title: "Kellogg's Millet Breakfast Cereal Muesli", time: "9mins", weight: "500g", price: "187", cancelPrice: "370" },
    { id: 9, img: M9, title: "Kellogg's Nuts & Seeds Crunch Muesli", time: "9mins", weight: "950g", price: "480", cancelPrice: "740" },
    { id: 10, img: M10, title: "Kellogg's Crunchy Almond Berry Crumble (Large)", time: "9mins", weight: "950g", price: "480", cancelPrice: "740" },
    { id: 11, img: M11, title: "True Elements Wholegrain Premium Muesli", time: "9mins", weight: "1kg", price: "269", cancelPrice: "650" },
    { id: 12, img: M12, title: "Yoga Bar Dark Chocolate Muesli", time: "9mins", weight: "700g", price: "340", cancelPrice: "445" },
    { id: 13, img: M13, title: "True Elements Fruits, Nuts & Seeds Muesli", time: "9mins", weight: "1kg", price: "263", cancelPrice: "370" },
    { id: 14, img: M14, title: "Kellogg's Chocolate Muesli", time: "9mins", weight: "450g", price: "355", cancelPrice: "375" },
    { id: 15, img: M15, title: "Elevate Apple & Cinnamon Granola", time: "9mins", weight: "300g", price: "360", cancelPrice: "400" },
    { id: 16, img: M16, title: "Kwality 25g High Protein Muesli", time: "9mins", weight: "400g", price: "270", cancelPrice: "399" },
    { id: 17, img: M17, title: "Yoga Bar Fruits + Nuts & Seeds Muesli", time: "9mins", weight: "700g", price: "294", cancelPrice: "445" },
    { id: 18, img: M18, title: "Yoga Bar High Protein Muesli (Choco Almond)", time: "9mins", weight: "850g", price: "396", cancelPrice: "535" },
    { id: 19, img: M19, title: "Bagrry Healthy Crunch Nutty Fruity Muesli", time: "9mins", weight: "1kg", price: "436", cancelPrice: "640" },
    { id: 20, img: M20, title: "Bagrry Belgian Dark Chocolate & Almonds Muesli", time: "9mins", weight: "400g", price: "380" },
    { id: 21, img: M21, title: "Kellogg's Crunchy Muesli Granola Cereal", time: "9mins", weight: "450g", price: "380" },
    { id: 22, img: M22, title: "Yoga Bar 0% Added Sugar Super Muesli", time: "9mins", weight: "400g", price: "235", cancelPrice: "350" },
    { id: 23, img: M23, title: "Yoga Bar Dark Chocolate + Cranberry Muesli", time: "9mins", weight: "160g", price: "99" },
    { id: 24, img: M24, title: "The Whole Truth Muesli (No Added Sugar)", time: "9mins", weight: "400g", price: "349", cancelPrice: "450" },
    { id: 25, img: M25, title: "Yoga Bar High Protein Muesli (Choco Almond) – 350g", time: "9mins", weight: "350g", price: "261", cancelPrice: "350" },
    { id: 26, img: M26, title: "Kellogg's All-Bran Multigrain Flakes", time: "9mins", weight: "375g", price: "165", cancelPrice: "190" },
    { id: 27, img: M27, title: "Bagrry's Crunchy Oats & Berries Muesli", time: "9mins", weight: "500g", price: "290", cancelPrice: "350" },
    { id: 28, img: M28, title: "True Elements Gluten-Free Muesli", time: "9mins", weight: "400g", price: "279", cancelPrice: "320" },
    { id: 29, img: M29, title: "Pintola Crunchy Peanut Butter Muesli", time: "9mins", weight: "400g", price: "310", cancelPrice: "345" },
    { id: 30, img: M30, title: "Soulfull Millet Muesli (Mixed Berry)", time: "9mins", weight: "400g", price: "225", cancelPrice: "280" },
    { id: 31, img: M31, title: "Nourish Organics Fruit & Nut Muesli", time: "9mins", weight: "500g", price: "320", cancelPrice: "380" },
    { id: 32, img: M32, title: "Grenola Dark Chocolate & Coconut Granola", time: "9mins", weight: "300g", price: "245", cancelPrice: "295" },
    { id: 33, img: M33, title: "The Muesli Company Apple & Cinnamon", time: "9mins", weight: "500g", price: "275", cancelPrice: "330" },
    { id: 34, img: M34, title: "Healthy Master Low Sugar Muesli", time: "9mins", weight: "400g", price: "199", cancelPrice: "250" },
    { id: 35, img: M35, title: "Kellogg's Crunchy Honey & Nut Muesli", time: "9mins", weight: "450g", price: "275", cancelPrice: "310" },
    { id: 36, img: M36, title: "Bagrry's Belgian Chocolate & Cranberry", time: "9mins", weight: "400g", price: "350", cancelPrice: "420" },
    { id: 37, img: M37, title: "Ecotastic Raw Muesli Tropical", time: "9mins", weight: "300g", price: "299", cancelPrice: "360" },
    { id: 38, img: M38, title: "True Elements Coconut & Chia Muesli", time: "9mins", weight: "400g", price: "250", cancelPrice: "290" },
    { id: 39, img: M39, title: "Yoga Bar Oats & Muesli Mix", time: "9mins", weight: "500g", price: "199", cancelPrice: "250" },
    { id: 40, img: M40, title: "Kellogg's Special K Muesli Strawberry", time: "9mins", weight: "375g", price: "245", cancelPrice: "285" },
    { id: 41, img: M41, title: "Bagrry's Protein Plus Muesli", time: "9mins", weight: "500g", price: "399", cancelPrice: "480" },
    { id: 42, img: M42, title: "Pintola Probiotic Muesli", time: "9mins", weight: "400g", price: "325", cancelPrice: "375" },
    { id: 43, img: M43, title: "Nature Valley Muesli with Greek Yogurt", time: "9mins", weight: "340g", price: "285", cancelPrice: "330" },
    { id: 44, img: M44, title: "Kellogg's K Muesli Blueberry", time: "9mins", weight: "375g", price: "260", cancelPrice: "300" },
    { id: 45, img: M45, title: "True Elements Quinoa & Amaranth Muesli", time: "9mins", weight: "400g", price: "300", cancelPrice: "360" },
    { id: 46, img: M46, title: "Yoga Bar Dark Chocolate Sea Salt Granola", time: "9mins", weight: "350g", price: "280", cancelPrice: "340" },
    { id: 47, img: M47, title: "Bagrry's Cranberry & Pumpkin Seeds Muesli", time: "9mins", weight: "500g", price: "320", cancelPrice: "390" },
    { id: 48, img: M48, title: "Soulfull Ragi & Jowar Muesli", time: "9mins", weight: "400g", price: "210", cancelPrice: "260" },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-20 px-4 sm:px-8 py-4 pb-20 md:pb-4">
        <h2 className="text-xs font-bold cursor-pointer mb-4">Muesli & Granola</h2>
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {muesliCategory.map((item) => (
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

export default MueslyCategory;