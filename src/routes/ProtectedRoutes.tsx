import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "@/app-layout/AppLayout";
import { useAuth } from "@/contexts/AuthContext";
import type { UserDTO } from "@/types/user";

interface ProtectedRouteProps {
  requiredRole: UserDTO["user_type"] | null;
}

export default function ProtectedRoutes({ requiredRole }: ProtectedRouteProps) {
  const { token, user } = useAuth();

  // if (!token || !user) {
  //   return (
  //     <Navigate
  //       to="/login"
  //       replace
  //       state={{
  //         redirectTo: window.location.pathname,
  //       }}
  //     />
  //   );
  // }

  // if (!user.is_email_verified) {
  //   return <Navigate to="/verify-email" replace />;
  // }

  // if (!user.is_profile_completed) {
  //   return <Navigate to="/onboarding" replace />;
  // }

  // const role = user.user_type;

  return (
    <AppLayout>
      <RenderProtectedContent
        requiredRole={requiredRole}
        // userRole={role}
      />
    </AppLayout>
  );
}

function RenderProtectedContent(
  {
    // requiredRole,
    // userRole,
  }: {
    requiredRole: ProtectedRouteProps["requiredRole"];
    userRole: UserDTO["user_type"];
  },
) {
  // if (requiredRole === null) {
  //   return <Outlet />;
  // }

  // if (requiredRole !== userRole) {
  //   return <Navigate to="/dashboard" />;
  // }

  return <Outlet />;
}
