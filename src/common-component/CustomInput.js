import React from "react";

const CustomInput = ({
    label,
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    disabled = false,
    startIcon,
    endIcon,
    className = "",
    multiline = false,
    rows = 4,
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="block mb-1 text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <div
                className={`flex items-center border rounded-[2px] bg-white px-3 py-2 transition-all duration-200 
        ${error ? "border-red-500" : "border-gray-300"} 
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white focus-within:border-slate-500"}
        `}
            >
                {startIcon && (
                    <span className="mr-2 text-gray-400 flex items-center">{startIcon}</span>
                )}

                {multiline ? (
                    <textarea
                        id={name}
                        name={name}
                        rows={rows}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className="w-full outline-none resize-none text-gray-800 placeholder-gray-400 bg-transparent"
                    />
                ) : (
                    <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                    />
                )}


                {endIcon && (
                    <span className="ml-2 text-gray-400 flex items-center">{endIcon}</span>
                )}
            </div>

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default CustomInput;