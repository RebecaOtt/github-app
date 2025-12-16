interface SelectProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
}

export function Select({ currentPage, totalPages, onNext, onPrev }: SelectProps) {
    const displayPage = currentPage + 1;
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages - 1;

    const buttonClass = (disabled: boolean) => `
        w-6 h-6 rounded-sm border 
        flex items-center justify-center transition-all duration-200 pb-1
        ${disabled 
            ? 'border-gray-300 text-gray-400 cursor-not-allowed bg-white'
            : 'border-gray-500 text-gray-700 hover:border-blue-500 hover:text-blue-500'
        }
    `;

    return (
        <div className="flex justify-end items-center">
            <span className="text-gray-600 text-xs mr-4">
                {displayPage} de {totalPages}
            </span>

            <button 
                onClick={onPrev}
                disabled={isFirstPage} 
                className={buttonClass(isFirstPage) + ' mr-1'}
            >
                {'←'}
            </button>

            <button
                onClick={onNext}
                disabled={isLastPage} 
                className={buttonClass(isLastPage)}
            >
                {'→'}
            </button>
        </div>
    );
}