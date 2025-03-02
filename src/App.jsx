import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Server from "./pages/Server";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/server", element: <Server /> },
        { path: "/settings", element: <Settings /> },
        { path: "/chat", element: <Chat /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
