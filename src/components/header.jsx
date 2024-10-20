import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "./icons";
import { useShoppingCart } from "../hooks";
import ShoppingCart from "./shopping-cart";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { totalItems } = useShoppingCart();

  return (
    <header className="w-full bg-gradient-to-r from-[#D4991A] to-[#a4794d] sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex gap-x-12 justify-between">
      <h1 className="font-semibold text-4xl text-white">
        <Link to="/">Safary Gourmet</Link>
      </h1>
      <div className="flex items-center gap-x-8">
        <nav className="flex gap-x-4 text-white">
          <Link to="/"
            className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full"
          >
            Inicio
          </Link>
          <Link to="/menu"
            className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full"
          >
            Menu
          </Link>
          <Link to="/pagar"
            className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full"
          >
            Pagar
          </Link>
        </nav>
        <div className="relative flex items-center">
          <button
            className="hover:bg-slate-200/20 rounded-full p-2 text-white flex items-center gap-1 transition-all duration-500"
            onClick={() => setShowCart(!showCart)}
          >
            <ShoppingCartIcon />
            <div className="bg-white p-1 text-xs text-gray-900 w-6 h-6 rounded-[50%]">
              <span>{totalItems}</span>
            </div>
          </button>
          {showCart && (
            <div className="absolute top-12 right-0 w-max">
              <ShoppingCart />
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
  );
}
