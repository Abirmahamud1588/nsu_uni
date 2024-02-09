import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { adminsidebar } from "../../routes/admit.routes";

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
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Nsu Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminsidebar}
        />
      </Sider>
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
