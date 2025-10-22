import Image from "next/image";
import React from "react";

const CommonCard2 = ({ icon, title, description, founder }) => {
  return (
    <div>

      <div className="relative  max-w-xs mx-auto bg-white shadow p-7 text-center flex flex-col items-center 
   cursor-pointer  hover:bg-gray-200  focus:bg-gray-200  active:bg-gray-200  group-hover:bg-gray-200
     group-focus:bg-gray-200  group-active:bg-gray-200">
        <div className="absolute top-[-45px] ">
          <div className=" border-3 border-amber-400 rounded-full overflow-hidden">
            <Image
              src={icon}
              alt={title}
              width={96}
              height={96}
            />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-1 mt-8">{founder}</p>
        <h3 className="dm_sans responsiveheading6 resp font-semibold mb-2">{title}</h3>
        <p className="dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6 lg:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommonCard2;