import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes.
import App from "./App";
import LandingPage from "./Landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
