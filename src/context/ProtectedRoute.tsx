import type { PropsWithChildren } from "react";
import type { AppUser } from "./AuthProvider";
import { useAuth } from "../hooks/useAuth";
import { PermissionDenied } from "../pages/static/PermissionDenied";

type ProtectedRouteProps = PropsWithChildren & {
  allowedRoles?: AppUser["roles"][];
};

export const ProtectedRoute = ({
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  const auth = useAuth();

  // TODO: Change to login page
  // This is pretty much imposible
  if (auth.user === undefined) {
    return <div>User is undefined</div>;
  }

  if (
    auth.user === null ||
    (allowedRoles && !allowedRoles.includes(auth.user.roles))
  ) {
    return <PermissionDenied />;
  }

  return children;
};
