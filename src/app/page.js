import HeroSection from "@/component/homepage/HeroSection";
import React from "react";

export default function Home() {
  return (
    <>
    <div className="h-[200vh]">
      <HeroSection imageurl="https://i.pinimg.com/1200x/f2/66/48/f26648e326a0cf51a5dbd8c114336886.jpg" title="Welcome To Our Website" title2="Bring Fun Life To Your Kids" button={true}/>
    </div>
    <div className="custom-container">g</div>
    </>
  );
}
