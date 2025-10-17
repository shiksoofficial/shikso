import React from 'react'

const CommonBanner1 = ({ title, description, breadcom }) => {
    return (
        <div className="bg-[#364d59]">
            <div className="custom-container flex  h-[350px] items-end">
                    <div className="w-full p-2 pb-4">
                        <h1 className="text-[#DEF2FC] text-center responsive-heading font-medium leading-tight">
                            {title}
                        </h1>
                    </div>
            </div>
        </div>
    )
}

export default CommonBanner1