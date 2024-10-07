import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "@/pages/test-page";
import Main from "@/pages/main";
import Onboarding from "@/pages/onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
