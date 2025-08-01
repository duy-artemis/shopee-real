import React from 'react';
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  cart: [],
  setProduct: (data) => {
    set({products: data})
  },
}));