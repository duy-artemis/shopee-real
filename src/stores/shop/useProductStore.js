import React from 'react';
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  checkout: [],
  cart: [],
  setProduct: (data) => {
    set({products: data})
  },
  setCheckOut: (data) => {
    set({checkout: data})
  },
  setCart: (data) => {
    set({cart: data})
  }
}));