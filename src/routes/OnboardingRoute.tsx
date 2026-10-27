import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function OnboardingRoute() {
  const { token, user } = useAuth();

  if (!token || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          redirectTo: window.location.pathname,
        }}
      />
    );
  }

  if (!user.is_email_verified) {
    return <Navigate to="/verify-email" replace />;
  }

  if (!user.is_profile_completed) {
    return <Outlet />;
  }

  return <Navigate to="/dashboard" replace />;
}
