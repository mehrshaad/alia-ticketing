"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react"
import Card from "../components/ui/Card"
import Table from "../components/ui/Table"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Badge from "../components/ui/Badge"
import { mockUsers } from "../utils/mockData"

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.includes(searchTerm) || user.username.includes(searchTerm) || user.email.includes(searchTerm),
  )

  const getStatusBadge = (status) => {
    return status === "active" ? <Badge variant="success">فعال</Badge> : <Badge variant="danger">غیرفعال</Badge>
  }

  const getRoleBadge = (role) => {
    const roleMap = {
      admin: { label: "مدیر", variant: "primary" },
      support: { label: "پشتیبان", variant: "info" },
      security: { label: "امنیت", variant: "warning" },
      user: { label: "کاربر", variant: "default" },
    }

    const roleInfo = roleMap[role] || roleMap.user
    return <Badge variant={roleInfo.variant}>{roleInfo.label}</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-2">مدیریت کاربران</h1>
        <p className="text-lg opacity-90">مدیریت و کنترل کاربران سیستم</p>
      </div>

      {/* Search and Actions */}
      <Card>
        <Card.Content>
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="جستجو در کاربران..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <Link to="/add-user">
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                افزودن کاربر جدید
              </Button>
            </Link>
          </div>
        </Card.Content>
      </Card>

      {/* Users Table */}
      <Card>
        <Card.Header>
          <Card.Title>لیست کاربران ({filteredUsers.length} کاربر)</Card.Title>
        </Card.Header>
        <Card.Content className="p-0">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>عملیات</Table.Head>
                <Table.Head>تاریخ ایجاد</Table.Head>
                <Table.Head>وضعیت</Table.Head>
                <Table.Head>نقش</Table.Head>
                <Table.Head>بخش</Table.Head>
                <Table.Head>ایمیل</Table.Head>
                <Table.Head>نام کاربری</Table.Head>
                <Table.Head>نام کامل</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredUsers.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        <Eye size={14} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit size={14} />
                      </Button>
                      <Button size="sm" variant="danger">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{user.createdDate}</Table.Cell>
                  <Table.Cell>{getStatusBadge(user.status)}</Table.Cell>
                  <Table.Cell>{getRoleBadge(user.role)}</Table.Cell>
                  <Table.Cell>{user.department}</Table.Cell>
                  <Table.Cell className="text-left font-mono text-sm">{user.email}</Table.Cell>
                  <Table.Cell className="font-mono">{user.username}</Table.Cell>
                  <Table.Cell className="font-medium">{user.fullName}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          {filteredUsers.length === 0 && <div className="text-center py-8 text-gray-500">هیچ کاربری یافت نشد</div>}
        </Card.Content>
      </Card>
    </div>
  )
}

export default UserManagement
