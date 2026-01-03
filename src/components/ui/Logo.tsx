import RVector from "@/assets/R-Vector.svg";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <img
                    src={RVector}
                    alt="Rank Up Logo"
                    className="h-full w-full object-contain"
                />
            </div>
            {showText && (
                <h1
                    className="hidden text-2xl font-medium text-gray-800 sm:block"
                    style={{ fontFamily: '"Patrick Hand", cursive' }}
                >
                    Rank Up Academy
                </h1>
            )}
        </div>
    );
};

export default Logo;
