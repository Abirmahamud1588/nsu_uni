import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Contat from "../pages/Contat";

import { adminPath } from "./admit.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contat></Contat>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPath),
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
