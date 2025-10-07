"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout as AntLayout, Menu, Button, Badge, Avatar } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  CarryOutOutlined,
  CreditCardOutlined,
  LogoutOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = AntLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "داشبورد",
      children: [
        { key: "/tickets", label: "تمامی تیکت‌ها" },
        { key: "/units", label: "واحد" },
        { key: "/customers", label: "مشتریان" },
        { key: "/permissions", label: "دسترسی‌ها" },
      ],
    },
    { key: "/tickets", icon: <CarryOutOutlined />, label: "تیکت" },
    { key: "/users", icon: <UserOutlined />, label: "مدیریت سامانه" },
    {
      key: "/account-management",
      icon: <CreditCardOutlined />,
      label: "مدیریت حساب",
    },
    { key: "/logout", icon: <LogoutOutlined />, label: "خروج" },
  ];

  return (
    <AntLayout className="min-h-screen">
      <Header className="main-header px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Avatar className="bg-orange-600" shape="square">
            A
          </Avatar>
          <Link to="/" className="text-white hover:text-gray-300">
            خانه
          </Link>
          <Link to="/search" className="text-white hover:text-gray-300">
            جست و جو در آلیاسیس
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            خدمات آلیاسیس
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button icon={<SearchOutlined />} />
          {/* <Badge count={5}> */}
          <Button icon={<BellOutlined />} />
          {/* </Badge> */}
          <Button type="primary" icon={<PlusOutlined />} />
          <Avatar className="bg-orange-600" shape="square">
            A
          </Avatar>
        </div>
      </Header>

      <AntLayout>
        <Sider
          width={320}
          className="bg-slate-700 menu-sider"
          collapsible={false}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            className="bg-slate-700 text-white border-none"
            items={menuItems}
            onClick={({ key }) => {
              if (key !== "dashboard") {
                window.location.href = key;
              }
            }}
          />
        </Sider>

        <Content className="gradient-bg p-8">{children}</Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
