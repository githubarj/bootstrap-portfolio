import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Routes/Layouts/AppLayout";
import ThemingKit from "./Routes/Test/ThemingKit";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "themes",
        element: <ThemingKit />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
