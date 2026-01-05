"use client";

import HeroSection from "@/component/homepage/HeroSection";
import Image from "next/image";

export default function ExamListPage() {
  const exams = [
    { title: "Navodaya Vidyalaya Entrance Exam (JNVST)", img: "/shiksologo.png" },
    { title: "Sainik School Entrance Exam (AISSEE)", img: "/shiksologo.png" },
    { title: "Kendriya Vidyalaya Admission Test", img: "/shiksologo.png" },
    { title: "RMS (Rashtriya Military School) Entrance Exam", img: "/shiksologo.png" },
    { title: "RIMC (Rashtriya Indian Military College) Exam", img: "/shiksologo.png" },
    { title: "Model School Entrance Exam", img: "/shiksologo.png" },
    { title: "Jawahar Navodaya Lateral Entry Test (LEET)", img: "/shiksologo.png" },
    { title: "Private School Admission Test", img: "/shiksologo.png" },
  ];


  return (
    <>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "Exam List" }]} />
      <div className="w-full flex flex-col items-center py-5 bg-[#f8fafc]">
        <h2 className="dm_sans responsiveheading2 font-semibold mb-6 flex items-center gap-2 px-4">{` Upcoming and Popular Exams `} </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {exams.map((exam, index) => (
            <div key={index}
              className="flex gap-2 items-center bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-2   cursor-pointer border-1 border-gray-300 hover:-translate-y-1 duration-200">
              <Image
                src={exam.img}
                alt={exam.title}
                className="w-12 h-12 object-contain mb-4"
              />
              <h3 className="dm_sans responsiveheading3 font-medium text-gray-700 text-center">{exam.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
