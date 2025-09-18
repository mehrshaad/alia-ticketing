"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { X, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

const TicketDetail = () => {
  const { id } = useParams()
  const [expandedSteps, setExpandedSteps] = useState({})

  const ticketData = {
    id: "1404050180001",
    title: "Test Tech New",
    status: "closed",
    createdDate: "1404/05/18",
    details: {
      all: "1404050180001",
      notifications: "توضیحات",
      ticketNumber: "شماره تیکت",
      title: "Test Tech New",
      supporter: "پشتیبان",
      responsibleUnit: "واحد مسئول",
      contractNumber: "1334",
      deviceSerial: "5306644",
      contactPerson: "شماره کانتکت پرسن",
      contactNumber: "09113346567",
      status: "وضعیت",
      contractStartDate: "2025/08/09-00:00:00",
      contractEndDate: "2025/08/09-00:00:00",
      problemTitle: "Storage Device Issues",
    },
  }

  const trackingSteps = [
    {
      id: 1,
      title: "مرحله اول",
      status: "completed",
      type: "ساخت",
      expanded: false,
    },
    {
      id: 2,
      title: "مرحله تحلیل و بررسی فنی: انتصاص به علی آقابابایی",
      status: "completed",
      type: "انتصاص",
      expanded: false,
      details: {
        assignedTo: "علی آقابابایی",
        assignedFrom: "واحد لورم",
        assignedBy: "تحلیل و بررسی",
        stage: "مرحله",
        name: "نام",
        user: "Test Tech New",
      },
    },
    {
      id: 3,
      title: "مرحله تحلیل و بررسی فنی",
      status: "pending",
      type: "به روزرسانی",
      expanded: false,
    },
    {
      id: 4,
      title: "مرحله تحلیل و بررسی فنی",
      status: "pending",
      type: "تایید",
      expanded: false,
    },
    {
      id: 5,
      title: "مرحله تحویل رسید کالا به مشتری: انتصاص به فرید شکری",
      status: "pending",
      type: "تایید",
      expanded: false,
    },
    {
      id: 6,
      title: "مرحله تحویل رسید کالا به مشتری",
      status: "pending",
      type: "راضی‌سازی",
      expanded: false,
    },
    {
      id: 7,
      title: "مرحله بررسی نتیجه پاسخ کارشناسان: انتصاص به فرید شکری",
      status: "pending",
      type: "انتصاص",
      expanded: false,
    },
    {
      id: 8,
      title: "مرحله تحویل رسید کالا به مشتری",
      status: "rejected",
      type: "رد",
      expanded: false,
    },
    {
      id: 9,
      title: "مرحله تحلیل و بررسی فنی: انتصاص به فرید شکری",
      status: "pending",
      type: "انتصاص",
      expanded: false,
    },
    {
      id: 10,
      title: "مرحله تحلیل و بررسی فنی",
      status: "completed",
      type: "تایید",
      expanded: false,
    },
    {
      id: 11,
      title: "مرحله تحویل رسید کالا به مشتری: انتصاص به فرید شکری",
      status: "pending",
      type: "انتصاص",
      expanded: false,
    },
    {
      id: 12,
      title: "مرحله تحویل رسید کالا به مشتری",
      status: "completed",
      type: "تایید",
      expanded: false,
    },
    {
      id: 13,
      title: "...........",
      status: "pending",
      type: "انتصاص",
      expanded: false,
    },
    {
      id: 14,
      title: "مرحله: تایید مشتری",
      status: "completed",
      type: "پایان",
      expanded: false,
    },
  ]

  const toggleStep = (stepId) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "pending":
        return "bg-blue-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "ساخت":
        return "bg-teal-500"
      case "انتصاص":
        return "bg-gray-500"
      case "به روزرسانی":
        return "bg-yellow-500"
      case "تایید":
        return "bg-green-500"
      case "راضی‌سازی":
        return "bg-red-500"
      case "رد":
        return "bg-red-600"
      case "پایان":
        return "bg-gray-800"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold">تیکت {id}</h1>
      </div>

      {/* Ticket Status Alert */}
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center gap-2">
        <AlertTriangle size={20} />
        <span>تیکت بسته شده است.</span>
        <button className="mr-auto">
          <X size={16} />
        </button>
      </div>

      {/* Ticket Details */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right p-3 font-medium">عنوان</th>
                <th className="text-right p-3 font-medium">شماره تیکت</th>
                <th className="text-right p-3 font-medium">توضیحات</th>
                <th className="text-right p-3 font-medium">All</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">پشتیبان</td>
                <td className="p-3">واحد مسئول</td>
                <td className="p-3">فنی</td>
                <td className="p-3">شماره قرارداد</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">نام کانتکت پرسن</td>
                <td className="p-3">شماره کانتکت پرسن</td>
                <td className="p-3">Salekfard</td>
                <td className="p-3">5306644</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">تاریخ شروع قرارداد</td>
                <td className="p-3">تاریخ پایان قرارداد</td>
                <td className="p-3">2025/08/09-00:00:00</td>
                <td className="p-3">وضعیت</td>
              </tr>
              <tr>
                <td className="p-3" colSpan="4">
                  عنوان مشکل: Storage Device Issues
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Tracking Steps */}
      <Card>
        <Card.Header>
          <Card.Title>مراحل پیگیری تیکت</Card.Title>
        </Card.Header>
        <Card.Content className="space-y-2">
          {trackingSteps.map((step) => (
            <div key={step.id} className="border rounded-lg">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-center gap-3">
                  <button className="text-gray-400">
                    {expandedSteps[step.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <span className={`px-3 py-1 rounded-full text-white text-xs ${getTypeColor(step.type)}`}>
                    {step.type}
                  </span>
                </div>
                <div className="flex-1 text-right mr-4">
                  <span className="text-sm">{step.title}</span>
                </div>
                <div className="text-sm text-gray-500">{step.id}. مرحله</div>
              </div>

              {expandedSteps[step.id] && step.details && (
                <div className="px-4 pb-4 border-t bg-gray-50">
                  <div className="grid grid-cols-6 gap-4 text-sm mt-3">
                    <div>
                      <div className="font-medium">نام</div>
                      <div>{step.details.user}</div>
                    </div>
                    <div>
                      <div className="font-medium">مرحله</div>
                      <div>{step.details.stage}</div>
                    </div>
                    <div>
                      <div className="font-medium">از واحد</div>
                      <div>{step.details.assignedFrom}</div>
                    </div>
                    <div>
                      <div className="font-medium">به واحد</div>
                      <div>{step.details.assignedTo}</div>
                    </div>
                    <div>
                      <div className="font-medium">کاربر</div>
                      <div>{step.details.assignedBy}</div>
                    </div>
                    <div>
                      <div className="font-medium">قابل پیوست</div>
                      <div>-</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Card.Content>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button variant="danger">رد کردن</Button>
        <Button variant="secondary">به روزرسانی</Button>
        <Button variant="primary">تایید</Button>
      </div>
    </div>
  )
}

export default TicketDetail
