import { createContext, useCallback, useMemo, useState, useEffect, useRef } from "react";

export const ShoppingCartContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: () => {},
  removeProduct: () => {},
  clearShoppingCart: () => {},
  updateProductQuantity: () => {},
  isCartVisible: false,
  toggleCartVisibility: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const cartRef = useRef(null);

  const totalAmount = useMemo(() => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  }, [products]);

  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeProduct = useCallback((productId) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId);
    });
  }, []);

  const clearShoppingCart = useCallback(() => setProducts([]), []);

  const updateProductQuantity = useCallback((productId, quantity) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );
    });
  }, []);

  const toggleCartVisibility = useCallback(() => {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isCartVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartVisible, handleClickOutside]);

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        totalAmount,
        addProduct,
        removeProduct,
        clearShoppingCart,
        updateProductQuantity,
        isCartVisible,
        toggleCartVisibility,
        cartRef,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};