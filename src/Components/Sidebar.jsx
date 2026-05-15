import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar1 from "../assets/s1.avif";
import Sidebar2 from "../assets/s2.avif";
import Sidebar3 from "../assets/s3.avif";
import Sidebar4 from "../assets/s4.avif";
import Sidebar5 from "../assets/s5.avif";
import Sidebar6 from "../assets/s6.avif";
import Sidebar7 from "../assets/s7.avif";
import Sidebar8 from "../assets/s8.avif";
import Sidebar9 from "../assets/s9.avif";
import Sidebar10 from "../assets/s10.avif";
import Sidebar11 from "../assets/s11.avif";
import Sidebar12 from "../assets/s12.avif";
import Sidebar13 from "../assets/s13.avif";
import Sidebar14 from "../assets/s14.avif";
import Sidebar15 from "../assets/s15.avif";
import Sidebar16 from "../assets/s16.png";
import Sidebar17 from "../assets/s17.avif";
import Sidebar18 from "../assets/s18.avif";
import Sidebar19 from "../assets/s19.avif";
import Sidebar20 from "../assets/s20.avif";

const Sidebar = () => {
  const sidebarItems = [
    { img: Sidebar1, path: '/', label: 'Home' },
    { img: Sidebar2, path: '/bread-category', label: 'Bread' },
    { img: Sidebar3, path: '/egg-category', label: 'Egg' },
    { img: Sidebar4, path: '/corn-flakes-category', label: 'Corn Flakes' },
    { img: Sidebar5, path: '/muesly-category', label: 'Muesly' },
    { img: Sidebar6, path: '/oats-category', label: 'Oats' },
    { img: Sidebar7, path: '/paneer-category', label: 'Paneer' },
    { img: Sidebar8, path: '/milk-category', label: 'Ghee' },
    { img: Sidebar9, path: '/milk-category', label: 'Paneer' },
    { img: Sidebar10, path: '/milk-category', label: 'Yogurt' },
    { img: Sidebar11, path: '/milk-category', label: 'Ice Cream' },
    { img: Sidebar12, path: '/milk-category', label: 'Shake' },
    { img: Sidebar13, path: '/milk-category', label: 'Lassi' },
    { img: Sidebar14, path: '/milk-category', label: 'Chaas' },
    { img: Sidebar15, path: '/milk-category', label: 'Soy Milk' },
    { img: Sidebar16, path: '/milk-category', label: 'Almond Milk' },
    { img: Sidebar17, path: '/milk-category', label: 'Oat Milk' },
    { img: Sidebar18, path: '/milk-category', label: 'Coconut Milk' },
    { img: Sidebar19, path: '/milk-category', label: 'Condensed Milk' },
    { img: Sidebar20, path: '/milk-category', label: 'Powdered Milk' },
  ];

  return (
    <>
      {/* Desktop Sidebar: fixed left, visible only on md and above */}
      <section className='hidden md:block h-screen w-20 fixed left-0 top-28 overflow-y-auto bg-white border-r border-gray-200 shadow-sm z-40'>
        <div className='flex flex-col items-center py-4 gap-3'>
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className='w-12 h-12 rounded-xl overflow-hidden hover:scale-110 transition-transform duration-200 shadow-md'
              title={item.label}
            >
              <img
                src={item.img}
                alt={item.label}
                className='w-full h-full object-cover'
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile Horizontal Scroll Bar: visible only below md */}
      <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 overflow-x-auto'>
        <div className='flex flex-row items-center gap-4 px-4 py-2 min-w-max'>
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className='flex flex-col items-center gap-1 min-w-[56px]'
            >
              <div className='w-10 h-10 rounded-full overflow-hidden shadow-sm border border-gray-100'>
                <img
                  src={item.img}
                  alt={item.label}
                  className='w-full h-full object-cover'
                />
              </div>
              <span className='text-[10px] text-gray-600 font-medium truncate w-full text-center'>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for mobile bottom navbar to prevent content overlap */}
      <div className='md:hidden h-16' />
    </>
  );
};

export default Sidebar;