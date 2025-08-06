'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { FaSearch, FaFilter } from 'react-icons/fa'

// Course data
const courses = [
  {
    id: 1,
    title: 'Network Penetration Testing',
    description: 'Learn how to identify and exploit vulnerabilities in network infrastructure using industry-standard tools and methodologies.',
    image: '/images/network-security.jpg',
    link: '/courses/network-penetration-testing',
    isPremium: true,
    category: 'Advanced',
    topics: ['Network Security', 'Penetration Testing'],
  },
  {
    id: 2,
    title: 'Web Application Security',
    description: 'Understand how to secure web applications against common attacks like XSS, CSRF, SQL injection, and more.',
    image: '/images/web-security.jpg',
    link: '/courses/web-application-security',
    isPremium: true,
    category: 'Intermediate',
    topics: ['Web Security', 'OWASP'],
  },
  {
    id: 3,
    title: 'Fundamentals of Cybersecurity',
    description: 'A comprehensive introduction to the core concepts and principles of cybersecurity for beginners.',
    image: '/images/cybersecurity-basics.jpg',
    link: '/courses/cybersecurity-fundamentals',
    isPremium: false,
    category: 'Beginner',
    topics: ['Cybersecurity', 'Basics'],
  },
  {
    id: 4,
    title: 'Ethical Hacking Bootcamp',
    description: 'Intensive training on ethical hacking methodologies, tools, and techniques for real-world scenarios.',
    image: '/images/ethical-hacking.jpg',
    link: '/courses/ethical-hacking-bootcamp',
    isPremium: true,
    category: 'Advanced',
    topics: ['Ethical Hacking', 'Penetration Testing'],
  },
  {
    id: 5,
    title: 'Secure Coding Practices',
    description: 'Learn how to write secure code and avoid common vulnerabilities in your applications.',
    image: '/images/secure-coding.jpg',
    link: '/courses/secure-coding-practices',
    isPremium: true,
    category: 'Intermediate',
    topics: ['Secure Coding', 'Software Security'],
  },
  {
    id: 6,
    title: 'Introduction to Cryptography',
    description: 'Understand the principles of modern cryptography and how to implement cryptographic solutions.',
    image: '/images/cryptography.jpg',
    link: '/courses/introduction-to-cryptography',
    isPremium: false,
    category: 'Intermediate',
    topics: ['Cryptography', 'Encryption'],
  },
  {
    id: 7,
    title: 'Incident Response and Handling',
    description: 'Develop skills for effective incident detection, response, and recovery in enterprise environments.',
    image: '/images/incident-response.jpg',
    link: '/courses/incident-response',
    isPremium: true,
    category: 'Advanced',
    topics: ['Incident Response', 'Digital Forensics'],
  },
  {
    id: 8,
    title: 'Cloud Security Fundamentals',
    description: 'Essential security concepts and best practices for cloud computing environments.',
    image: '/images/cloud-security.jpg',
    link: '/courses/cloud-security',
    isPremium: true,
    category: 'Intermediate',
    topics: ['Cloud Security', 'AWS', 'Azure'],
  },
  {
    id: 9,
    title: 'Mobile Application Security',
    description: 'Learn to identify and mitigate security vulnerabilities in iOS and Android applications.',
    image: '/images/mobile-security.jpg',
    link: '/courses/mobile-security',
    isPremium: true,
    category: 'Intermediate',
    topics: ['Mobile Security', 'Android', 'iOS'],
  },
]

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  
  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced']
  const types = ['All', 'Free', 'Premium']
  
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    
    const matchesType = selectedType === 'All' || 
                        (selectedType === 'Free' && !course.isPremium) || 
                        (selectedType === 'Premium' && course.isPremium)
    
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity <span className="neon-text">Courses</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Expand your cybersecurity skills with our comprehensive course library.
                From beginner fundamentals to advanced techniques, we have courses for every skill level.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filters and Search */}
        <section className="bg-gray-dark py-10">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Search courses by title, description, or topic..."
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
                    className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-black text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category} Level
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFilter className="text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-black text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type} Courses
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Grid */}
        <section className="bg-black py-20">
          <div className="container-custom">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    link={course.link}
                    isPremium={course.isPremium}
                    category={course.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-4">No courses found</h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-dark py-20">
          <div className="container-custom">
            <div className="bg-black p-10 rounded-lg border border-gray-800 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold mb-2">Need custom training for your team?</h2>
                <p className="text-gray-400">
                  We offer tailored cybersecurity training programs for organizations of all sizes.
                </p>
              </div>
              <button className="btn-primary whitespace-nowrap">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default CoursesPage 