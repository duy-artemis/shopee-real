import React from 'react';
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  cart: [],
  setProduct: (data) => {
    set({products: data})
  },
  setCart: (item) => set({
    cart: [item]
  }),
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, item]
  }))
}));