import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const [auth] = useContext(AuthContext);

  return auth ? children : <Navigate to="/error/403" />;
}
