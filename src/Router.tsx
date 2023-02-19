import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes.
import App from "./App";
import ServicesPage from "./services/ServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ServicesPage />,
      },
      {
        path: "test",
        element: (
          <div>
            <>Hello World{console.log("Navigated")}</>
          </div>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
