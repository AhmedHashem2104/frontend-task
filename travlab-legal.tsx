import { LayoutDashboard, Users, CreditCard, Calendar, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-r-3xl shadow-lg flex flex-col">
        <div className="flex-1 p-6">
          <nav className="space-y-2">
            <Button
              variant="default"
              className="w-full justify-start bg-[#0077cc] hover:bg-[#0077cc]/90 text-white rounded-xl h-12"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Button>

            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 rounded-xl h-12">
              <Users className="mr-3 h-5 w-5" />
              Teams
            </Button>

            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 rounded-xl h-12">
              <CreditCard className="mr-3 h-5 w-5" />
              Payments
            </Button>

            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 rounded-xl h-12">
              <Calendar className="mr-3 h-5 w-5" />
              Attendance
            </Button>

            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 rounded-xl h-12">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </div>

        <div className="p-6">
          <Button variant="ghost" className="w-full justify-start text-[#e32134] hover:bg-red-50 rounded-xl h-12">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-8">
        <div
          className="h-full bg-[#001e33] rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5C75.4 5 95 24.6 95 50S75.4 95 50 95 5 75.4 5 50 24.6 5 50 5zm0 10C30.1 15 15 30.1 15 50s15.1 35 35 35 35-15.1 35-35S69.9 15 50 15z' fill='%23ffffff' fillOpacity='0.03'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        >
          {/* Header */}
          <div className="p-8">
            <h1 className="text-white text-xl font-medium">Privacy Policy</h1>
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-8">
              <div className="mb-8">
                <div className="text-white text-2xl font-light mb-2">THE</div>
                <div className="text-white text-6xl font-bold tracking-wider">TRAVLAB LEGAL</div>
              </div>

              <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
                The information provided here is for Travlab customers and users who have questions about our terms,
                policies, intellectual property, and compliance.
              </p>
            </div>
          </div>

          {/* Background Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
