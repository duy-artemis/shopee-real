import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = create(
  persist(
    (set) => ({
      user: JSON.parse(localStorage.getItem("user-account"))?.user,
      setUser: (newUser) => {
        console.log("Saving user:", newUser);
        set({ user: newUser });
      },
    }),
    {
      name: "user-account", // key in localStorage
      // optional: add custom serialization if needed
    }
  )
);

export default authStore;
