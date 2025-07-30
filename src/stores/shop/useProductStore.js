import React from 'react';
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProduct: (data) => {
    set({products: data})
  }
}));