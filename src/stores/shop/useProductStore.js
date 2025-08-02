import React from 'react';
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  checkout: [],
  setProduct: (data) => {
    set({products: data})
  },
  setCheckOut: (data) => {
    set({checkout: data})
  }
}));