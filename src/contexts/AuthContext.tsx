import { createContext, PropsWithChildren, useState } from "react";

type AuthContextType = [boolean, () => void];
export const AuthContext = createContext<AuthContextType>([false, () => {}]);

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={[auth, toggleAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
