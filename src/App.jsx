import { createBrowserRouter } from "react-router-dom";


import Common from "./constant/common";
import Home from "./pages/Home";
import Pricing from "./components/Pricing";
import "./App.css";
import Calculations from "./components/Calculations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "pricing",
        element: <Pricing />,
      },

      {
        path: "calculations",
        element: <Calculations />,
      },
    ],
  },
]);
export { router };