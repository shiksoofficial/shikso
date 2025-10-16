import React from "react";
import CustomButton2 from "../customBotton2";

const Card1 = ({ icon, title, description, buttonText, buttoncolor }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow p-7 text-center flex flex-col items-center hover:shadow cursor-pointer">
      <div className="mb-6">
        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
      </div>
      <h3  color={tittlecolor} className="dm_sans responsiveheading6 font-semibold mb-5">{title}</h3>
      <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6! lg:leading-8!'>{description}</p>
      <CustomButton2
        className=""
        color={buttoncolor}
      >
        {buttonText} 
      </CustomButton2>
    </div>
  );
};

export default Card1;
