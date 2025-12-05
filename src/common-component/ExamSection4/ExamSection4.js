"use client";
import ConnectUsModal from '@/common-component/ConnectUsModal/ConnectUsModal';
import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2';
import { useRouter } from "next/navigation";
import { useState } from 'react';

const ExamSection4 = ({
    title,
    description,
    showLearnMore = true,
    showAboutUs = true,
    aboutUsLink = "/about-us",
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <ConnectUsModal open={isModalOpen} setOpen={setIsModalOpen} />
            <div className="custom-container m-6 md:m-10">
                <div className="border-gray-300 border rounded-xl p-6 bg-white flex flex-col md:flex-row justify-between md:items-center gap-4">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{title}</h3>
                        <p className="mb-1">{description}</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-end gap-2.5">
                        {showLearnMore && (
                            <CustomButton2 color="gray" onClick={() => setIsModalOpen(true)}>
                                Learn More
                            </CustomButton2>
                        )}

                        {showAboutUs && (
                            <CustomButton2 onClick={() => router.push(aboutUsLink)}>
                                About Us
                            </CustomButton2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamSection4;
