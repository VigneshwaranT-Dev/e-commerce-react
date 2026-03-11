import { createBrowserRouter } from "react-router-dom";

import { Homepage } from "@/pages";
import { MainLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
