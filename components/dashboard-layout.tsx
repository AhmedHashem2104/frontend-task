"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { MobileHeader } from "./mobile-header"
import { MainContent } from "./main-content"

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setIsSidebarOpen(true)
  }

  const handleSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Header */}
      <MobileHeader onMenuClick={handleMenuClick} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <MainContent />
      </div>
    </div>
  )
}
