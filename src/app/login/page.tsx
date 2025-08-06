'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLock, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setError('')
    
    // Validate form
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    try {
      setIsLoading(true)
      
      // In a real app, you would handle authentication here
      console.log('Login attempt:', { email, rememberMe })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to dashboard after successful login
      window.location.href = '/dashboard'
    } catch (err) {
      setError('Invalid email or password. Please try again.')
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
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Welcome <span className="neon-text">Back</span>
              </h1>
              <p className="text-gray-400">
                Log in to continue your cybersecurity journey
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
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-xs text-accent hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
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
                  />
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-accent bg-gray-dark border-gray-800 rounded focus:ring-accent"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                  Remember me for 30 days
                </label>
              </div>
              
              <Button
                type="submit"
                className="w-full justify-center"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
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
                <FaGoogle className="text-[#fff]" />
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
                <FaLinkedin className="text-[#fff]" />
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/signup" className="text-accent hover:text-white transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mt-8 text-center">
            <p className="text-sm text-gray-400">
              By logging in, you agree to our{' '}
              <Link href="/terms" className="text-accent hover:text-white transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-accent hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
} 