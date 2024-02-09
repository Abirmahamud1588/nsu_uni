import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Contat from "../pages/Contat";
import Admindashboard from "../pages/admin/Admindashboard";
import Createstudent from "../pages/admin/Createstudent";

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
    children: [
      {
        index: true,
        element: <Admindashboard></Admindashboard>,
      },
      {
        path: "create-student",
        element: <Createstudent></Createstudent>,
      },
    ],
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
