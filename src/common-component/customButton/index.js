"use client";

import React from "react";

const CustomButton = ({
  children,
  color = "#35C0F0",
  type = "button",
  height = "50px",
  width,
  borderRadius = "20px 0px 20px 0",
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  loading = false,
  className = "",
  ariaLabel,
  sx = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      style={{
        backgroundColor: color,
        borderRadius,
        height,
        width: fullWidth ? "100%" : width,
        fontFamily: "Manrope",
        ...sx,
      }}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 font-medium text-white
        text-[16px] leading-[24px] whitespace-nowrap
        transition-all duration-300 ease-in-out
        hover:opacity-90 hover:shadow-md
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
      )}
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default CustomButton;

