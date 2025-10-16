import React from "react";

const CustomButton2 = ({
  children,
  type = "submit",
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  color = "#35C0F0",        // background color (changeable)
  textColor = "#FFFFFF",    // text color (changeable)
  borderColor = "",  // border color (changeable)
  height = "48px",
  width,
  borderRadius = "20px 0px 20px 0",
  padding = "18px 25px",
  sx = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        color: textColor,
        borderRadius,
        height,
        padding,
        width: fullWidth ? "100%" : width,
        fontFamily: "DM Sans",
        ...sx,
      }}
      className={`
        inline-flex items-center justify-center gap-2 px-6 py-6
        font-medium whitespace-nowrap
        text-[18px] leading-[30px]
        border transition-all duration-300 ease-in-out
        hover:opacity-90 hover:brightness-110
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default CustomButton2;


{/* <CustomButton2
  color="#ffc107"        // background color (changeable)
  textColor="#FFFFFF"    // text color (changeable)
  borderColor="#ffc107"  // border color (changeable)
>
  Add New
</CustomButton2> */}
