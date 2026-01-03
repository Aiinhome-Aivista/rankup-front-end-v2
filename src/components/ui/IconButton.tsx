import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    variant?: "ghost" | "outline";
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className = "", icon, variant = "outline", ...props }, ref) => {
        const baseStyles =
            "flex items-center justify-center rounded-sm transition-colors focus:outline-none";

        const variants = {
            outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-50",
            ghost: "bg-transparent hover:bg-gray-100"
        }

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} p-1.5 ${className}`}
                {...props}
            >
                {icon}
            </button>
        );
    }
);

IconButton.displayName = "IconButton";

export default IconButton;
