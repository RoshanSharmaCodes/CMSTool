import "./App.css"
import { Breadcrumb, Layout, Menu, theme, ConfigProvider, Avatar } from "antd"
import { HomeOutlined, FormOutlined,BookOutlined, EditOutlined, MailOutlined,UserOutlined, UnorderedListOutlined,RadarChartOutlined,TeamOutlined,StarOutlined, RiseOutlined,CalendarOutlined } from  "@ant-design/icons"
import { useState } from "react"
import { Content } from "antd/es/layout/layout"
import Email from "./Component/Email/Email"
import Analytics from "./Component/Analytics/Analytics"
import Bookmarks from "./Component/Bookmarks/Bookmarks"
import Create from "./Component/Create Content/Create"
import Friends from "./Component/Friends/Friends"
import Home from "./Component/Home/Home"
import Reminder from "./Component/Reminder/Reminder"
import Todo from "./Component/Todo/Todo"
import Trending from "./Component/Trending/Trending"
import Workbook from "./Component/Workbook/Workbook"


function App() {
  const { Sider } = Layout
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }
  const items = [
    getItem("Home","1",<HomeOutlined/>),
    getItem("My Content", "2",<FormOutlined />),
    getItem("My Workbook", "3",<BookOutlined />),
    getItem("Create", "4",<EditOutlined />),
    getItem("Email List", "5",<MailOutlined />),
    getItem("Todo List", "6",<UnorderedListOutlined />),
    getItem("Analytics", "7",<RadarChartOutlined />),
    getItem("Trending", "8", <RiseOutlined />),
    getItem("Reminder", "9",<CalendarOutlined />),
    getItem("Friends", "10",<TeamOutlined />),
    getItem("BookMarks", "11",<StarOutlined />),
  ]

  const [collapsed, setCollapsed] = useState(false)
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="profileDiv">
            <Avatar size={64} icon={<UserOutlined />} shape="square" style={{backgroundColor:"#bababa",display:"flex",justifyContent:"center",marginTop:"10px"}}/>
            </div>
            
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
          </Sider>
          <Content>
          
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
