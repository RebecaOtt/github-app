interface ErrorMessageProps {
    message: string;
    onClose?: () => void;
    className?: string;
}

export function ErrorMessage({ message, onClose, className }: ErrorMessageProps) {
    return (
        <div className={`w-[347px] h-[84px] bg-light-orange rounded-[22px] flex items-center px-6 mb-4 relative ${className}`}>
            <div className="absolute top-[-8px] left-[-5px]"> 
                <div className="w-[50px] h-[50px] bg-orange rounded-full flex items-center justify-center ml-5 -mt-5">
                    <span className="text-white text-3xl font-bold">
                        ×
                    </span>
                </div>
                <div className="absolute top-[40px] left-[45px] w-5 h-5 bg-orange rounded-full"></div>
                <div className="absolute top-[65px] left-[25px] w-3 h-3 bg-orange rounded-full"></div>

                <div className="absolute top-[45px] left-[15px] w-2 h-2 bg-orange rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center ml-14"> 
                <span className="font-bold text-white text-lg leading-tight">Ops!</span>
                <span className="text-white text-sm leading-tight">{message}</span>
            </div>

            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-1 right-4 text-white text-lg font-bold cursor-pointer"
                >
                    ×
                </button>
            )}
        </div>
    );
}