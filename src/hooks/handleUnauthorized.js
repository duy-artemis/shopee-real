import { message } from "antd";
import authStore from "../stores/auth/authStore";

export default function handleUnauthorized() {
  console.log("handleUnauthorized called!");
  console.log("Unauthorized access - clearing user and redirecting...");
  
  // Show message to user
  message.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
  
  // Clear the auth state (this will also clear localStorage due to persist)
  authStore.getState().setUser(null);
  console.log("User cleared from store");
  
  // Small delay to show the message before redirect
  setTimeout(() => {
    console.log("Redirecting to /login");
    window.location.href = "/login";
  }, 1500);
}
