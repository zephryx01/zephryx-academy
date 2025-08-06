'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaArrowLeft, FaCheck } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setError('')
    
    // Validate email
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    try {
      setIsLoading(true)
      
      // In a real app, you would send a password reset request to your backend
      console.log('Password reset requested for:', email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success state
      setIsSubmitted(true)
    } catch (err) {
      setError('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      
      <main className="bg-gray-dark min-h-screen py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-black p-8 rounded-lg border border-gray-800">
            {isSubmitted ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
                  <FaCheck className="h-8 w-8" />
                </div>
                
                <h1 className="text-3xl font-bold mb-4">
                  Check Your Email
                </h1>
                
                <p className="text-gray-400 mb-8">
                  If an account exists for <span className="text-accent">{email}</span>, we've sent instructions for resetting your password. Please check your inbox (and spam folder).
                </p>
                
                <div className="flex flex-col space-y-4">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Try Again
                  </Button>
                  
                  <Link 
                    href="/login" 
                    className="text-accent hover:text-white transition-colors inline-flex items-center justify-center"
                  >
                    <FaArrowLeft className="mr-2" /> Back to Login
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">
                    Reset <span className="neon-text">Password</span>
                  </h1>
                  <p className="text-gray-400">
                    Enter your email address and we'll send you instructions to reset your password.
                  </p>
                </div>
                
                {error && (
                  <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      We'll send a password reset link to this email address.
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      href="/login" 
                      className="text-accent hover:text-white transition-colors inline-flex items-center"
                    >
                      <FaArrowLeft className="mr-2" /> Back to Login
                    </Link>
                  </div>
                </form>
              </>
            )}
          </div>
          
          <div className="max-w-md mx-auto mt-8 bg-gray-800/30 border border-gray-700 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <FaEnvelope className="text-accent h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-400">
                  If you don't receive an email within a few minutes, please check your spam folder or contact our <Link href="/support" className="text-accent hover:text-white transition-colors">support team</Link> for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 