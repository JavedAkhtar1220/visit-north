import { Navigate, Outlet } from "react-router";
// import { useAuth } from "@/contexts/AuthContext";

export default function VerifyEmailRoute() {
  // const { token, user } = useAuth();
  const user = {};
  const token = null;

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
    return <Outlet />;
  }

  if (!user.is_profile_completed) {
    return <Navigate to="/onboarding" />;
  }

  return <Navigate to="/dashboard" replace />;
}
