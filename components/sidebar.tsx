"use client"

import { useState } from "react"
import { LayoutDashboard, Users, CreditCard, Calendar, Settings, LogOut, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { NavigationItem, SidebarProps } from "@/types/navigation"

const navigationItems: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    isActive: true,
  },
  {
    id: "teams",
    label: "Teams",
    icon: Users,
    href: "/teams",
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: Calendar,
    href: "/attendance",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar({ isOpen = true, onClose, className = "" }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked")
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64
          h-[95%]
          my-auto
          ml-10
          bg-white rounded-none lg:rounded-3xl shadow-lg
          lg:flex 
          hidden
          flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${className}
        `}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 mt-20">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id

            return (
              <div key={item.label} className="relative pl-6">
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`relative w-full flex items-center gap-4 px-6 h-[50px] text-left transition-all duration-200 z-50 ${isActive ? "text-[#ffffff] bg-[#0077cc] rounded-l-full" : "text-[#1a1a1a] rounded-full"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-lg">{item.label}</span>

                  <span
                    className={`absolute right-0 top-[-50px] h-full w-10 rounded-r-full transition-all duration-200 z-50 ${isActive ? "bg-white" : "hidden"
                      }`}
                  />
                  <span
                    className={`absolute right-0 top-[-20px] h-full w-5 rounded-l-full transition-all duration-200 ${isActive ? "bg-[#0077cc]" : "hidden"
                      }`}

                  />

                  <span
                    className={`absolute right-0 bottom-[-50px] h-full w-10 rounded-r-full transition-all duration-200 z-50 ${isActive ? "bg-white" : "hidden"
                      }`}
                  />
                  <span
                    className={`absolute right-0 bottom-[-20px] h-full w-5 rounded-l-full transition-all duration-200 ${isActive ? "bg-[#0077cc]" : "hidden"
                      }`}
                  />
                </button>
              </div>
            )
          })}
        </nav>


        {/* Logout Button */}
        <div className="pl-6 pt-6 pb-6">
          <Button
            variant="ghost"
            className="w-full justify-start pl-10 text-[#e32134] hover:bg-red-50 hover:text-[#b51727] rounded-xl h-12 font-medium transition-all duration-200"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  )
}
