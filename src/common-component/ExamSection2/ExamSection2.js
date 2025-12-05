"use client";
import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2';
import LoginModal from '@/common-component/LoginModal/LoginModal';
import SignupModal from '@/common-component/SignupModal/SignupModal';
import React, { useState } from 'react';

const ExamSection2 = ({
  title,
  description,
  tagline,
  buttonText = "Get Started",
  bgColor = "#3498db",
}) => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <LoginModal
        open={isLoginModalOpen}
        setOpen={setIsLoginModalOpen}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal
        open={isSignupModalOpen}
        setOpen={setIsSignupModalOpen}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <div className="custom-container m-6 md:m-10">
        <div
          className="border-gray-300 border rounded-xl p-6 flex flex-col sm:flex-row justify-between"
          style={{ backgroundColor: bgColor }}
        >
          <div>
            <h3 className="responsiveheading2 font-semibold text-white mb-1">{title}</h3>
            <p className="responsive-text text-white ">{description}</p>
            {tagline && (
              <p className="responsive-text text-white mt-4">{tagline}</p>
            )}
          </div>
          <div className="mt-3">
            <CustomButton2 borderColor='#3498db' onClick={() => setIsLoginModalOpen(true)}>
              {buttonText}
            </CustomButton2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamSection2;
