"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileHeaderProps {
  onMenuClick: () => void
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="hidden bg-white shadow-sm border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onMenuClick} className="text-gray-600 hover:text-gray-900">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-900">Privacy Policy</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
    </header>
  )
}
