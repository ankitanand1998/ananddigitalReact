import React from 'react';
import { Tag } from 'lucide-react';
import { CATEGORIES } from '../constants/categories';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Tag className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold">Categories</h2>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
            selectedCategory === null 
              ? 'bg-indigo-100 text-indigo-700' 
              : 'hover:bg-gray-100'
          }`}
        >
          All Posts
        </button>
        
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              selectedCategory === category 
                ? 'bg-indigo-100 text-indigo-700' 
                : 'hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}