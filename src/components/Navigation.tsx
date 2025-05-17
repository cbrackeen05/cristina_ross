import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Projects',
      subItems: [
        { name: 'Data Science', path: '/projects/data-science' },
        { name: 'Visualization', path: '/projects/visualization' },
        { name: 'Applications', path: '/projects/applications' },
      ],
    },
    { name: 'Photography', path: '/photography' },
    { name: 'Library', path: '/library' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 h-full w-64 bg-black/90 text-white p-6 z-40"
          >
            <nav className="mt-16">
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <ul className="pl-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.path}
                                className="text-gray-300 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-xl font-semibold hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 