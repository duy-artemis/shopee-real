import { create } from "zustand";
import productApi from "../../services/apis/product.api";
import purchaseApi from "../../services/apis/purchase.api";
import userApi from "../../services/apis/user.api";
import handleUnauthorized  from "../../hooks/handleUnauthorized";



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
  setPaids: (data) => set({ paids: data }),

  // Fetch all
  fetchAll: async () => {
    try {
      const product = await productApi.getAllProducts();
      set({ products: product?.data?.products ?? [] });
    } catch (err) {
      handleUnauthorized();
    }

    try {
      const cart = await purchaseApi.getPurchases({ status: -1 });
      set({ cart: cart?.data ?? [] });
    } catch (err) {
      handleUnauthorized();
    }

    try {
      const paids = await purchaseApi.getPurchases({ status: 1 });
      set({ paids: paids?.data ?? [] });
    } catch (err) {
      handleUnauthorized();
    }

    try {
      const profile = await userApi.getProfile();
      set({ profileDetail: profile?.data ?? {} });
    } catch (err) {
      handleUnauthorized();
    }
  },

  // Fetch specific
  fetchProducts: async () => {
    try {
      const res = await productApi.getAllProducts();
      set({ products: res?.data?.products ?? [] });
    } catch (err) {
      console.log("Error in fetchProducts:", err);
      if (err?.response?.status === 401) {
        console.log("401 detected in fetchProducts - calling handleUnauthorized");
        handleUnauthorized();
      }
    }
  },

  fetchCart: async () => {
    try {
      const res = await purchaseApi.getPurchases({ status: -1 });
      set({ cart: res?.data ?? [] });
    } catch (err) {
      if (err?.response?.status === 401) handleUnauthorized();
    }
  },

  fetchProfile: async () => {
    try {
      const res = await userApi.getProfile();
      set({ profileDetail: res?.data ?? {} });
    } catch (err) {
      if (err?.response?.status === 401) handleUnauthorized();
    }
  },
}));
