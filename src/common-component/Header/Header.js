// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { MdMenu, MdClose } from "react-icons/md";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//    const pathname = usePathname();

//   return (
//     <header className="absolute left-0 w-full z-[100]">
//       <div className="custom-container">
//         <div className="flex justify-between py-5 items-center">
//           <p className="text-[50px] font-bold text-white">{`Kiddy.`}</p>
//           <div className="hidden md:flex gap-5 text-sm">
//             <p className="w-[250px] leading-tight text-white">
//               {`34 Street Name, City Name Here, United States`}
//             </p>
//             <p className="w-[250px] leading-tight text-white">
//               {`Sunday - Friday 8:00AM - 4:00PM 
//               Saturday CLOSED`}
//             </p>
//           </div>
//         </div>

//         <div className="bg-white px-10 py-6 rounded-[50px] flex justify-between items-center">
//           <ul className="hidden md:flex gap-8 text-black font-medium">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">About</Link></li>
//             <li><Link href="/blogs">Blog</Link></li>
//             <li><Link href="/">Contact</Link></li>
//           </ul>

//           <div className="flex items-center gap-5">
//             <button
//               onClick={() => setIsOpen(true)}
//               className="md:hidden flex items-center"
//             >
//               <MdMenu size={28} color="#000" />
//             </button>

//             <ul className="flex gap-4 text-black">
//               <li><Link href="/"><FaFacebookF /></Link></li>
//               <li><Link href="/"><FaTwitter /></Link></li>
//               <li><Link href="/"><FaLinkedinIn /></Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         onClick={() => setIsOpen(false)}
//       ></div>

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white z-[100] p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold">Menu</h2>
//           <button onClick={() => setIsOpen(false)}>
//             <MdClose size={28} />
//           </button>
//         </div>

//         <ul className="flex flex-col gap-5 text-lg text-gray-800">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/">About</Link></li>
//           <li><Link href="/blogs">Blog</Link></li>
//           <li><Link href="/">Contact</Link></li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // current path

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about-us" },
    { title: "Blog", href: "/blogs" },
    { title: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="absolute left-0 w-full z-[100]">
      <div className="custom-container">
        <div className="flex justify-between py-5 items-center">
          <p className="dm_sans text-[50px] font-bold text-white">{`Kiddy.`}</p>
          <div className="hidden md:flex gap-5 text-sm">
            <div className="w-[250px] flex gap-5 items-center">
              <div><MdLocationPin size={30} color="#fdb62f"/></div>
              <span className="dm_sans text-white">{`34 Street Name, City Name Here, United States`}</span>
            </div>
            <div className="w-[250px] flex gap-5 items-center">
              <div><FaRegClock size={30} color="#dc3545"/></div> <span className="dm_sans text-white">{`Sunday - Friday 8:00AM - 4:00PM 
              Saturday CLOSED`}</span>
            </div>
          </div>
        </div>

        <div className="bg-white px-10 py-6 rounded-[50px] flex justify-between items-center">
          <ul className="dm_sans hidden md:flex gap-8 text-black font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  aria-label="menuss"
                  href={item.href}
                  className={pathname === item.href ? "text-red-800" : ""}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              aria-label="menu-btn"
              onClick={() => setIsOpen(true)}
              className="md:hidden flex items-center"
            >
              <MdMenu size={28} color="#000" />
            </button>

            <ul className="flex gap-4 text-black">
              <li><Link href="/" aria-label="facebook link"><FaFacebookF /></Link></li>
              <li><Link href="/" aria-label="twitter link"><FaTwitter /></Link></li>
              <li><Link href="/" aria-label="linkedin link"><FaLinkedinIn /></Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-[100] p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-semibold"></p>
          <button aria-label="close-btn" onClick={() => setIsOpen(false)}>
            <MdClose size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-lg text-gray-800">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                aria-label="menus"
                href={item.href}
                className={pathname === item.href ? "text-red-800" : ""}
                onClick={() => setIsOpen(false)} // close sidebar
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
