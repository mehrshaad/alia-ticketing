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
      <Header className="bg-slate-800 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="bg-orange-600" size="large">
            A
          </Avatar>
          <Button type="primary" icon={<PlusOutlined />} />
          <Badge count={5}>
            <Button icon={<BellOutlined />} />
          </Badge>
          <Button icon={<SearchOutlined />} />
        </div>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-white hover:text-gray-300">
            خانه
          </Link>
          <Link to="/search" className="text-white hover:text-gray-300">
            جست و جو در اپلیکیشن
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            خدمات اپلیکیشن
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-white text-slate-800 px-3 py-1 rounded text-sm font-medium">
            فارسی
          </div>
          <div className="text-xs text-white">
            <div>English</div>
          </div>
        </div>
      </Header>

      <AntLayout>
        <Sider width={320} className="bg-slate-700" collapsible={false}>
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
