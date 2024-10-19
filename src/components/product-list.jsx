import { useShoppingCart } from "../hooks";
import dataProducts from "../data.json";
import { useState } from "react";

export default function ProductList() {
  const { addProduct } = useShoppingCart();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) + amount, 0),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = (quantities[product.id] || 0) + 1;
    handleQuantityChange(product.id, 1);
    addProduct({ ...product, quantity });
  };

  return (
    <div className="w-full max-w-6xl px-4 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataProducts.map((product) => (
        <div
          key={product.id}
          className="rounded-lg border bg-gray-400/10 flex flex-col h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain bg-white mx-auto"
          />
          <div className="flex flex-col flex-grow gap-y-4 px-4 py-6">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm line-clamp-3">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-medium">S/ {product.price}</span>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 px-2 py-1 hover:bg-gray-400 transition-all duration-300 hover:scale-110 rounded"
                  onClick={() => handleQuantityChange(product.id, -1)}
                  disabled={(quantities[product.id] || 0) <= 0}
                >
                  -
                </button>
                <span className="mx-2">{quantities[product.id] || 0}</span>
                <button
                  className="bg-gray-300 px-2 py-1 hover:bg-gray-400 transition-all duration-300 hover:scale-110 rounded"
                  onClick={() => handleQuantityChange(product.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-800 text-slate-200 font-medium border rounded-lg px-4 py-2 mt-2 transition-all duration-300 hover:scale-110"
              onClick={() => handleAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}