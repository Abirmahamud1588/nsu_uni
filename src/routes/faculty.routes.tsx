import Facultydashboard from "../pages/facutly/Facultydashboard";
import Oferredcourse from "../pages/facutly/Oferredcourse";

export const facultyPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Facultydashboard />,
  },
  {
    name: "Ofered Course",
    path: "offered-course",
    element: <Oferredcourse></Oferredcourse>,
  },
  //   {
  //     name: "User Management",
  //     children: [
  //       {
  //         name: "create Admin",
  //         path: "create-admin",
  //         element: <Createadmin></Createadmin>,
  //       },
  //       {
  //         name: "Create Student",
  //         path: "create-student",
  //         element: <Createstudent></Createstudent>,
  //       },
  //       {
  //         name: "Create faculty",
  //         path: "create-faculty",
  //         element: <Createfaculty></Createfaculty>,
  //       },
  //     ],
  //   },
];
