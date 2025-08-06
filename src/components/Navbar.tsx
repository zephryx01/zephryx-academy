'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaShieldAlt } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <FaShieldAlt className="text-accent text-2xl" />
            <span className="text-xl font-bold neon-text">ZEPHRYX ACADEMY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-white hover:text-accent transition-colors">
              Courses
            </Link>
            <Link href="/resources" className="text-white hover:text-accent transition-colors">
              Free Resources
            </Link>
            <Link href="/pricing" className="text-white hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            {/* <Link href="/contact" className="text-white hover:text-accent transition-colors">
              Contact
            </Link> */}
            <Link href="/support" className="text-white hover:text-accent transition-colors">
              Support
            </Link>
            <Link href="/login" className="btn-primary">
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Courses
              </Link>
              <Link
                href="/resources"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Free Resources
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/support"
                className="text-white hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Support
              </Link>
              <Link href="/login" className="btn-primary inline-block w-fit" onClick={toggleMenu}>
                Log In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 