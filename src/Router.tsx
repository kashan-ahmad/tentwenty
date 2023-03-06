import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes.
import App from "./App";
import RootPage from "./Root/RootPage";
import CasesPage from "./case/pages/CasesPage";
import CasePage from "./case/pages/CasePage/CasePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "cases",
        element: <CasesPage />,
      },
      {
        path: "cases/:slug",
        element: <CasePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
