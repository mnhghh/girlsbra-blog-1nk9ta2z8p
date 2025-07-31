'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <nav className="navbar container">
        <div className="logo">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">GB</span>
            </div>
            <span>GirlsBra Top</span>
          </Link>
        </div>
        
        <ul className={`nav-menu ${mobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-white shadow-lg p-6 lg:flex-row lg:static lg:shadow-none lg:p-0' : 'hidden'} lg:flex`}>
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/calculator" className="nav-link">Size Calculator</Link></li>
          <li><Link href="/blog" className="nav-link">Expert Guides</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
          <li className="lg:ml-4">
            <Link href="/blog" className="btn btn-primary btn-sm">
              Get Started
            </Link>
          </li>
        </ul>
        
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </header>
  )
}

