import { createContext, useContext, useState, useEffect } from "react";

// CONTEXT
const UserContext = createContext();

// PROVIDER
export const UserProvider = ({ children }) => {

  // LOAD FROM LOCALSTORAGE (optional but best)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (trip) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === trip.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === trip.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...trip, quantity: 1 }];
    });
  };

  // INCREASE QTY
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <UserContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// CUSTOM HOOK
export const useCart = () => useContext(UserContext);