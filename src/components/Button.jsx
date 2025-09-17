import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <button 
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${bgColor} ${textColor} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} ${className}`} 
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
