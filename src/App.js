import "./App.css"
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd"
import { HomeOutlined, FormOutlined,BookOutlined, EditOutlined, MailOutlined, UnorderedListOutlined,RadarChartOutlined,TeamOutlined,StarOutlined, RiseOutlined,CalendarOutlined } from  "@ant-design/icons"
import { useState } from "react"

function App() {
  const { Header, Content, Footer, Sider } = Layout
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
            <div
              style={{
                height: 32,
                margin: 16,
                background: "rgba(255, 255, 255, 0.2)",
              }}
            />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
          </Sider>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
