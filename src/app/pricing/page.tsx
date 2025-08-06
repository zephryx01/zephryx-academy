'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { FaCheck, FaShieldAlt, FaLaptopCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  
  const togglePricing = () => {
    setIsAnnual(!isAnnual)
  }
  
  const plans = [
    {
      name: 'Basic',
      icon: <FaShieldAlt className="h-12 w-12 text-accent" />,
      description: 'Perfect for beginners starting their cybersecurity journey',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        'Access to 5 beginner courses',
        'Basic virtual lab environment',
        'Community forum access',
        'Course completion certificates',
        'Email support'
      ],
      buttonText: 'Start Basic Plan',
      popular: false
    },
    {
      name: 'Professional',
      icon: <FaLaptopCode className="h-12 w-12 text-accent" />,
      description: 'Ideal for cybersecurity professionals looking to advance their skills',
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        'Access to all 30+ courses',
        'Full virtual lab environment',
        'Community forum access',
        'Course completion certificates',
        'Priority email support',
        'Monthly live Q&A sessions',
        'Access to course projects'
      ],
      buttonText: 'Get Professional Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <FaRocket className="h-12 w-12 text-accent" />,
      description: 'For teams and organizations training multiple employees',
      monthlyPrice: 199.99,
      annualPrice: 1999.99,
      features: [
        'Access to all 30+ courses',
        'Advanced enterprise lab environment',
        'Community forum access',
        'Course completion certificates',
        'Dedicated support manager',
        'Weekly live Q&A sessions',
        'Team progress tracking',
        'Custom learning paths',
        'LMS integration'
      ],
      buttonText: 'Contact Sales',
      popular: false
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
                Flexible <span className="neon-text">Pricing</span> Plans
              </h1>
              <p className="text-gray-300 text-lg mb-10">
                Choose the perfect plan to advance your cybersecurity skills and career. 
                All plans include ongoing updates to course content.
              </p>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center mb-10">
                <span className={`mr-3 ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>Monthly</span>
                <button 
                  onClick={togglePricing}
                  className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-800 transition-colors focus:outline-none"
                >
                  <span className="sr-only">Toggle pricing</span>
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-accent transition-transform ${
                      isAnnual ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>Annual</span>
                <span className="ml-2 text-sm text-accent font-medium">Save 16%</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section className="py-16 bg-gray-dark">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`
                    bg-black p-8 rounded-lg 
                    ${plan.popular 
                      ? 'border-2 border-accent relative shadow-lg shadow-accent/20 transform hover:scale-105' 
                      : 'border border-gray-800 hover:border-accent'
                    } 
                    transition-all duration-300 flex flex-col
                  `}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-6">
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-400 mb-6 text-center">{plan.description}</p>
                  
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                    </span>
                    <span className="text-gray-400">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                    
                    {isAnnual && (
                      <div className="text-sm text-accent mt-2">
                        ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)} savings
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <FaCheck className="text-accent flex-shrink-0 mt-1 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    href={plan.name === 'Enterprise' ? '/contact' : '/signup'} 
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full justify-center"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Plan?</h3>
              <p className="text-gray-400 mb-6">
                We offer tailored solutions for organizations with specific training requirements.
                Contact our team to discuss custom plans for your organization.
              </p>
              <Button href="/contact" variant="outline">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="neon-text">Questions</span></h2>
              
              <div className="space-y-6">
                <div className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">Can I switch plans later?</h3>
                  <p className="text-gray-400">
                    Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit toward your next billing cycle.
                  </p>
                </div>
                
                <div className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">Do you offer a money-back guarantee?</h3>
                  <p className="text-gray-400">
                    Yes, we offer a 14-day money-back guarantee. If you're not satisfied with your subscription, you can cancel within 14 days of purchase for a full refund.
                  </p>
                </div>
                
                <div className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-400">
                    We accept all major credit cards, PayPal, and cryptocurrency payments. For Enterprise plans, we also offer invoice-based payments with net-30 terms.
                  </p>
                </div>
                
                <div className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">Are there any additional fees?</h3>
                  <p className="text-gray-400">
                    No, there are no hidden fees. The price you see is the price you pay. All plans include access to the features listed, and we don't charge extra for updates to existing course content.
                  </p>
                </div>
                
                <div className="bg-gray-dark p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-3">How do team subscriptions work?</h3>
                  <p className="text-gray-400">
                    Our Enterprise plan includes a management portal where team administrators can add or remove users, track progress, and generate reports. We also offer custom onboarding for teams of 10 or more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-dark border-t border-gray-800">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to <span className="neon-text">Level Up</span> Your Cybersecurity Skills?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of professionals who are already building their cybersecurity careers with Zephryx Academy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/signup" size="lg">
                  <FaGraduationCap className="mr-2" /> Start Learning Now
                </Button>
                <Button href="/courses" variant="outline" size="lg">
                  Browse Courses
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