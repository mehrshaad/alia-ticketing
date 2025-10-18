import { Card, Row, Col, Typography, Space } from "antd";
import {
  UserOutlined,
  CarryOutOutlined,
  UserAddOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const stats = [
    {
      title: "افزودن کاربر",
      value: "8",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <UserAddOutlined style={{ fontSize: "48px", color: "#2d4e71" }} />,
    },
    {
      title: "مدیریت کاربران",
      value: "8",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <TeamOutlined style={{ fontSize: "48px", color: "#2d4e71" }} />,
    },
    {
      title: "تمامی تیکت‌ها",
      value: "8",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <CarryOutOutlined style={{ fontSize: "48px", color: "#2d4e71" }} />,
    },
    {
      title: "مشتریان",
      value: "8",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      icon: <UserOutlined style={{ fontSize: "48px", color: "#2d4e71" }} />,
    },
  ];

  return (
    <Space direction="vertical" size="large" className="w-full">
      <div className="dashboard-header clipped-bottom-left-corner text-white">
        <Title level={1} style={{ color: "#fff" }} className="pb-2">
          بخش سوپر ادمین
        </Title>
        <Paragraph className="text-lg text-white opacity-90">
          به بخش سوپر ادمین خوش آمدید...
        </Paragraph>
      </div>

      <Row gutter={[5, 0]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={6} key={index}>
            <Card className="text-center dashboard-card hover:card-shadow transition-shadow">
              <Space direction="vertical" size="middle" className="w-full">
                <div className="flex justify-center">{stat.icon}</div>
                {/* <Title level={2} className="text-gray-900 mb-0">
                  {stat.value}
                </Title> */}
                <Title level={4} className="text-gray-900 mb-0">
                  {stat.title}
                </Title>
                <Paragraph className="text-sm text-gray-600 mb-0">
                  {stat.description}
                </Paragraph>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default Dashboard;
