import "./App.css"
import { Breadcrumb, Layout, Menu, theme, ConfigProvider, Avatar } from "antd"
import { HomeOutlined, FormOutlined,BookOutlined, EditOutlined, MailOutlined,UserOutlined, UnorderedListOutlined,RadarChartOutlined,TeamOutlined,StarOutlined, RiseOutlined,CalendarOutlined } from  "@ant-design/icons"
import { useState } from "react"
import { Content } from "antd/es/layout/layout"
import { Routes, Route, Link } from "react-router-dom"
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
import MyContent from "./Component/Content/Content"


function App() {
  const { Sider } = Layout
  function getItem(label, key, icon, children, type) {
    <Link to={label}>label</Link>
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }
  const items = [
    getItem(<Link to="/">Home</Link>,"1",<HomeOutlined/>),
    getItem(<Link to="/Content">My Content</Link>, "2",<FormOutlined />),
    getItem(<Link to="/Workbook">My Workbook</Link>, "3",<BookOutlined />),
    getItem(<Link to="/Create">Create</Link>, "4",<EditOutlined />),
    getItem(<Link to="/Email">Email List</Link>, "5",<MailOutlined />),
    getItem(<Link to="/Todo">Todo List</Link>, "6",<UnorderedListOutlined />),
    getItem(<Link to="/Analytics">Analytics</Link>, "7",<RadarChartOutlined />),
    getItem(<Link to="/Trending">Trending</Link>, "8", <RiseOutlined />),
    getItem(<Link to="/Reminder">Reminder</Link>, "9",<CalendarOutlined />),
    getItem(<Link to="/Friends">Friends</Link>, "10",<TeamOutlined />),
    getItem(<Link to="/Bookmarks">Bookmarks</Link>, "11",<StarOutlined />),
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
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Content" element={<MyContent/>} />
            <Route exact path="/Workbook" element={<Workbook/>} />
            <Route exact path="/Create" element={<Create/>} />
            <Route exact path="/Email" element={<Email/>} />
            <Route exact path="/Todo" element={<Todo/>} />
            <Route exact path="/Analytics" element={<Analytics/>} />
            <Route exact path="/Trending" element={<Trending/>} />
            <Route exact path="/Reminder" element={<Reminder/>} />
            <Route exact path="/Bookmarks" element={<Bookmarks/>} />
            <Route exact path="/Friends" element={<Friends/>} />
            </Routes>
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
