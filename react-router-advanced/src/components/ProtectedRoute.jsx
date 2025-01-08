import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Simulate authentication status
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
