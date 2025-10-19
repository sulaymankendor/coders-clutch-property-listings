import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

// PublicRoute.tsx
export function PublicRoutes() {
  const { isSignedIn, isLoaded } = useAuth();

  // Show loading state while checking auth
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
