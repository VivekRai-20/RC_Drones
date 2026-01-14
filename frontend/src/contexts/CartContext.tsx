import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'qty'>) => void;
    updateQuantity: (id: string, qty: number) => void;
    removeFromCart: (id: string) => void;
    cartTotal: number;
    itemCount: number;
    isDrawerOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const saveCart = (newCart: CartItem[]) => {
        setCart(newCart);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const addToCart = (item: Omit<CartItem, 'qty'>) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            let newCart;

            if (existingItem) {
                newCart = prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                );
            } else {
                newCart = [...prevCart, { ...item, qty: 1 }];
            }

            saveCart(newCart);
            return newCart;
        });
        openCart();
    };

    const updateQuantity = (id: string, qty: number) => {
        if (qty < 1) return removeFromCart(id);

        setCart(prevCart => {
            const newCart = prevCart
                .map(item =>
                    item.id === id ? { ...item, qty } : item
                )
                .filter(item => item.qty > 0);

            saveCart(newCart);
            return newCart;
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item.id !== id);
            saveCart(newCart);
            return newCart;
        });
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

    const openCart = () => setIsDrawerOpen(true);
    const closeCart = () => setIsDrawerOpen(false);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeFromCart,
                cartTotal,
                itemCount,
                isDrawerOpen,
                openCart,
                closeCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
