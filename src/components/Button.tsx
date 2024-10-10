import { useContext } from "react";
import { DarkThemeContext } from "../contexts/DarkThemeContext";

export function Button() {
  const [dark, toggleDark] = useContext(DarkThemeContext);

  return <button onClick={toggleDark}>{dark ? "nuit" : "jour"}</button>;
}
