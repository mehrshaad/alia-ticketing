"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, Table, Button, Typography, Space, Pagination } from "antd"
import { EyeOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

const AllTickets = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize] = useState(4)

  const tickets = [
    {
      key: "1",
      id: "1404050180001",
      title: "Test Tech New",
      responsibleUnit: "واحد لورم ایپسوم",
      responsiblePerson: "علی افتخاری نیا",
      createdDate: "1404/05/18",
      status: "open",
    },
    {
      key: "2",
      id: "1404050180002",
      title: "Test Tech New",
      responsibleUnit: "واحد لورم ایپسوم",
      responsiblePerson: "علی افتخاری نیا",
      createdDate: "1404/05/18",
      status: "open",
    },
    {
      key: "3",
      id: "1404050180003",
      title: "Test Tech New",
      responsibleUnit: "واحد لورم ایپسوم",
      responsiblePerson: "علی افتخاری نیا",
      createdDate: "1404/05/18",
      status: "open",
    },
    {
      key: "4",
      id: "1404050180004",
      title: "Test Tech New",
      responsibleUnit: "واحد لورم ایپسوم",
      responsiblePerson: "علی افتخاری نیا",
      createdDate: "1404/05/18",
      status: "open",
    },
  ]

  const columns = [
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Link to={`/ticket/${record.id}`}>
          <Button type="primary" size="small" icon={<EyeOutlined />}>
            نمایش
          </Button>
        </Link>
      ),
    },
    {
      title: "تاریخ ثبت",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "فرد مسئول",
      dataIndex: "responsiblePerson",
      key: "responsiblePerson",
    },
    {
      title: "واحد مسئول",
      dataIndex: "responsibleUnit",
      key: "responsibleUnit",
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ticket ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="font-mono">{text}</span>,
    },
  ]

  return (
    <Space direction="vertical" size="large" className="w-full">
      <div className="text-center text-white">
        <Title level={1} className="text-white mb-2">
          تمامی تیکت‌ها
        </Title>
        <Paragraph className="text-lg text-white opacity-90">در این بخش تمامی تیکت ها را مشاهده میکنید</Paragraph>
      </div>

      <Card>
        <Table columns={columns} dataSource={tickets} pagination={false} scroll={{ x: true }} />

        <div className="flex justify-center pt-4 border-t">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={40}
            onChange={setCurrentPage}
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </div>
      </Card>
    </Space>
  )
}

export default AllTickets
