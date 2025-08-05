import { create } from "zustand";
import productApi from '../../services/apis/product.api';
import purchaseApi from '../../services/apis/purchase.api';
import userApi from '../../services/apis/user.api';

export const useProductStore = create((set) => ({
  products: [],
  checkout: [],
  cart: [],
  profileDetail: {},
  paids: [],
  setProduct: (data) => set({ products: data }),
  setCheckOut: (data) => set({ checkout: data }),
  setCart: (data) => set({ cart: data }),
  setProfileDetail: (data) => set({ profileDetail: data }),
  setCart: (data) => set({paid: data}),

  // Fetch all
  fetchAll: async () => {
    const product = await productApi.getAllProducts();
    set({ products: product.data.products });

    const cart = await purchaseApi.getPurchases({ status: -1 });
    set({ cart: cart.data });

    const paids = await purchaseApi.getPurchases({ status: 1 });
    set({ paids: paids.data });

    const profile = await userApi.getProfile();
    set({ profileDetail: profile.data });
  },

  // Fetch specific
  fetchProducts: async () => {
    const product = await productApi.getAllProducts();
    set({ products: product.data.products });
  },
  fetchCart: async () => {
    const cart = await purchaseApi.getPurchases({ status: -1 });
    set({ cart: cart.data });
  },
  fetchProfile: async () => {
    const profile = await userApi.getProfile();
    set({ profileDetail: profile.data });
  }
}));
