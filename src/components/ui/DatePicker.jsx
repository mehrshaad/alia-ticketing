"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import PersianCalendar from "./PersianCalendar"

const DatePicker = ({
  label,
  value,
  onChange,
  placeholder = "انتخاب کنید",
  required = false,
  error,
  className = "",
}) => {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          readOnly
          onClick={() => setShowCalendar(!showCalendar)}
          className={`input-field cursor-pointer pr-10 ${error ? "border-red-500 focus:ring-red-500" : ""} ${className}`}
        />
        <Calendar
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          size={16}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {showCalendar && <PersianCalendar value={value} onChange={onChange} onClose={() => setShowCalendar(false)} />}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default DatePicker
