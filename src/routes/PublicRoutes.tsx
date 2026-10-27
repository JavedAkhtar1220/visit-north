import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function PublicRoutes() {
  const { token, user } = useAuth();

  if (token && user) {
    if (!user.is_email_verified) {
      return <Navigate to="/verify-email" replace />;
    }

    if (!user.is_profile_completed) {
      return <Navigate to="/onboarding" replace />;
    }

    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
