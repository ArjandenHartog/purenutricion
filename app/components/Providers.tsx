"use client";

import { CartProvider } from "../context/CartContext";
import CartModal from "./CartModal";
import FraudRevealModal from "./FraudRevealModal";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartModal />
      <FraudRevealModal />
    </CartProvider>
  );
}
