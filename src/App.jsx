import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Routes/Layouts/AppLayout";
import ThemingKit from "./Routes/Test/ThemingKit";
import LandingPage from "./Routes/LandingPage/LandingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
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
