import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
  isActive?: boolean
}

export interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}
