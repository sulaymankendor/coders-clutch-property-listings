// ProtectedRoute.tsx
import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import { WifiOff, RefreshCw } from "lucide-react";

export function ProtectedRoutes() {
  const { isSignedIn, isLoaded } = useAuth();
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState<boolean>(false);

  useEffect(() => {
    // Handle online status changes
    const handleOnline = (): void => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = (): void => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Set a timeout to show offline message if loading takes too long
    let timeoutId: number | undefined;
    if (!isLoaded && !isOnline) {
      timeoutId = window.setTimeout(() => {
        setShowOfflineMessage(true);
      }, 5000); // Show message after 5 seconds of loading with no network
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isLoaded, isOnline]);

  // Show network error if offline
  if (!isOnline || (showOfflineMessage && !isLoaded)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <WifiOff className="w-12 h-12 text-red-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Internet Connection
          </h2>

          <p className="text-gray-600 mb-6">
            Please check your internet connection and try again. Make sure
            you're connected to WiFi or mobile data.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Retry Connection
          </button>

          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Troubleshooting tips:</strong>
            </p>
            <ul className="text-xs text-gray-600 text-left mt-2 space-y-1">
              <li>• Check your WiFi or mobile data is turned on</li>
              <li>• Try moving to an area with better signal</li>
              <li>• Restart your router if using WiFi</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while checking auth (only if online)
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className="mt-4 text-gray-600 text-sm">Loading...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
