'use client'

import React from 'react'
import ResourceList from '@/components/ResourceList'

const LabsPage = () => {
  const practiceLabs = [
    {
      id: 1,
      title: 'Web Application Security Lab',
      description: 'Practice identifying and exploiting common web vulnerabilities in a controlled environment with guided exercises.',
      image: '/images/web-security.jpg',
      link: 'https://portswigger.net/web-security',
      category: 'Web Security',
      type: 'Lab',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Network Scanning and Enumeration',
      description: 'Learn how to perform network reconnaissance and enumerate systems using tools like Nmap, Netcat, and more.',
      image: '/images/network-scanning.jpg',
      link: 'https://www.hackthebox.com/',
      category: 'Network Security',
      type: 'Lab',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Kali Linux Virtual Lab Setup',
      description: 'Step-by-step guide to setting up a Kali Linux virtual machine for security testing with all necessary tools.',
      image: '/images/kali-linux.jpg',
      link: 'https://www.kali.org/docs/virtualization/',
      category: 'Environment Setup',
      type: 'Lab',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      title: 'SQL Injection Attack Lab',
      description: 'Practice various SQL injection techniques and learn how to protect against them with hands-on exercises.',
      image: '/images/sql-injection.jpg',
      link: 'https://portswigger.net/web-security/sql-injection',
      category: 'Web Security',
      type: 'Lab',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Cross-Site Scripting (XSS) Lab',
      description: 'Interactive exercises to understand and exploit different types of Cross-Site Scripting vulnerabilities.',
      image: '/images/xss.jpg',
      link: 'https://portswigger.net/web-security/cross-site-scripting',
      category: 'Web Security',
      type: 'Lab',
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Password Cracking Workshop',
      description: 'Hands-on practice with various password cracking tools and techniques against different hash types.',
      image: '/images/password-cracking.jpg',
      link: 'https://www.offensive-security.com/labs/individual/',
      category: 'Offensive Security',
      type: 'Lab',
      difficulty: 'Intermediate'
    },
    {
      id: 7,
      title: 'Forensic Investigation Challenge',
      description: 'Practice digital forensic techniques with realistic disk images and evidence artifacts.',
      image: '/images/digital-forensics.jpg',
      link: 'https://www.dfir.training/',
      category: 'Digital Forensics',
      type: 'Lab',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'Capture The Flag Challenges',
      description: 'A collection of CTF-style challenges covering various cybersecurity topics to test and improve your skills.',
      image: '/images/ctf.jpg',
      link: 'https://ctftime.org/',
      category: 'CTF',
      type: 'Lab',
      difficulty: 'Advanced'
    },
    {
      id: 9,
      title: 'Wireless Network Security Lab',
      description: 'Learn how to secure wireless networks and practice identifying vulnerabilities in Wi-Fi configurations.',
      image: '/images/wireless-security.jpg',
      link: 'https://www.offensive-security.com/wireless-attacks-pentesting/',
      category: 'Network Security',
      type: 'Lab',
      difficulty: 'Intermediate'
    }
  ]

  const categories = [
    'All',
    'Web Security',
    'Network Security',
    'Environment Setup',
    'Offensive Security',
    'Digital Forensics',
    'CTF'
  ]

  return (
    <ResourceList
      resources={practiceLabs}
      title={<>Practice <span className="neon-text">Labs</span></>}
      description="Gain hands-on experience with our interactive cybersecurity labs and practical exercises in a safe, controlled environment."
      categories={categories}
    />
  )
}

export default LabsPage 