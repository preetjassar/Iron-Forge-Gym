import { createBrowserRouter } from "react-router-dom";


import Common from "./constant/common";
import Home from "./pages/Home";
import Pricing from "./components/Pricing";
import "./App.css";
import Calculations from "./components/Calculations";
import Programs from "./components/Programs";
import Contact from "./components/Contact";

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
        path: "programs",
        element: <Programs />,
      },

      {
        path: "pricing",
        element: <Pricing />,
      },

      {
        path: "calculations",
        element: <Calculations />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export { router };