"use client"
import { motion } from "framer-motion"

export function MenuAnimation({ activeItem }) {
  if (!activeItem) return null

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  )
}
