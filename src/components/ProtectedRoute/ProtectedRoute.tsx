import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated, setAuthenticatedLocal } = useAuthStore();

  useEffect(() => {
    const prepareState = () => {
      setAuthenticatedLocal();
    };

    prepareState();
  }, [setAuthenticatedLocal]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
