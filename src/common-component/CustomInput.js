import React from "react";

const CustomInput = ({
    label,
    name,
    type = "text",
    placeholder = "",
    validateRules={},
    disabled = false,
    startIcon,
    endIcon,
    className = "",
    multiline = false,
    rows = 4,
    register,
    errors,
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
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white focus-within:border-slate-500 border-none"}
        `}
            >
                {startIcon && (
                    <span className="mr-2 text-[#484545] flex items-center">{startIcon}</span>
                )}

                {multiline ? (
                    <textarea
                        {...register(name, validateRules)}
                        id={name}
                        name={name}
                        rows={rows}
                        placeholder={placeholder}
                        disabled={disabled}
                        className="w-full outline-none resize-none text-gray-800 placeholder-gray-400 bg-transparent"
                    />
                ) : (
                    <input
                        {...register(name, validateRules)}
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        disabled={disabled}
                        className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                    />
                )}


                {endIcon && (
                    <span className="ml-2 text-gray-400 flex items-center">{endIcon}</span>
                )}
            </div>

            {errors[name] && (
                <p className="text-red-500 text-sm mt-1"> {errors[name]?.message || `${label || name} is required`}</p>
            )}
        </div>
    );
};

export default CustomInput;