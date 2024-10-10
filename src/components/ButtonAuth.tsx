import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function ButtonAuth() {
  const [auth, toggleAuth] = useContext(AuthContext);

  return (
    <button onClick={toggleAuth}>
      {auth ? "se déconnecter" : "connexion"}
    </button>
  );
}
