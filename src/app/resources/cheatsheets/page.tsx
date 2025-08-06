'use client'

import React from 'react'
import ResourceList from '@/components/ResourceList'

const CheatsheetsPage = () => {
  const cheatsheets = [
    {
      id: 1,
      title: 'OWASP Top 10 Cheatsheet',
      description: 'A comprehensive reference guide to the most critical web application security risks identified by OWASP.',
      image: '/images/owasp-top10.jpg',
      link: 'https://cheatsheetseries.owasp.org/cheatsheets/OWASP_Top_Ten_Cheat_Sheet.html',
      category: 'Web Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Linux Commands for Security',
      description: 'Essential Linux commands every security professional should know for system hardening, monitoring, and incident response.',
      image: '/images/linux-commands.jpg',
      link: 'https://linuxhandbook.com/essential-linux-commands/',
      category: 'Operating System',
      type: 'Cheatsheet',
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Nmap Command Reference',
      description: 'A quick reference guide to the most useful Nmap commands for network discovery and security scanning.',
      image: '/images/nmap-cheatsheet.jpg',
      link: 'https://www.stationx.net/nmap-cheat-sheet/',
      category: 'Network Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Wireshark Display Filters',
      description: 'Commonly used Wireshark display filters to help you analyze network traffic more efficiently.',
      image: '/images/wireshark-filters.jpg',
      link: 'https://www.comparitech.com/net-admin/wireshark-cheat-sheet/',
      category: 'Network Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Regular Expressions Cheatsheet',
      description: 'Common regex patterns for log parsing, data extraction, and pattern matching in security analysis.',
      image: '/images/regex.jpg',
      link: 'https://www.rexegg.com/regex-quickstart.html',
      category: 'General Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Metasploit Commands',
      description: 'Essential commands and modules for using the Metasploit Framework in penetration testing.',
      image: '/images/metasploit-commands.jpg',
      link: 'https://www.offensive-security.com/metasploit-unleashed/',
      category: 'Penetration Testing',
      type: 'Cheatsheet',
      difficulty: 'Advanced'
    },
    {
      id: 7,
      title: 'Windows Registry Forensics',
      description: 'Key Windows Registry locations and artifacts for digital forensics investigations.',
      image: '/images/windows-registry.jpg',
      link: 'https://www.sans.org/security-resources/posters/windows-forensic-analysis/170/download',
      category: 'Digital Forensics',
      type: 'Cheatsheet',
      difficulty: 'Advanced'
    },
    {
      id: 8,
      title: 'SQL Injection Techniques',
      description: 'Common SQL injection techniques and prevention methods for web application security.',
      image: '/images/sql-injection.jpg',
      link: 'https://portswigger.net/web-security/sql-injection/cheat-sheet',
      category: 'Web Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    },
    {
      id: 9,
      title: 'Cross-Site Scripting (XSS) Prevention',
      description: 'Prevention techniques and encoding methods to protect against XSS vulnerabilities.',
      image: '/images/xss.jpg',
      link: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html',
      category: 'Web Security',
      type: 'Cheatsheet',
      difficulty: 'Intermediate'
    }
  ]

  const categories = [
    'All',
    'Web Security',
    'Operating System',
    'Network Security',
    'Network Scanning',
    'Penetration Testing',
    'Digital Forensics',
    'General Security'
  ]

  return (
    <ResourceList
      resources={cheatsheets}
      title={<>Security <span className="neon-text">Cheatsheets</span></>}
      description="Quick reference guides and cheatsheets to help you remember important commands, techniques, and security concepts."
      categories={categories}
    />
  )
}

export default CheatsheetsPage 