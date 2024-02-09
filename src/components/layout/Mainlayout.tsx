import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin"> Dashboard</NavLink>,
//   },

//   {
//     key: "userManagement",
//     label: "user Management",
//     children: [
//       {
//         key: "create admin",
//         label: <NavLink to="/admin/create-admin"> Create Admin</NavLink>,
//       },
//       {
//         key: "create student",
//         label: <NavLink to="/admin/create-student"> Create Stduent</NavLink>,
//       },
//       {
//         key: "create faculty",
//         label: <NavLink to="/admin/create-faculty"> Create faculty</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "CourseManagement",
//     label: "Course Management",
//     children: [
//       {
//         key: "create course",
//         label: <NavLink to="/admin/create-admin"> Create Course</NavLink>,
//       },
//     ],
//   },
// ];

const Mainlayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
