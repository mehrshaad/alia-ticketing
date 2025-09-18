"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"
import Select from "../components/ui/Select"
import Button from "../components/ui/Button"

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    department: "",
  })

  const departments = [
    { value: "it", label: "فناوری اطلاعات" },
    { value: "hr", label: "منابع انسانی" },
    { value: "finance", label: "مالی" },
    { value: "operations", label: "عملیات" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <Card.Header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronRight size={20} />
            <h2 className="text-xl font-semibold">افزودن کاربر جدید</h2>
          </div>
        </Card.Header>

        <Card.Content>
          {/* User Info Display */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-600">هویت</div>
                <div className="font-medium">Superadmin</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">واحد</div>
                <div className="font-medium">طرح و برنامه</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">نام کاربری</div>
                <div className="font-medium">Superadmin</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="نام کامل"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Input
              label="نام شرکت"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Input
              label="نام کاربری"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Input
              label="پست الکترونیکی"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Input
              label="رمز عبور"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Input
              label="تکرار رمز عبور"
              name="repeatPassword"
              type="password"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              placeholder="اینجا بنویسید"
              required
            />

            <Select
              label="انتخاب بخش"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              options={departments}
              placeholder="انتخاب کنید"
              required
            />

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                ثبت
              </Button>
              <Button type="button" variant="secondary" className="flex-1">
                پاک کردن فرم
              </Button>
            </div>
          </form>
        </Card.Content>
      </Card>
    </div>
  )
}

export default AddUser
