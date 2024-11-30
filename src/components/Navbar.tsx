
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-28 mx-auto">
      <div className="flex justify-between items-center">
       
        <Image
          src="/blog3.png"
          width={150}
          height={50}
          alt="blog"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] object-contain"
        />

      
        <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg font-bold py-2 px-4 sm:py-3 sm:px-6 border border-solid border-black shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] transition-shadow duration-200">
          Get Started
          <Image src="/arrow.png" alt="arrow" width={20} height={20} className="w-4 sm:w-5 md:w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;






























// "use client"


// import Image from 'next/image';
// import { useState } from 'react';


// type Props = {
//   onSearch: (searchText: string) => void;
// };

// export default function Navbar({ onSearch }: Props) {
//   const [searchText, setSearchText] = useState('');

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         <Image src="/logi.png" alt="Blog Logo" width={50} height={50} />
//         <h1 className="text-2xl font-bold">My Blog</h1>
//       </div>
//       <div>
//         <input
//           type="text"
//           value={searchText}
//           onChange={handleSearch}
//           placeholder="Search posts..."
//           className="p-2 rounded text-gray-900"
//         />
//       </div>
//     </nav>
//   );
// }