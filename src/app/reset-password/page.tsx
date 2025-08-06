'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaLock, FaCheck, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [isValidToken, setIsValidToken] = useState(true)
  
  useEffect(() => {
    // Get token from URL query parameter
    const tokenParam = searchParams.get('token')
    setToken(tokenParam)
    
    // In a real app, you would validate the token with your backend
    // This is just a simple validation for demo purposes
    if (!tokenParam || tokenParam.length < 10) {
      setIsValidToken(false)
    }
  }, [searchParams])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset error state
    setError('')
    
    // Validate passwords
    if (!password || !confirmPassword) {
      setError('Please enter and confirm your new password')
      return
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    try {
      setIsLoading(true)
      
      // In a real app, you would send a request to your backend to reset the password
      console.log('Password reset with token:', token)
      console.log('New password:', password)
      
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
  
  const handleSuccessContinue = () => {
    router.push('/login')
  }
  
  // If token is invalid, show an error message
  if (!isValidToken) {
    return (
      <>
        <Navbar />
        
        <main className="bg-gray-dark min-h-screen py-16">
          <div className="container-custom">
            <div className="max-w-md mx-auto bg-black p-8 rounded-lg border border-gray-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 text-red-500 mb-6">
                  <FaExclamationTriangle className="h-8 w-8" />
                </div>
                
                <h1 className="text-3xl font-bold mb-4">
                  Invalid or Expired Link
                </h1>
                
                <p className="text-gray-400 mb-8">
                  This password reset link is invalid or has expired. Please request a new password reset link.
                </p>
                
                <Link href="/forgot-password">
                  <Button className="w-full justify-center">
                    Request New Reset Link
                  </Button>
                </Link>
                
                <div className="mt-6">
                  <Link 
                    href="/login" 
                    className="text-accent hover:text-white transition-colors inline-flex items-center"
                  >
                    <FaArrowLeft className="mr-2" /> Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </>
    )
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
                  Password Reset Complete
                </h1>
                
                <p className="text-gray-400 mb-8">
                  Your password has been successfully reset. You can now log in with your new password.
                </p>
                
                <Button
                  onClick={handleSuccessContinue}
                  className="w-full justify-center"
                >
                  Continue to Login
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">
                    Create New <span className="neon-text">Password</span>
                  </h1>
                  <p className="text-gray-400">
                    Please enter and confirm your new password below.
                  </p>
                </div>
                
                {error && (
                  <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={8}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      Password must be at least 8 characters long.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-3 pl-10 bg-gray-dark border border-gray-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-accent"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Resetting Password...' : 'Reset Password'}
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
                <FaLock className="text-accent h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-400">
                  For security reasons, choose a strong password that you haven't used before. If you need assistance, please contact our <Link href="/support" className="text-accent hover:text-white transition-colors">support team</Link>.
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