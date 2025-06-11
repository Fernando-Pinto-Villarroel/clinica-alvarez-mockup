"use client"

export default function DatePicker({ date, setDate }) {
  const formatDate = (date) => {
    if (!date) return ""
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value)
    setDate(newDate)
  }

  const dateValue = date ? date.toISOString().split("T")[0] : ""

  return (
    <div className="relative">
      <input
        type="date"
        value={dateValue}
        onChange={handleDateChange}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}
