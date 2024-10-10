import { createContext, PropsWithChildren, useState } from "react";

export const DarkThemeContext = createContext<[boolean, () => void]>([
  true,
  () => {},
]);

export function DarkThemeProvider({ children }: PropsWithChildren) {
  const [dark, setDark] = useState(true);

  const toggleDarkTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <DarkThemeContext.Provider value={[dark, toggleDarkTheme]}>
      {children}
    </DarkThemeContext.Provider>
  );
}
