import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPath } from "../../routes/admit.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";
const { Sider } = Layout;

const userrole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "admin";
  let sidebaritem;

  switch (role) {
    case userrole.ADMIN:
      sidebaritem = sidebarGenerator(adminPath, userrole.ADMIN);
      break;

    case userrole.FACULTY:
      sidebaritem = sidebarGenerator(facultyPath, userrole.FACULTY);
      break;

    case userrole.STUDENT:
      sidebaritem = sidebarGenerator(studentPath, userrole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
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
        items={sidebaritem}
      />
    </Sider>
  );
};

export default Sidebar;
