import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
    name: string;
    basePrice: number;
    quantity: number;
    thumbnail: string;
    finalPrice: number; 
}

interface CartContextProps {
    children: ReactNode;
}

interface CartContextType {
    addToCart: () => void;
    removeFromCart: () => void;
    product: Product | null; 
    incrementQuantity: () => void;
    decrementQuantity: () => void;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartContextProps) => {
    const [product, setProduct] = useState<Product | null>(null); 

    const addToCart = () => {
        if (product) {
            const newQuantity = product.quantity + 1;
            setProduct({
                ...product, 
                quantity: newQuantity,
                finalPrice: product.basePrice * newQuantity 
            });
        } else {
            const basePrice = 125.00;
            const quantity = 1;
            setProduct({
                name: 'Fall Limited Edition Sneakers',
                basePrice: basePrice,
                quantity: quantity,
                thumbnail: '../assets/image-product-1-thumbnail.jpg',
                finalPrice: basePrice * quantity 
            });
        }
    };

    const removeFromCart = () => {
        setProduct(null); 
    };

    const getTotalPrice = () => {
        if (product) {
            return product.finalPrice; 
        }
        return 0;
    };

    const incrementQuantity = () => {
        if (product) {
            const newQuantity = product.quantity + 1;
            setProduct({
                ...product, 
                quantity: newQuantity,
                finalPrice: product.basePrice * newQuantity 
            });
        }
    };

    const decrementQuantity = () => {
        if (product && product.quantity > 1) {
            const newQuantity = product.quantity - 1;
            setProduct({
                ...product, 
                quantity: newQuantity,
                finalPrice: product.basePrice * newQuantity 
            });
        }
    };

    return (
        <CartContext.Provider
        value={{
            product,
            incrementQuantity,
            decrementQuantity,
            addToCart,
            removeFromCart,
            getTotalPrice,
        }}
        >
        {children}
        </CartContext.Provider>
    );
};

export const userCartContext = () => { 
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be called within CartProvider');
    }
    return context;
};