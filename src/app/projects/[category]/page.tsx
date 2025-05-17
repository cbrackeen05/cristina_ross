'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
}

const projects: Record<string, Project[]> = {
  'data-science': [
    {
      title: 'Data Analysis Project 1',
      description: 'A comprehensive data analysis project using Python and pandas',
      image: '/images/projects/ds1.jpg',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    // Add more data science projects
  ],
  'visualization': [
    {
      title: 'Data Visualization Project 1',
      description: 'Interactive data visualization using D3.js',
      image: '/images/projects/viz1.jpg',
      githubUrl: 'https://github.com/yourusername/viz1',
    },
    // Add more visualization projects
  ],
  'applications': [
    {
      title: 'Web Application 1',
      description: 'Full-stack web application built with React and Node.js',
      image: '/images/projects/app1.jpg',
      githubUrl: 'https://github.com/yourusername/app1',
    },
    // Add more application projects
  ],
};

export default function ProjectCategory({
  params,
}: {
  params: { category: string };
}) {
  const categoryProjects = projects[params.category] || [];

  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 capitalize"
        >
          {params.category.replace('-', ' ')}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
} 