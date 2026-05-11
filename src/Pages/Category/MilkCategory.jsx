import React from 'react';
import M1 from '../../assets/milkproducts/milk1.avif';
import M2 from '../../assets/milkproducts/milk2.avif';
import M3 from '../../assets/milkproducts/milk3.avif';
import M4 from '../../assets/milkproducts/milk4.avif';
import M5 from '../../assets/milkproducts/milk5.avif';
import M6 from '../../assets/milkproducts/milk6.avif';
import M7 from '../../assets/milkproducts/milk7.avif';
import M8 from '../../assets/milkproducts/milk8.avif';
import M9 from '../../assets/milkproducts/milk9.avif';
import M10 from '../../assets/milkproducts/milk10.avif';
import M11 from '../../assets/milkproducts/milk11.avif';
import M12 from '../../assets/milkproducts/milk12.avif';
import M13 from '../../assets/milkproducts/milk13.avif';
import M14 from '../../assets/milkproducts/milk14.avif';
import M15 from '../../assets/milkproducts/milk15.avif';
import M16 from '../../assets/milkproducts/milk16.avif';
import M17 from '../../assets/milkproducts/milk17.avif';
import M18 from '../../assets/milkproducts/milk18.avif';
import M19 from '../../assets/milkproducts/milk19.avif';
import M20 from '../../assets/milkproducts/milk20.avif';
import M21 from '../../assets/milkproducts/milk21.avif';
import M22 from '../../assets/milkproducts/milk22.avif';
import M23 from '../../assets/milkproducts/milk23.avif';
import M24 from '../../assets/milkproducts/milk24.avif';
import M25 from '../../assets/milkproducts/milk25.avif';
import M26 from '../../assets/milkproducts/milk26.avif';
import M27 from '../../assets/milkproducts/milk27.avif';
import M28 from '../../assets/milkproducts/milk28.avif';
import M29 from '../../assets/milkproducts/milk29.avif';
import M30 from '../../assets/milkproducts/milk30.avif';
import M31 from '../../assets/milkproducts/milk31.avif';
import M32 from '../../assets/milkproducts/milk32.avif';
import M33 from '../../assets/milkproducts/milk33.avif';
import M34 from '../../assets/milkproducts/milk34.avif';
import M35 from '../../assets/milkproducts/milk35.avif';
import M36 from '../../assets/milkproducts/milk36.avif';
import M37 from '../../assets/milkproducts/milk37.avif';
import M38 from '../../assets/milkproducts/milk38.avif';
import M39 from '../../assets/milkproducts/milk39.avif';
import M40 from '../../assets/milkproducts/milk40.avif';


const MilkCategory = () => {
  const categories = [
    { id: 1, img: M1, time: '16 mins', title: 'Amul Taaza Toned Milk', litre: '500 ml', price: '29' },
    { id: 2, img: M2, time: '16 mins', title: 'Amul Gold Full Cream', litre: '500 ml', price: '35' },
    { id: 3, img: M3, time: '16 mins', title: 'Amul Taaza Homogenised Toned', litre: '1 litre', price: '77' },
    { id: 4, img: M4, time: '16 mins', title: 'Amul Lactose Free Milk', litre: '250 ml', price: '26' },
    { id: 5, img: M5, time: '16 mins', title: 'Mother Dairy Toned Milk', litre: '500 ml', price: '29' },
    { id: 6, img: M6, time: '16 mins', title: 'Amul Cow Milk', litre: '500 ml', price: '30' },
    { id: 7, img: M7, time: '16 mins', title: 'Amul Moti Toned Milk (90 Days Shelf Life)', litre: '450 ml', price: '33' },
    { id: 8, img: M8, time: '16 mins', title: 'Mother Dairy Full Cream Milk', litre: '500 ml', price: '35' },
    { id: 9, img: M9, time: '16 mins', title: 'Mother Dairy Cow Milk', litre: '500 ml', price: '30' },
    { id: 10, img: M10, time: '16 mins', title: 'Yakult Probiotic Drink', litre: '5 x 65 ml', price: '90' },
    { id: 11, img: M11, time: '16 mins', title: 'Amul Gold Milk', litre: '1 litre', price: '83' },
    { id: 12, img: M12, time: '16 mins', title: 'Country Delight Buffalo Fresh Milk', litre: '450 ml', price: '54', cancelPrice: '59' },
    { id: 13, img: M13, time: '16 mins', title: 'Humpy Farms Cow A2 Milk', litre: '500 ml', price: '46', cancelPrice: '49' },
    { id: 14, img: M14, time: '16 mins', title: 'Amul Taaza Toned Milk (Small Pack)', litre: '200 ml', price: '17' },
    { id: 15, img: M15, time: '16 mins', title: 'Nestlé A+ Toned Milk', litre: '500 ml', price: '32' },
    { id: 16, img: M16, time: '16 mins', title: 'Nestlé A+ Full Cream Milk', litre: '500 ml', price: '38' },
    { id: 17, img: M17, time: '16 mins', title: 'Gowardhan Cow Milk', litre: '500 ml', price: '28' },
    { id: 18, img: M18, time: '16 mins', title: 'Gowardhan Full Cream Milk', litre: '500 ml', price: '36' },
    { id: 19, img: M19, time: '16 mins', title: 'Paras Toned Milk', litre: '500 ml', price: '27' },
    { id: 20, img: M20, time: '16 mins', title: 'Paras Gold Milk', litre: '500 ml', price: '34' },
    { id: 21, img: M21, time: '16 mins', title: 'Sofit Soy Milk', litre: '1 litre', price: '95' },
    { id: 22, img: M22, time: '16 mins', title: 'Sofit Almond Milk', litre: '1 litre', price: '120' },
    { id: 23, img: M23, time: '16 mins', title: 'Starbucks Oat Milk', litre: '1 litre', price: '150' },
    { id: 24, img: M24, time: '16 mins', title: 'Raw Pressery Cold Coffee', litre: '350 ml', price: '70', cancelPrice: '85' },
    { id: 25, img: M25, time: '16 mins', title: 'Amul Shakti Toned Milk', litre: '500 ml', price: '28' },
    { id: 26, img: M26, time: '16 mins', title: 'Mother Dairy Slim Milk', litre: '500 ml', price: '32' },
    { id: 27, img: M27, time: '16 mins', title: 'Nestlé Everyday Dairy Whitener', litre: '500 g', price: '220' },
    { id: 28, img: M28, time: '16 mins', title: 'Amul Butter Milk', litre: '1 litre', price: '35' },
    { id: 29, img: M29, time: '16 mins', title: 'Epigamia Greek Yogurt', litre: '400 g', price: '95', cancelPrice: '120' },
    { id: 30, img: M30, time: '16 mins', title: 'Milky Mist Paneer', litre: '200 g', price: '55' },
    { id: 31, img: M31, time: '16 mins', title: 'Amul Cheese Slices', litre: '200 g', price: '110' },
    { id: 32, img: M32, time: '16 mins', title: 'Britannia Cheezza', litre: '150 g', price: '45' },
    { id: 33, img: M33, time: '16 mins', title: 'Mother Dairy Dahi', litre: '400 g', price: '35' },
    { id: 34, img: M34, time: '16 mins', title: 'Amul Masti Dahi', litre: '400 g', price: '32' },
    { id: 35, img: M35, time: '16 mins', title: 'Nestlé A+ Curd', litre: '400 g', price: '38' },
    { id: 36, img: M36, time: '16 mins', title: 'Amul Lassi', litre: '1 litre', price: '45' },
    { id: 37, img: M37, time: '16 mins', title: 'Mother Dairy Chaas', litre: '1 litre', price: '30' },
    { id: 38, img: M38, time: '16 mins', title: 'Paper Boat Aamras', litre: '1 litre', price: '120' },
    { id: 39, img: M39, time: '16 mins', title: 'Tropicana Orange Juice', litre: '1 litre', price: '110' },
    { id: 40, img: M40, time: '16 mins', title: 'Real Fruit Juice Mixed', litre: '1 litre', price: '100' },
   
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-3"
          >
            <div className="flex justify-center mb-2">
              <img
                src={item.img}
                alt={item.title}
                className="h-32 w-32 object-contain"
              />
            </div>
            <div className="inline-block bg-amber-50 px-2 py-0.5 rounded-full mb-2">
              <p className="text-amber-700 text-xs font-semibold">⏱️ {item.time}</p>
            </div>
            <p className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
              {item.title}
            </p>
            <p className="text-xs text-gray-500 mt-1">{item.litre}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1">
                <p className="text-base font-bold text-gray-900">₹{item.price}</p>
                {item.cancelPrice && (
                  <p className="text-xs text-gray-400 line-through">₹{item.cancelPrice}</p>
                )}
              </div>
              <button className="px-3 py-1.5 text-xs font-semibold text-green-700 border border-green-500 rounded-full hover:bg-green-50 transition-colors">
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