'use client'

import React from 'react'
import ResourceList from '@/components/ResourceList'

const VideosPage = () => {
  const tutorialVideos = [
    {
      id: 1,
      title: 'Introduction to Cybersecurity',
      description: 'A beginner-friendly overview of cybersecurity concepts, career paths, and essential skills to get started in the field.',
      image: '/images/cybersecurity-basics.jpg',
      link: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
      category: 'Fundamentals',
      type: 'Video',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Wireshark Tutorial for Beginners',
      description: 'Learn how to use Wireshark for network traffic analysis with practical examples and common use cases.',
      image: '/images/wireshark.jpg',
      link: 'https://www.youtube.com/watch?v=lb1Dw0elw0Q',
      category: 'Network Analysis',
      type: 'Video',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Web Application Penetration Testing',
      description: 'Step-by-step methodology for testing web applications for security vulnerabilities using industry-standard tools.',
      image: '/images/web-pentesting.jpg',
      link: 'https://www.youtube.com/watch?v=X4eRbHgRawI',
      category: 'Penetration Testing',
      type: 'Video',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Linux Security Hardening',
      description: 'Best practices for securing Linux systems against common threats, including user management, firewall setup, and service configuration.',
      image: '/images/linux-security.jpg',
      link: 'https://www.youtube.com/watch?v=ZhMw53Ud2tY',
      category: 'System Security',
      type: 'Video',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'OWASP Top 10 Explained',
      description: 'Detailed explanation of the OWASP Top 10 web application security risks with real-world examples and mitigation strategies.',
      image: '/images/owasp.jpg',
      link: 'https://www.youtube.com/watch?v=rWHvp7rUka8',
      category: 'Web Security',
      type: 'Video',
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Metasploit Framework Tutorial',
      description: 'Comprehensive guide to using the Metasploit Framework for vulnerability scanning and exploitation in ethical hacking scenarios.',
      image: '/images/metasploit.jpg',
      link: 'https://www.youtube.com/watch?v=8lR27r8Y_ik',
      category: 'Exploitation',
      type: 'Video',
      difficulty: 'Advanced'
    },
    {
      id: 7,
      title: 'Malware Analysis Techniques',
      description: 'Introduction to static and dynamic malware analysis techniques using various tools and sandboxed environments.',
      image: '/images/malware-analysis.jpg',
      link: 'https://www.youtube.com/watch?v=3Q9-X_NRlJc',
      category: 'Malware Analysis',
      type: 'Video',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'Secure Coding Practices',
      description: 'Essential security principles for developers to write more secure code, focusing on common vulnerabilities and their prevention.',
      image: '/images/secure-coding.jpg',
      link: 'https://www.youtube.com/watch?v=AjLOxZbOPNs',
      category: 'Secure Development',
      type: 'Video',
      difficulty: 'Intermediate'
    },
    {
      id: 9,
      title: 'Incident Response Fundamentals',
      description: 'Learn the basics of cybersecurity incident response, including preparation, identification, containment, and recovery stages.',
      image: '/images/incident-response.jpg',
      link: 'https://www.youtube.com/watch?v=jd_ECgeVMsE',
      category: 'Incident Response',
      type: 'Video',
      difficulty: 'Intermediate'
    }
  ]

  const categories = [
    'All',
    'Fundamentals',
    'Network Analysis',
    'Penetration Testing',
    'System Security',
    'Web Security',
    'Exploitation',
    'Malware Analysis',
    'Secure Development',
    'Incident Response'
  ]

  return (
    <ResourceList
      resources={tutorialVideos}
      title={<>Video <span className="neon-text">Tutorials</span></>}
      description="Learn cybersecurity concepts and techniques with our collection of in-depth video tutorials and demonstrations."
      categories={categories}
    />
  )
}

export default VideosPage 