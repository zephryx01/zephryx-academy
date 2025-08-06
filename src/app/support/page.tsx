'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FaEnvelope, FaCommentAlt, FaQuestion, FaHeadset, FaBook, FaTools, FaExclamationTriangle } from 'react-icons/fa'

// FAQ accordion component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full text-left py-4 px-0 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-accent transition-transform duration-300 transform">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  )
}

export default function Support() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle the form submission to your backend here
    console.log({ name, email, subject, message })
    setSubmitted(true)
    // Reset form
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
  
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
    },
    {
      question: "Can I access course content on mobile devices?",
      answer: "Yes, all our courses are fully responsive and can be accessed on phones, tablets, and desktop computers. For the best experience with practical labs, we recommend using a desktop or laptop."
    },
    {
      question: "Are there any prerequisites for the advanced courses?",
      answer: "Most advanced courses require either completion of our beginner-level courses or equivalent knowledge. Each course page lists specific prerequisites to help you determine if you're ready."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "Once you purchase a course, you have lifetime access to all course materials, including future updates. Free courses remain accessible as long as you maintain an active account."
    },
    {
      question: "Do you offer any certification upon course completion?",
      answer: "Yes, all our premium courses include a completion certificate. While these aren't industry certifications, they demonstrate your commitment to professional development."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments. For team or enterprise licenses, we also offer invoice-based payments."
    }
  ]
  
  const supportOptions = [
    {
      title: "Technical Support",
      icon: <FaTools className="h-8 w-8 text-accent" />,
      description: "Get help with technical issues related to accessing courses, labs, or account problems.",
      action: "Contact Tech Support",
      link: "#contact-form"
    },
    {
      title: "Course Assistance",
      icon: <FaBook className="h-8 w-8 text-accent" />,
      description: "Questions about course content, labs, or educational materials.",
      action: "Ask an Instructor",
      link: "#contact-form"
    },
    {
      title: "Billing & Accounts",
      icon: <FaHeadset className="h-8 w-8 text-accent" />,
      description: "Help with purchases, subscriptions, refunds, or account management.",
      action: "Contact Billing",
      link: "#contact-form"
    },
    {
      title: "Report an Issue",
      icon: <FaExclamationTriangle className="h-8 w-8 text-accent" />,
      description: "Report bugs, errors, or security vulnerabilities on our platform.",
      action: "Report Issue",
      link: "#contact-form"
    }
  ]

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-black py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Need <span className="neon-text">Help</span>?
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                We're here to support you on your cybersecurity learning journey. Find answers to common questions or reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="#faqs" 
                  variant="outline"
                >
                  <FaQuestion className="mr-2" /> Browse FAQs
                </Button>
                <Button 
                  href="#contact-form"
                >
                  <FaEnvelope className="mr-2" /> Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-16 bg-gray-dark">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Support <span className="neon-text">Options</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-black p-8 rounded-lg border border-gray-800 hover:neon-border transition-all duration-300 flex flex-col">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">
                    {option.description}
                  </p>
                  <a 
                    href={option.link} 
                    className="text-accent text-center hover:text-white transition-colors flex items-center justify-center"
                  >
                    {option.action} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="neon-text">Questions</span></h2>
              
              <div className="bg-gray-dark rounded-lg border border-gray-800 p-6 md:p-8">
                {faqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">
                  Don't see your question here? Check our comprehensive <a href="/contact/faqs" className="text-accent hover:text-white">FAQ page</a> or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-gray-dark">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact <span className="neon-text">Us</span></h2>
              
              <div className="bg-black rounded-lg border border-gray-800 p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <FaCommentAlt className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. Our support team will get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="John Doe"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="john@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="How can we help you?"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Describe your issue or question in detail..."
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit">
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              
              <div className="mt-12 p-6 bg-black rounded-lg border border-gray-800 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-gray-400">
                    For urgent matters, you can reach our support team directly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="mailto:support@zephryx-academy.com" variant="outline">
                    <FaEnvelope className="mr-2" /> Email Support
                  </Button>
                  <Button href="tel:+15551234567">
                    <FaHeadset className="mr-2" /> Call Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 