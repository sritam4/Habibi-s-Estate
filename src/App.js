import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./Pages/List";
import Login from "./Pages/Login";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";
import Agencies from "./Pages/Agencies";
import About from "./Pages/About";
import Details from "./Pages/Details";
import { Provider } from "react-redux";
import store from "./Utils/store";

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
        path: "/list",
        element: <List />,
      },
      {
        path: "/agencies",
        element: <Agencies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details",
        element: <Details />,
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
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
