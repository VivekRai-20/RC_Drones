import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type SearchContextType = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    searchResults: any[];
    isSearching: boolean;
    performSearch: (term: string) => void;
    clearSearch: () => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = (term: string) => {
        setSearchTerm(term);
        setIsSearching(true);

        // Import products dynamically to avoid circular dependencies
        import('../data/products').then(({ products }) => {
            if (!term.trim()) {
                setSearchResults([]);
                setIsSearching(false);
                return;
            }

            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(term.toLowerCase()) ||
                product.description.toLowerCase().includes(term.toLowerCase()) ||
                product.category.toLowerCase().includes(term.toLowerCase()) ||
                product.features.some(feature =>
                    feature.toLowerCase().includes(term.toLowerCase())
                )
            );

            setSearchResults(filtered);
            setIsSearching(false);
        });
    };

    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
        setIsSearching(false);
    };

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                searchResults,
                isSearching,
                performSearch,
                clearSearch
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
