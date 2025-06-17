# Travlab Legal Dashboard

A Next.js application implementing a legal dashboard interface based on Figma design specifications.

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component Architecture**: Modular, reusable components
- **Mobile-First**: Progressive enhancement from mobile to desktop

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd travlab-legal-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── dashboard-layout.tsx
│   ├── sidebar.tsx
│   ├── mobile-header.tsx
│   └── main-content.tsx
├── types/                # TypeScript type definitions
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Design Implementation

The application faithfully implements the provided Figma design with:

- Exact color matching (#001e33, #0077cc, #e32134)
- Precise typography and spacing
- Smooth hover and transition effects
- Mobile-optimized navigation
- Accessible UI components

## Build and Deploy

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
