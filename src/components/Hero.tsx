'use client'

import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

type HeroProps = {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Function to check if the current words are "Zephryx Academy"
  const isZephryxAcademy = (word: string, nextWord?: string) => {
    const combined = nextWord ? `${word} ${nextWord}`.toLowerCase() : word.toLowerCase();
    return combined === 'zephryx academy' || word.toLowerCase() === 'zephryx' || word.toLowerCase() === 'academy';
  }

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Grid background with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glowing orb effect with neon green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            {title.split(' ').map((word, index, arr) => {
              const isZephryx = word.toLowerCase() === 'zephryx';
              const isAcademy = word.toLowerCase() === 'academy';
              const shouldGlow = isZephryx || isAcademy;
              
              return (
                <span key={index} className={shouldGlow ? 'neon-text' : ''}>
                  {word}{' '}
                </span>
              );
            })}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Button href={ctaLink} size="lg">
              {ctaText}
            </Button>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant="outline" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Hero 