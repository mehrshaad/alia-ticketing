"use client"
import { Card, Form, Input, Select, Button, Typography, Space, DatePicker, Upload, Row, Col } from "antd"
import { RightOutlined, UploadOutlined, CalendarOutlined } from "@ant-design/icons"

const { Title } = Typography
const { TextArea } = Input
const { Option } = Select

const CreateTicket = () => {
  const [form] = Form.useForm()

  const categories = [
    { value: "technical", label: "فنی" },
    { value: "support", label: "پشتیبانی" },
    { value: "billing", label: "مالی" },
    { value: "general", label: "عمومی" },
  ]

  const types = [
    { value: "bug", label: "خطا" },
    { value: "feature", label: "درخواست ویژگی" },
    { value: "support", label: "پشتیبانی" },
    { value: "question", label: "سوال" },
  ]

  const onFinish = (values) => {
    console.log("Ticket created:", values)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card
        title={
          <Space>
            <RightOutlined />
            <span>ثبت تیکت</span>
          </Space>
        }
      >
        {/* User Info Display */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <Row gutter={16} className="text-center">
            <Col span={8}>
              <div className="text-sm text-gray-600">هویت</div>
              <div className="font-medium">Superadmin</div>
            </Col>
            <Col span={8}>
              <div className="text-sm text-gray-600">واحد</div>
              <div className="font-medium">طرح و برنامه</div>
            </Col>
            <Col span={8}>
              <div className="text-sm text-gray-600">نام کاربری</div>
              <div className="font-medium">Superadmin</div>
            </Col>
          </Row>
        </div>

        <Form form={form} layout="vertical" onFinish={onFinish} requiredMark="optional">
          <Form.Item
            label="دسته‌بندی تیکت"
            name="category"
            rules={[{ required: true, message: "لطفا دسته‌بندی را انتخاب کنید" }]}
          >
            <Select placeholder="انتخاب کنید">
              {categories.map((cat) => (
                <Option key={cat.value} value={cat.value}>
                  {cat.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="نوع تیکت" name="type" rules={[{ required: true, message: "لطفا نوع تیکت را انتخاب کنید" }]}>
            <Select placeholder="انتخاب کنید">
              {types.map((type) => (
                <Option key={type.value} value={type.value}>
                  {type.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="عنوان" name="title" rules={[{ required: true, message: "لطفا عنوان را وارد کنید" }]}>
            <Input placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="توضیحات"
            name="description"
            rules={[{ required: true, message: "لطفا توضیحات را وارد کنید" }]}
          >
            <TextArea rows={4} placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="شماره قرارداد"
            name="contractNumber"
            rules={[{ required: true, message: "لطفا شماره قرارداد را وارد کنید" }]}
          >
            <Input placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="سریال دستگاه"
            name="deviceSerial"
            rules={[{ required: true, message: "لطفا سریال دستگاه را وارد کنید" }]}
          >
            <Input placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="نام شخص"
            name="personName"
            rules={[{ required: true, message: "لطفا نام شخص را وارد کنید" }]}
          >
            <Input placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="شماره تماس"
            name="contactNumber"
            rules={[{ required: true, message: "لطفا شماره تماس را وارد کنید" }]}
          >
            <Input placeholder="اینجا بنویسید" />
          </Form.Item>

          <Form.Item
            label="تاریخ شروع قرارداد"
            name="startDate"
            rules={[{ required: true, message: "لطفا تاریخ شروع را انتخاب کنید" }]}
          >
            <DatePicker className="w-full" placeholder="انتخاب کنید" suffixIcon={<CalendarOutlined />} />
          </Form.Item>

          <Form.Item
            label="تاریخ پایان قرارداد"
            name="endDate"
            rules={[{ required: true, message: "لطفا تاریخ پایان را انتخاب کنید" }]}
          >
            <DatePicker className="w-full" placeholder="انتخاب کنید" suffixIcon={<CalendarOutlined />} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="آپلود فایل پیوست" name="attachment1">
                <Upload>
                  <Button icon={<UploadOutlined />} block>
                    آپلود فایل پیوست
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="آپلود قابل پیوست" name="attachment2">
                <Button block>آپلود قابل پیوست</Button>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="جزئیات لنگ" name="details">
            <TextArea rows={4} placeholder="اینجا بنویسید" />
          </Form.Item>

          <Row gutter={16} className="pt-4">
            <Col span={12}>
              <Button type="primary" htmlType="submit" block size="large">
                ثبت
              </Button>
            </Col>
            <Col span={12}>
              <Button block size="large" onClick={() => form.resetFields()}>
                پاک کردن فرم
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default CreateTicket
