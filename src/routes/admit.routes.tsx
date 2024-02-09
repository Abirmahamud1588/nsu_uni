import Admindashboard from "../pages/admin/Admindashboard";
import Createadmin from "../pages/admin/Createadmin";
import Createfaculty from "../pages/admin/Createfaculty";
import Createstudent from "../pages/admin/Createstudent";
export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Admindashboard></Admindashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "create Admin",
        path: "create-admin",
        element: <Createadmin></Createadmin>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <Createstudent></Createstudent>,
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: <Createfaculty></Createfaculty>,
      },
    ],
  },
];

// export const adminsidebar = adminPath2.reduce((acc: TSidebar[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }
//   return acc;
// }, []);

// type TRoute = {
//   path: string;
//   element: ReactNode;
// };
// export const admiRoutes = adminPath2.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       // Corrected 'foreach' to 'forEach'
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminPath = [
//   {
//     index: true,
//     element: <Admindashboard></Admindashboard>,
//   },
//   {
//     path: "create-student",
//     element: <Createstudent></Createstudent>,
//   },
//   {
//     path: "create-admin",
//     element: <Createadmin></Createadmin>,
//   },
//   {
//     path: "create-faculty",
//     element: <Createfaculty></Createfaculty>,
//   },
// ];
