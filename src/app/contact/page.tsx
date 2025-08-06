'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 1500)
  }

  const faqs = [
    {
      question: 'How do I access the course content after purchase?',
      answer: 'After purchasing a course, you\'ll receive immediate access to the content in your dashboard. You can access it anytime by logging into your account.'
    },
    {
      question: 'Are the courses self-paced or do they have a schedule?',
      answer: 'All our courses are self-paced, allowing you to learn at your own convenience. Once purchased, you have lifetime access to the course materials.'
    },
    {
      question: 'Do you offer any free resources for beginners?',
      answer: 'Yes! We offer several free resources for beginners in our Resources section. These include basic tutorials, cheatsheets, and introductory guides to cybersecurity concepts.'
    },
    {
      question: 'Can I get a certificate after completing a course?',
      answer: 'Yes, upon completing a course and passing the final assessment, you\'ll receive a digital certificate of completion that you can share on your resume or LinkedIn profile.'
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
                Get in <span className="neon-text">Touch</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Have questions or feedback? We'd love to hear from you. Reach out to our team using the form below.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="bg-gray-dark py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-accent mr-4">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-400">info@zephryx.com</p>
                      <p className="text-gray-400">support@zephryx.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent mr-4">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent mr-4">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-400">
                        123 Cyber Street, Suite 101<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                      <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                      <FaDiscord size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-black p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  {submitSuccess ? (
                    <div className="bg-gray-dark p-6 rounded-lg border border-accent text-center">
                      <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-300 mb-4">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setSubmitSuccess(false)}
                        variant="primary"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block mb-2 font-medium">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 font-medium">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Course Question">Course Question</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                      
                      {submitError && (
                        <p className="mt-4 text-red-500">{submitError}</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-black py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="neon-text">Questions</span></h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Check our complete FAQ or contact our support team.
                </p>
                <Button href="/contact/faqs" variant="outline">
                  View All FAQs
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

export default ContactPage 