"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PersianCalendar = ({ value, onChange, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(4) // شهریور (September)
  const [currentYear, setCurrentYear] = useState(1404)

  const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ]

  const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    const days = []
    const totalDays = daysInMonth[currentMonth]

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < 6; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(day)
    }

    return days
  }

  const handleDateSelect = (day) => {
    if (day) {
      const selectedDate = `${currentYear}/${String(currentMonth + 1).padStart(2, "0")}/${String(day).padStart(2, "0")}`
      onChange(selectedDate)
      onClose()
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const days = generateCalendarDays()

  return (
    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4 min-w-80">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronRight size={16} />
        </button>
        <div className="text-center">
          <div className="font-semibold">{monthNames[currentMonth]}</div>
          <div className="text-sm text-gray-600">{currentYear}</div>
        </div>
        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Week Days Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-gray-600 p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(day)}
            className={`p-2 text-sm rounded hover:bg-blue-100 ${
              day ? "text-gray-900" : "text-transparent cursor-default"
            } ${day === 17 ? "bg-blue-600 text-white" : ""}`}
            disabled={!day}
          >
            {day || ""}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PersianCalendar
