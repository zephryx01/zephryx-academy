'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FaPlus, FaMinus, FaSearch } from 'react-icons/fa'

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFaqs, setOpenFaqs] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'courses', name: 'Courses & Learning' },
    { id: 'account', name: 'Account & Billing' },
    { id: 'technical', name: 'Technical' },
    { id: 'resources', name: 'Free Resources' },
  ]

  const allFaqs = {
    general: [
      {
        question: 'What is Zephryx Academy?',
        answer: 'Zephryx Academy is a specialized educational platform focused on cybersecurity training. We offer expert-led courses, hands-on labs, and free resources for beginners to advanced security professionals. Our mission is to make high-quality cybersecurity education accessible to everyone.',
      },
      {
        question: 'Who are your courses designed for?',
        answer: 'Our courses are designed for a wide range of learners, from complete beginners looking to enter the cybersecurity field to experienced professionals wanting to expand their skills. Each course clearly indicates the difficulty level and prerequisites, making it easy to find the right learning path for your current skill level.',
      },
      {
        question: 'Do you offer corporate training?',
        answer: 'Yes, we offer tailored corporate training solutions for teams of all sizes. Our corporate programs can be customized to address your organization\'s specific security needs and can be delivered in a variety of formats. Please reach out to our team via the Contact page for more information on corporate training options.',
      },
      {
        question: 'How do I get support if I have questions?',
        answer: 'We offer multiple support channels for our students. Course-specific questions can be asked in the discussion forums where instructors and fellow students can help. For technical issues or account-related questions, you can contact our support team at support@zephryx.com or through the Contact page. We typically respond within 24 hours on business days.',
      },
    ],
    courses: [
      {
        question: 'How do I access the course content after purchase?',
        answer: 'After purchasing a course, you\'ll receive immediate access to the content in your dashboard. You can access it anytime by logging into your account and going to "My Courses". All course materials, including videos, labs, and downloadable resources, will be available there.',
      },
      {
        question: 'Are the courses self-paced or do they have a schedule?',
        answer: 'All our courses are self-paced, allowing you to learn at your own convenience. Once purchased, you have lifetime access to the course materials. There are no deadlines or scheduled sessions to attend, though some courses may include optional live Q&A sessions with instructors.',
      },
      {
        question: 'Do courses include hands-on practice?',
        answer: 'Yes, most of our courses include hands-on labs and practical exercises to help you apply what you\'ve learned. These labs are designed to simulate real-world scenarios and give you practical experience with the tools and techniques covered in the course. Some advanced courses also include capture-the-flag (CTF) challenges to test your skills.',
      },
      {
        question: 'Can I get a certificate after completing a course?',
        answer: 'Yes, upon completing a course and passing the final assessment, you\'ll receive a digital certificate of completion that you can share on your resume or LinkedIn profile. Some of our specialized courses also prepare you for industry-recognized certifications like CompTIA Security+, CEH, or CISSP.',
      },
      {
        question: 'What if I\'m not satisfied with a course?',
        answer: 'We offer a 30-day money-back guarantee for all our courses. If you\'re not satisfied with the content, you can request a refund within 30 days of purchase. However, to be eligible, you should not have completed more than 30% of the course content.',
      },
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer: 'You can create a free account by clicking the "Sign Up" button in the top-right corner of the website. You\'ll need to provide your name, email address, and create a password. A free account allows you to access our free resources and save courses to your wishlist. You only need to provide payment information when purchasing a course.',
      },
      {
        question: 'Can I change my account email or password?',
        answer: 'Yes, you can update your account information, including email and password, in your account settings. Log in, click on your profile picture in the top-right corner, and select "Account Settings" from the dropdown menu. There you\'ll find options to update your personal information, email, and password.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and certain regional payment methods. For corporate training and team subscriptions, we also offer invoice payment options. All payments are processed securely through industry-standard encryption.',
      },
      {
        question: 'How do subscriptions work?',
        answer: 'Our Pro Membership subscription gives you access to all courses, labs, and premium resources for a monthly or annual fee. Subscriptions automatically renew until canceled. You can cancel your subscription at any time through your account settings, and you\'ll continue to have access until the end of the current billing period.',
      },
    ],
    technical: [
      {
        question: 'What technical requirements are needed for your courses?',
        answer: 'Most of our courses can be completed on any modern computer (Windows, macOS, or Linux) with a stable internet connection. For practical labs, we recommend at least 8GB of RAM and 20GB of free disk space if you\'ll be using virtual machines. Some specialized courses may have additional requirements, which will be clearly listed on the course page.',
      },
      {
        question: 'Do I need to install special software for the labs?',
        answer: 'For many labs, you\'ll need to install VirtualBox or VMware to run virtual machines. Some courses may require specific security tools, which you\'ll be guided to install as part of the course. We provide detailed setup instructions for all required software. Additionally, some labs are browser-based and don\'t require any installation.',
      },
      {
        question: 'Can I download course videos for offline viewing?',
        answer: 'Yes, most course videos are available for download for offline viewing through our mobile app. However, lab environments typically require an internet connection to function properly. Downloaded content is for personal use only and subject to our terms of service.',
      },
      {
        question: 'Are the virtual labs available 24/7?',
        answer: 'Yes, our virtual lab environments are available 24/7, allowing you to practice at any time. Each course includes a specific allocation of lab hours. If you need additional lab time, you can purchase lab extensions separately or consider our Pro Membership which includes unlimited lab access.',
      },
    ],
    resources: [
      {
        question: 'Do you offer any free resources for beginners?',
        answer: 'Yes! We offer several free resources for beginners in our Resources section. These include basic tutorials, cheatsheets, introductory guides to cybersecurity concepts, and a limited selection of beginner-friendly labs. These resources are designed to help newcomers get started in cybersecurity before committing to a full course.',
      },
      {
        question: 'How often are the free resources updated?',
        answer: 'We regularly update our free resources to keep them relevant with current cybersecurity trends and technologies. We typically add new resources weekly and review existing content quarterly to ensure accuracy and relevance. You can subscribe to our newsletter to be notified when new resources are available.',
      },
      {
        question: 'Can I contribute to the resources section?',
        answer: 'We welcome contributions from cybersecurity professionals! If you have valuable knowledge to share, you can submit your resource proposals through the "Contribute" link in the Resources section. Our editorial team reviews all submissions for quality and relevance before publishing. Contributors are credited for their work.',
      },
      {
        question: 'Are the tools featured in the resources section safe to use?',
        answer: 'All tools featured in our resources section have been vetted by our security team. However, remember that many cybersecurity tools can be used for both legitimate security testing and potentially malicious purposes. Always ensure you have proper authorization before using security testing tools on any system or network.',
      },
    ],
  }

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index))
    } else {
      setOpenFaqs([...openFaqs, index])
    }
  }

  const filteredFaqs = searchTerm
    ? Object.values(allFaqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFaqs[activeCategory as keyof typeof allFaqs]

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="neon-text">Questions</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Find answers to common questions about Zephryx Academy, our courses, and resources.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-md bg-gray-dark text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Search for questions or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="bg-gray-dark py-20">
          <div className="container-custom">
            {!searchTerm && (
              <div className="mb-12">
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-2 rounded-full border ${
                        activeCategory === category.id
                          ? 'bg-black border-accent text-accent'
                          : 'bg-black border-gray-800 text-white hover:border-accent hover:text-accent'
                      } transition-colors`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaqs.includes(index)
                  
                  return (
                    <div
                      key={index}
                      className="bg-black rounded-lg border border-gray-800 overflow-hidden transition-all duration-300 hover:border-gray-700"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex items-center justify-between w-full p-6 text-left"
                      >
                        <h3 className="text-xl font-bold pr-6">{faq.question}</h3>
                        <div className="text-accent flex-shrink-0">
                          {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="p-6 pt-0 border-t border-gray-800">
                          <p className="text-gray-400">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">No questions found</h3>
                  <p className="text-gray-400 mb-6">
                    We couldn't find any questions matching your search. Try different keywords or browse categories.
                  </p>
                  <Button onClick={() => setSearchTerm('')} variant="primary">
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Still Need Help Section */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-gray-300 mb-8">
                If you couldn't find the answer to your question, feel free to reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Contact Support
                </Button>
                <Button href="mailto:support@zephryx.com" variant="outline">
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default FAQsPage 