'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLock, FaUnlock } from 'react-icons/fa'

type CardProps = {
  title: string
  description: string
  image: string
  link: string
  isPremium?: boolean
  category?: string
  className?: string
}

const Card = ({
  title,
  description,
  image,
  link,
  isPremium = false,
  category,
  className = '',
}: CardProps) => {
  return (
    <div className={`bg-gray-dark rounded-lg overflow-hidden transition-all duration-300 hover:neon-border group ${className}`}>
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-black px-3 py-1 text-xs rounded text-accent">
            {category}
          </span>
        )}
        {isPremium !== undefined && (
          <span className="absolute top-4 right-4 bg-black p-2 rounded-full">
            {isPremium ? (
              <FaLock className="text-accent" size={14} />
            ) : (
              <FaUnlock className="text-accent" size={14} />
            )}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <Link 
          href={link}
          className="text-accent text-sm font-medium hover:underline inline-flex items-center"
        >
          {isPremium ? 'Enroll Now' : 'Learn More'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Card 