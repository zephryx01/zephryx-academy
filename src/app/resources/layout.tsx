'use client'

import React from 'react'
import Link from 'next/link'
import { FaBook, FaTools, FaLaptopCode, FaVideo } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const resourceCategories = [
    {
      name: 'Tools',
      icon: <FaTools size={20} />,
      href: '/resources/tools',
      description: 'Security tools and utilities'
    },
    {
      name: 'Cheatsheets',
      icon: <FaBook size={20} />,
      href: '/resources/cheatsheets',
      description: 'Quick reference guides'
    },
    {
      name: 'Labs',
      icon: <FaLaptopCode size={20} />,
      href: '/resources/labs',
      description: 'Practice environments'
    },
    {
      name: 'Videos',
      icon: <FaVideo size={20} />,
      href: '/resources/videos',
      description: 'Tutorial videos'
    }
  ]

  return (
    <>
      <Navbar />
      {/* Resource Navigation */}
      <div className="bg-black border-b border-gray-800 sticky top-[64px] z-40">
        <div className="container-custom py-2">
          <div className="flex overflow-x-auto no-scrollbar">
            <div className="flex space-x-4">
              <Link 
                href="/resources" 
                className="flex items-center px-4 py-2 whitespace-nowrap border-b-2 border-transparent hover:border-accent text-white hover:text-accent transition-colors"
              >
                All Resources
              </Link>
              
              {resourceCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center px-4 py-2 whitespace-nowrap border-b-2 border-transparent hover:border-accent text-white hover:text-accent transition-colors"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  )
} 