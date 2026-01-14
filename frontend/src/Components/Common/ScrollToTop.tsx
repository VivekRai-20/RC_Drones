import { FiArrowUp } from 'react-icons/fi';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ScrollToTop = () => {
    const { showScrollTop, scrollToTop } = useScrollToTop();

    return (
        <>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <FiArrowUp size={18} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
