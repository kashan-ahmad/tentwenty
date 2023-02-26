import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes.
import App from "./App";
import RootPage from "./Root/RootPage";
import ServicesPage from "./services/ServicesPage";

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
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "test",
        element: (
          <div>
            <>Hello World</>
          </div>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
