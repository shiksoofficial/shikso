'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaSearch, FaBookOpen } from 'react-icons/fa';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';

export default function NotFound() {
  return (
    <div className='bg-[#1A2E33]'>
    <div className='custom-container'>
    <div className="flex flex-col items-center justify-center h-screen dm_sans">
      <h1 className="responsive-heading  bold text-white  mb-4">{`404 - Page Not Found`}</h1>
      <p className="responsive-text text-white mb-8">{`The page you are looking for does not exist.`}</p>
      <div className="flex space-x-4">
        <CustomLinkBtn href='/' color='#dc3545'>Home</CustomLinkBtn>
         <CustomLinkBtn href='/blogs' color='#dc3545'>Blog</CustomLinkBtn>
        <CustomLinkBtn href='/contact-us' color='#dc3545'>Contact Us</CustomLinkBtn>
       
       
      </div>
    </div>
    </div>
    </div>
  );
}
