"use client"

export function MainContent() {
  return (
    <main className="flex w-full lg:ml-8 min-h-screen lg:min-h-auto justify-center items-center">
      <div className="h-[90%] w-[90%] bg-[#001e33] lg:rounded-3xl relative overflow-hidden world-pattern">
        {/* Header */}
        <div className="p-6 lg:p-8 relative z-20">
          <h1 className="text-white text-xl lg:text-2xl font-medium">Privacy Policy</h1>
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-8">
          <div className="text-center max-w-4xl relative z-20">
            <div className="mb-6 lg:mb-8">
              <div className="text-white text-xl lg:text-2xl font-light mb-2 tracking-wide">THE</div>
              <div className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider leading-tight">
                TRAVLAB LEGAL
              </div>
            </div>

            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
              The information provided here is for Travlab customers and users who have questions about our terms,
              policies, intellectual property, and compliance.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}