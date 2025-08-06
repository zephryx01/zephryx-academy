'use client'

import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300'
  
  const variantStyles = {
    primary: 'bg-black text-white border border-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.8)] hover:text-accent',
    secondary: 'bg-white text-black border border-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.8)] hover:text-accent-dark',
    outline: 'bg-transparent text-accent border border-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.8)] hover:bg-accent hover:bg-opacity-10',
  }
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  }
  
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : ''
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`
  
  if (href && !disabled) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button 