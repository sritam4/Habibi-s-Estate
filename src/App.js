import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buy from "./Pages/Buy";
import Rent from "./Pages/Rent";
import Login from "./Pages/Login";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/for-buy",
        element: <Buy />,
      },
      {
        path: "/for-rent",
        element: <Rent />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
