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
    { img: Sidebar1, path: '/milk-category' },
    { img: Sidebar2, path: '/milk-category' },
    { img: Sidebar3, path: '/milk-category' },
    { img: Sidebar4, path: '/milk-category' },
    { img: Sidebar5, path: '/milk-category' },
    { img: Sidebar6, path: '/milk-category' },
    { img: Sidebar7, path: '/milk-category' },
    { img: Sidebar8, path: '/milk-category' },
    { img: Sidebar9, path: '/milk-category' },
    { img: Sidebar10, path: '/milk-category' },
    { img: Sidebar11, path: '/milk-category' },
    { img: Sidebar12, path: '/milk-category' },
    { img: Sidebar13, path: '/milk-category' },
    { img: Sidebar14, path: '/milk-category' },
    { img: Sidebar15, path: '/milk-category' },
    { img: Sidebar16, path: '/milk-category' },
    { img: Sidebar17, path: '/milk-category' },
    { img: Sidebar18, path: '/milk-category' },
    { img: Sidebar19, path: '/milk-category' },
    { img: Sidebar20, path: '/milk-category' },
  ];

  return (
  <>
    <section className='h-screen w-20 fixed left-0 top-28 overflow-y-auto px-10 bg-white border-r border-gray-200 shadow-sm'>
      <div className='flex flex-col items-center py-4 gap-3'>
        {sidebarItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className='w-10 h-10 rounded-xl overflow-hidden hover:scale-110 transition-transform duration-200 shadow-md'
          >
            <img 
              src={item.img} 
              alt={`category-${index}`}
              className='w-full h-full object-cover'
            />
          </Link>
        ))}
      </div>
    </section>
  </>
  );
};

export default Sidebar;