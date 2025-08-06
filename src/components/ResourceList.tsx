'use client'

import React, { useState, ReactNode } from 'react'
import Card from '@/components/Card'
import { FaSearch, FaFilter } from 'react-icons/fa'

type ResourceItemProps = {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: string
  type: string
  difficulty?: string
}

type ResourceListProps = {
  resources: ResourceItemProps[]
  title: ReactNode
  description: string
  showFilters?: boolean
  categories?: string[]
}

const ResourceList = ({
  resources,
  title,
  description,
  showFilters = true,
  categories = [],
}: ResourceListProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  
  const uniqueCategories = ['All', ...Array.from(new Set(categories.length ? categories : resources.map(resource => resource.category)))]
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']
  
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    
    const matchesDifficulty = selectedDifficulty === 'All' || resource.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-gray-300 text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      {showFilters && (
        <section className="bg-gray-dark py-8 border-b border-gray-800">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                {uniqueCategories.length > 1 && (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaFilter className="text-gray-400" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-black text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {uniqueCategories.map((category) => (
                        <option key={category} value={category}>
                          {category === 'All' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFilter className="text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-10 py-3 border border-gray-800 rounded-md bg-black text-white appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty === 'All' ? 'All Levels' : difficulty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Resources List */}
      <section className="bg-black py-16">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  image={resource.image}
                  link={resource.link}
                  category={resource.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No resources found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ResourceList 