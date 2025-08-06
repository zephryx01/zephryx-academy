'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { FaShieldAlt, FaGraduationCap, FaCode, FaLaptopCode, FaNetworkWired, FaLock } from 'react-icons/fa'

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Network Penetration Testing',
      description: 'Learn how to identify and exploit vulnerabilities in network infrastructure using industry-standard tools and methodologies.',
      image: '/images/network-security.jpg',
      link: '/courses/network-penetration-testing',
      isPremium: true,
      category: 'Advanced',
    },
    {
      id: 2,
      title: 'Web Application Security',
      description: 'Understand how to secure web applications against common attacks like XSS, CSRF, SQL injection, and more.',
      image: '/images/web-security.jpg',
      link: '/courses/web-application-security',
      isPremium: true,
      category: 'Intermediate',
    },
    {
      id: 3,
      title: 'Fundamentals of Cybersecurity',
      description: 'A comprehensive introduction to the core concepts and principles of cybersecurity for beginners.',
      image: '/images/cybersecurity-basics.jpg',
      link: '/courses/cybersecurity-fundamentals',
      isPremium: false,
      category: 'Beginner',
    },
  ]

  const freeResources = [
    {
      id: 1,
      title: 'OWASP Top 10 Cheatsheet',
      description: 'A comprehensive reference guide to the most critical web application security risks.',
      image: '/images/owasp.jpg',
      link: '/resources/owasp-cheatsheet',
      category: 'Web Security',
    },
    {
      id: 2,
      title: 'Linux Command Line Basics',
      description: 'Essential Linux commands for cybersecurity professionals with practical examples.',
      image: '/images/linux.jpg',
      link: '/resources/linux-command-line',
      category: 'System',
    },
    {
      id: 3,
      title: 'Network Scanning Techniques',
      description: 'Learn different methods for discovering and mapping networks with hands-on examples.',
      image: '/images/network-scanning.jpg',
      link: '/resources/network-scanning',
      category: 'Network',
    },
  ]

  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Master Cybersecurity Skills With Zephryx Academy"
          subtitle="Expert-led courses, practical labs, and resources for aspiring and experienced cybersecurity professionals."
          ctaText="Explore Courses"
          ctaLink="/courses"
          secondaryCtaText="Free Resources"
          secondaryCtaLink="/resources"
        />

        {/* Cybersecurity Career Benefits Section */}
        <section className="py-16 bg-black">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Why Learn <span className="neon-text">Cybersecurity</span> Now?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                The demand for cybersecurity professionals continues to grow as organizations face increasingly sophisticated threats. Investing in these skills offers tremendous career opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">High Salary Potential</h3>
                </div>
                <p className="text-gray-400">
                  Cybersecurity professionals command premium salaries, with the average security analyst earning $103,590 per year, and senior roles exceeding $150,000 annually.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Job Security</h3>
                </div>
                <p className="text-gray-400">
                  With over 3.5 million unfilled cybersecurity positions globally and a near-zero unemployment rate in the field, qualified professionals enjoy exceptional job security.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Career Growth</h3>
                </div>
                <p className="text-gray-400">
                  The cybersecurity field offers rapid advancement opportunities, with the Bureau of Labor Statistics projecting 33% job growth through 2030, much faster than average.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Diverse Career Paths</h3>
                </div>
                <p className="text-gray-400">
                  From ethical hacking and threat intelligence to security architecture and management, cybersecurity offers varied career paths across virtually every industry.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Meaningful Impact</h3>
                </div>
                <p className="text-gray-400">
                  Cybersecurity professionals protect critical infrastructure, sensitive data, and individual privacy, making a tangible difference in the digital safety of society.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/20 text-accent mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Remote Work Options</h3>
                </div>
                <p className="text-gray-400">
                  Many cybersecurity roles offer flexible work arrangements and remote opportunities, providing better work-life balance and geographic freedom.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button href="/courses" variant="primary" size="lg">Start Your Cybersecurity Career</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose <span className="neon-text">Zephryx Academy</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform is designed to help you build practical cybersecurity skills through hands-on learning and real-world scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black p-6 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaGraduationCap size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-400">
                  Learn from experienced cybersecurity professionals with real-world expertise.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaLaptopCode size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-on Labs</h3>
                <p className="text-gray-400">
                  Practice in realistic environments with our interactive virtual labs.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaNetworkWired size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-world Scenarios</h3>
                <p className="text-gray-400">
                  Apply your knowledge to practical, industry-relevant challenges.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaCode size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-400">
                  Join our community of learners and experts for support and networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-20 bg-black">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Featured <span className="neon-text">Courses</span></h2>
              <Button href="/courses" variant="outline">View All Courses</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
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
          </div>
        </section>

        {/* Free Resources Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Free <span className="neon-text">Resources</span></h2>
              <Button href="/resources" variant="outline">View All Resources</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {freeResources.map((resource) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Neon glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-accent/10 blur-[100px] z-0"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your <span className="neon-text">Cybersecurity Journey</span>?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of students who are already building their cybersecurity skills with Zephryx Academy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/courses" size="lg">Explore Courses</Button>
                <Button href="/signup" variant="outline" size="lg">Sign Up for Free</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-dark">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our <span className="neon-text">Students Say</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hear from students who have transformed their cybersecurity skills with our courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Alex Chen</h4>
                    <p className="text-accent text-sm">Security Analyst</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  "The Network Penetration Testing course helped me secure my first job in cybersecurity. The hands-on labs were invaluable for real-world practice."
                </p>
              </div>

              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-accent text-sm">Web Developer</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  "As a web developer, the Web Application Security course gave me the skills to build much more secure applications. I use what I learned daily."
                </p>
              </div>

              <div className="bg-black p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael Rodriguez</h4>
                    <p className="text-accent text-sm">IT Manager</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  "The free resources on Zephryx Academy helped my team stay up-to-date with the latest security trends and best practices."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 