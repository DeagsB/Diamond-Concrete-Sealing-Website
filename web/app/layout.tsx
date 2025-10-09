import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Diamond Concrete Sealing',
  description: 'Professional concrete sealing in Okotoks'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="font-extrabold text-ink">Diamond Concrete Sealing</div>
            <nav className="space-x-4">
              <a href="#why" className="text-sm">Why</a>
              <a href="#gallery" className="text-sm">Gallery</a>
              <a href="#contact" className="btn btn-sm btn-primary">Get a quote</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-ink text-gray-200 py-8 mt-12">
          <div className="container mx-auto px-4">Diamond Concrete Sealing • Okotoks</div>
        </footer>
      </body>
    </html>
  )
}
