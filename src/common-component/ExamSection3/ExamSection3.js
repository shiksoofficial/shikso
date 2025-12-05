"use client";
import ConnectUsModal from '@/common-component/ConnectUsModal/ConnectUsModal';
import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2';
import { useRouter } from "next/navigation";
import { useState } from 'react';

const ExamSection3 = ({
    title,
    description,
    pointsheading,
    points = [],
    line,
    line1,
    highlightText,
    footerText,
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
                <div className="border-gray-300 border rounded-xl p-6 bg-white">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{title}</h3>

                        {description && (
                            <p className="mb-2">{description}</p>
                        )}
                        {pointsheading && (
                            <p className='m-2'>{pointsheading}</p>
                        )}

                        {points?.length > 0 && (
                            <ul className="responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-3">
                                {points.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {line && (
                            <p>{line}</p>
                        )}
                        {line1 && (
                            <p className='mb-2'>{line1}</p>
                        )}
                        {highlightText && (
                            <p className="text-green-500 mb-1">{highlightText}</p>
                        )}

                        {footerText && (
                            <p>{footerText}</p>
                        )}
                    </div>

                    <div className="mt-3 flex justify-end gap-2.5">
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

export default ExamSection3;
