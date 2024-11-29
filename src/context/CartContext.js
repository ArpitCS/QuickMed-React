import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            incrementQuantity(product.id);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateCart = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(
                cart.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const incrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product) {
            updateCart(productId, product.quantity + 1);
        }
    };

    const decrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product) {
            updateCart(productId, product.quantity - 1);
        }
    };

    const amount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const fetchCart = () => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateCart,
                amount,
                incrementQuantity,
                decrementQuantity,
                fetchCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;