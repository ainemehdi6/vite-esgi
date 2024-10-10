import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DarkThemeProvider } from "./contexts/DarkThemeContext";
import { Home } from "./pages/Home";
import { Other } from "./pages/Other";
import { Error404 } from "./pages/errors/404";
import { Error403 } from "./pages/errors/403";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { ButtonAuth } from "./components/ButtonAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/other",
    element: (
      <ProtectedRoute>
        <Other />
      </ProtectedRoute>
    ),
  },
  {
    path: "/error/404",
    element: <Error404 />,
  },
  {
    path: "/error/403",
    element: <Error403 />,
  },
]);

function App() {
  return (
    <DarkThemeProvider>
      <AuthProvider>
        <ButtonAuth />
        <RouterProvider router={router} />
      </AuthProvider>
    </DarkThemeProvider>
  );
}

export default App;
