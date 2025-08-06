'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaShieldAlt, FaGraduationCap, FaUsers, FaHandshake } from 'react-icons/fa'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & Lead Instructor',
      bio: 'Former cybersecurity analyst with over 10 years of experience in penetration testing and network security.',
      image: '/images/team-1.jpg',
    },
    {
      name: 'Samantha Chen',
      role: 'Web Security Specialist',
      bio: 'Expert in web application security with a background in secure software development and OWASP methodologies.',
      image: '/images/team-2.jpg',
    },
    {
      name: 'Marcus Johnson',
      role: 'Digital Forensics Expert',
      bio: 'Specializes in digital forensics and incident response with experience in law enforcement and private sector security.',
      image: '/images/team-3.jpg',
    },
    {
      name: 'Olivia Rodriguez',
      role: 'Content Director',
      bio: 'Technical writer and educator focused on making complex cybersecurity concepts accessible to all skill levels.',
      image: '/images/team-4.jpg',
    },
  ]

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="neon-text">Zephryx Academy</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                We're on a mission to make high-quality cybersecurity education accessible to everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="bg-gray-dark py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Zephryx Academy was founded in 2020 with a clear vision: to bridge the cybersecurity skills gap by providing accessible, practical, and cutting-edge training.
                </p>
                <p className="text-gray-300 mb-4">
                  What started as a small collection of online tutorials has grown into a comprehensive platform offering professional-grade courses, hands-on labs, and a supportive community for cybersecurity enthusiasts and professionals alike.
                </p>
                <p className="text-gray-300">
                  We believe that cybersecurity knowledge should not be confined to expensive degree programs or corporate training. Through Zephryx Academy, we're democratizing access to the skills needed to protect our increasingly digital world.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-black rounded-lg overflow-hidden border border-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaShieldAlt className="text-accent w-24 h-24 animate-pulse" />
                  </div>
                  {/* Placeholder for an actual image */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 blur-[60px] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaGraduationCap size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                <p className="text-gray-400">
                  We're committed to providing the highest quality cybersecurity education that balances theoretical knowledge with practical, hands-on experience.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaUsers size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-gray-400">
                  We believe in the power of community learning. Our platform encourages collaboration, networking, and knowledge sharing.
                </p>
              </div>
              
              <div className="bg-gray-dark p-8 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                <div className="text-accent mb-4">
                  <FaHandshake size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ethical Practice</h3>
                <p className="text-gray-400">
                  We emphasize ethical considerations in all our courses, ensuring our students understand both the technical and moral aspects of cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="bg-gray-dark py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our <span className="neon-text">Team</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-gray-800 mx-auto mb-4 relative overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="absolute inset-0 flex items-center justify-center text-accent">
                      {member.name.split(' ').map(name => name[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-accent text-sm mb-4 text-center">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-black py-20 relative overflow-hidden">
          {/* Neon glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-accent/10 blur-[100px] z-0"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning with Us?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join our community of cybersecurity learners and professionals today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary">
                  Explore Courses
                </button>
                <button className="btn-secondary">
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default AboutPage 