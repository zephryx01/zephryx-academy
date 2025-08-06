'use client'

import React, { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaSearch, FaFilter, FaDownload, FaVideo, FaTools, FaBook, FaLaptopCode } from 'react-icons/fa'

// Resource data
const resources = [
  {
    id: 1,
    title: 'OWASP Top 10 Cheatsheet',
    description: 'A comprehensive reference guide to the most critical web application security risks.',
    image: '/images/owasp.jpg',
    link: '/resources/cheatsheets/owasp-top-10',
    category: 'Web Security',
    type: 'Cheatsheet',
  },
  {
    id: 2,
    title: 'Linux Command Line Basics',
    description: 'Essential Linux commands for cybersecurity professionals with practical examples.',
    image: '/images/linux.jpg',
    link: '/resources/cheatsheets/linux-command-line',
    category: 'System',
    type: 'Guide',
  },
  {
    id: 3,
    title: 'Network Scanning Techniques',
    description: 'Learn different methods for discovering and mapping networks with hands-on examples.',
    image: '/images/network-scanning.jpg',
    link: '/resources/labs/network-scanning',
    category: 'Network',
    type: 'Tutorial',
  },
  {
    id: 4,
    title: 'Wireshark Tutorial',
    description: 'Step-by-step guide to network traffic analysis with Wireshark.',
    image: '/images/wireshark.jpg',
    link: '/resources/videos/wireshark-tutorial',
    category: 'Network',
    type: 'Tutorial',
  },
  {
    id: 5,
    title: 'Windows Registry Forensics',
    description: 'Learn how to analyze the Windows Registry for digital forensics investigations.',
    image: '/images/windows-registry.jpg',
    link: '/resources/cheatsheets/windows-registry-forensics',
    category: 'Forensics',
    type: 'Guide',
  },
  {
    id: 6,
    title: 'Malware Analysis Toolkit',
    description: 'A collection of free tools for analyzing malicious software.',
    image: '/images/malware-analysis.jpg',
    link: '/resources/tools/malware-analysis',
    category: 'Malware',
    type: 'Tool',
  },
  {
    id: 7,
    title: 'Social Engineering Techniques',
    description: 'Understanding and defending against common social engineering attacks.',
    image: '/images/social-engineering.jpg',
    link: '/resources/videos/social-engineering',
    category: 'Social Engineering',
    type: 'Guide',
  },
  {
    id: 8,
    title: 'Security Headers Explainer',
    description: 'Learn about HTTP security headers and how to implement them properly.',
    image: '/images/security-headers.jpg',
    link: '/resources/cheatsheets/security-headers',
    category: 'Web Security',
    type: 'Cheatsheet',
  },
  {
    id: 9,
    title: 'Kali Linux Virtual Lab Setup',
    description: 'Step-by-step guide to setting up a Kali Linux virtual machine for security testing.',
    image: '/images/kali-linux.jpg',
    link: '/resources/labs/kali-linux-setup',
    category: 'Lab',
    type: 'Tutorial',
  },
]

// Resource categories data
const resourceTypes = [
  {
    name: 'Cheatsheets',
    icon: <FaBook className="h-10 w-10 text-accent" />,
    description: 'Quick reference guides for various security topics',
    link: '/resources/cheatsheets'
  },
  {
    name: 'Tutorials',
    icon: <FaVideo className="h-10 w-10 text-accent" />,
    description: 'Step-by-step learning materials',
    link: '/resources/videos'
  },
  {
    name: 'Tools',
    icon: <FaTools className="h-10 w-10 text-accent" />,
    description: 'Free security tools and utilities',
    link: '/resources/tools'
  },
  {
    name: 'Labs',
    icon: <FaLaptopCode className="h-10 w-10 text-accent" />,
    description: 'Practice environments and exercises',
    link: '/resources/labs'
  },
]

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  
  const categories = ['All', 'Web Security', 'Network', 'System', 'Forensics', 'Malware', 'Social Engineering', 'Lab']
  const types = ['All', 'Cheatsheet', 'Guide', 'Tutorial', 'Tool']
  
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    
    const matchesType = selectedType === 'All' || resource.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free <span className="neon-text">Resources</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Access our collection of free cybersecurity resources, tools, and learning materials
              to enhance your skills and knowledge.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resource Types Section */}
      <section className="bg-gray-dark py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceTypes.map((type, index) => (
              <a 
                key={index} 
                href={type.link}
                className="bg-black p-8 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-gray-400">
                  {type.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Filters and Search */}
      <section className="bg-black py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-md bg-gray-dark text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-gray-dark text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category} Category
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-gray-dark text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type} Type
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="bg-black py-20">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  image={resource.image}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No resources found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Weekly Resources Section */}
      <section className="bg-gray-dark py-20">
        <div className="container-custom">
          <div className="bg-black p-10 rounded-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Weekly Security Resource</h2>
                <p className="text-gray-400">
                  Subscribe to receive a new cybersecurity resource in your inbox every week.
                </p>
              </div>
              <div className="mt-4 md:mt-0 neon-border p-3 rounded-md">
                <FaDownload className="text-accent" size={24} />
              </div>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResourcesPage 