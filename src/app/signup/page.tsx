'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub, FaLinkedin, FaShieldAlt } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function Signup() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setError('')
    
    // Validate form
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (!agreeTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return
    }
    
    try {
      setIsLoading(true)
      
      // In a real app, you would handle registration here
      console.log('Registration attempt:', { fullName, email })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to dashboard after successful registration
      window.location.href = '/dashboard'
    } catch (err) {
      setError('An error occurred during registration. Please try again.')
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
            <div className="flex justify-center mb-6">
              <div className="bg-accent/10 rounded-full p-3">
                <FaShieldAlt className="text-accent h-8 w-8" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Create Your <span className="neon-text">Account</span>
              </h1>
              <p className="text-gray-400">
                Join Zephryx Academy and start your cybersecurity journey
              </p>
            </div>
            
            {error && (
              <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
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
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 text-accent bg-gray-dark border-gray-800 rounded focus:ring-accent"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-accent hover:text-white transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-accent hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button
                type="submit"
                className="w-full justify-center"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
            
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-800"></div>
              <span className="px-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-gray-800"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex justify-center items-center py-2.5 border border-gray-800 rounded-md hover:bg-gray-800 transition-colors"
              >
                <FaGoogle className="text-[#DB4437]" />
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2.5 border border-gray-800 rounded-md hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="text-white" />
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2.5 border border-gray-800 rounded-md hover:bg-gray-800 transition-colors"
              >
                <FaLinkedin className="text-[#0A66C2]" />
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-accent hover:text-white transition-colors">
                  Log in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mt-8">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FaShieldAlt className="text-accent h-5 w-5" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Your data is secure with us</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    We implement industry-standard security measures to protect your personal information. 
                    We will never share your data with third parties without your consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 