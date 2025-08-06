'use client'

import React from 'react'
import ResourceList from '@/components/ResourceList'

const ToolsPage = () => {
  const securityTools = [
    {
      id: 1,
      title: 'Wireshark',
      description: 'A network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.',
      image: '/images/wireshark-tool.jpg',
      link: 'https://www.wireshark.org/',
      category: 'Network Analysis',
      type: 'Tool',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Metasploit Framework',
      description: 'A penetration testing framework that makes discovering, exploiting, and sharing vulnerabilities quick and simple.',
      image: '/images/metasploit.jpg',
      link: 'https://www.metasploit.com/',
      category: 'Penetration Testing',
      type: 'Tool',
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'Burp Suite Community Edition',
      description: 'An integrated platform for performing security testing of web applications with various tools working together seamlessly.',
      image: '/images/burp-suite.jpg',
      link: 'https://portswigger.net/burp/communitydownload',
      category: 'Web Security',
      type: 'Tool',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Nmap',
      description: 'A free and open-source network scanner used to discover hosts and services on a computer network.',
      image: '/images/nmap.jpg',
      link: 'https://nmap.org/',
      category: 'Network Analysis',
      type: 'Tool',
      difficulty: 'Beginner'
    },
    {
      id: 5,
      title: 'OWASP ZAP',
      description: 'A free, open-source web application security scanner to find vulnerabilities in web applications.',
      image: '/images/owasp-zap.jpg',
      link: 'https://www.zaproxy.org/',
      category: 'Web Security',
      type: 'Tool',
      difficulty: 'Beginner'
    },
    {
      id: 6,
      title: 'John the Ripper',
      description: 'A fast password cracker for a variety of hash types, primarily designed to detect weak passwords.',
      image: '/images/john-the-ripper.jpg',
      link: 'https://www.openwall.com/john/',
      category: 'Password Cracking',
      type: 'Tool',
      difficulty: 'Intermediate'
    },
    {
      id: 7,
      title: 'Aircrack-ng',
      description: 'A network software suite for wireless network assessment, monitoring, and password cracking.',
      image: '/images/aircrack-ng.jpg',
      link: 'https://www.aircrack-ng.org/',
      category: 'Wireless Security',
      type: 'Tool',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'Malwarebytes',
      description: 'A program that finds and removes malware from Windows, Mac, and Android devices.',
      image: '/images/malwarebytes.jpg',
      link: 'https://www.malwarebytes.com/',
      category: 'Malware Analysis',
      type: 'Tool',
      difficulty: 'Beginner'
    },
    {
      id: 9,
      title: 'Autopsy',
      description: 'A digital forensics platform that is intuitive and graphical for disk and file system analysis.',
      image: '/images/autopsy.jpg',
      link: 'https://www.autopsy.com/',
      category: 'Digital Forensics',
      type: 'Tool',
      difficulty: 'Intermediate'
    }
  ]

  const categories = [
    'All',
    'Network Analysis',
    'Web Security',
    'Penetration Testing',
    'Password Cracking',
    'Wireless Security',
    'Malware Analysis',
    'Digital Forensics'
  ]

  return (
    <ResourceList
      resources={securityTools}
      title={<><span className="neon-text">Security Tools</span> Collection</>}
      description="Explore our collection of essential cybersecurity tools that help you secure systems, analyze networks, and test for vulnerabilities."
      categories={categories}
    />
  )
}

export default ToolsPage 