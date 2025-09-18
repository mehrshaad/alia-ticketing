"use client"
import { ChevronDown } from "lucide-react"

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "انتخاب کنید",
  error,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`input-field appearance-none pr-10 ${error ? "border-red-500 focus:ring-red-500" : ""} ${className}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default Select
