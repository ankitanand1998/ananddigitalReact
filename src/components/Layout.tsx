import React from 'react';
import { Sidebar } from './Sidebar';
import { BookOpen } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export function Layout({ children, selectedCategory, setSelectedCategory }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-indigo-600" />
          </div>
          <b className="text-4xl font-bold text-gray-900 mb-4">AnandDigitalBlog</b>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <Sidebar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>
          
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
