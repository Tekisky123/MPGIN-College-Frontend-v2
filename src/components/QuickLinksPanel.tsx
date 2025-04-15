// QuickLinksPanel.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProfilePage from '../pages/ProfilePage';

const QuickLinksPanel = () => {
  const [activeId, setActiveId] = useState('chairman');
  
  const navItems = [
    { label: 'Chairman', id: 'chairman' },
    { label: "Principal's Desk", id: 'principal' },
    { label: 'President', id: 'president' },
    { label: 'Vice President', id: 'vice-president' },
    { label: 'Secretary', id: 'secretary' },
    { label: 'Board of Directors', id: 'board' },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation */}
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ y: -2 }}
              onClick={() => setActiveId(item.id)}
              className={`p-2 text-sm md:text-base rounded-lg transition-colors ${
                activeId === item.id
                  ? 'bg-mpgin-darkBlue text-white'
                  : 'bg-mpgin-blue/80 text-white hover:bg-mpgin-darkBlue'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <ProfilePage id={activeId} />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <motion.article 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">About MPGI</h2>
              <p className="text-gray-600 mb-4">
                Matoshri Pratishthan Group of Institutions (MPGI) has been a beacon of excellence 
                in Engineering & Management Education since 2009. Our integrated campus offers 
                multidisciplinary programs bridging academic knowledge with industry requirements.
              </p>
              <button className="text-mpgin-blue font-medium flex items-center hover:text-blue-400">
                Read More
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </motion.article>

            <div className="grid gap-4">
              <motion.article
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-200 rounded-xl shadow-xl border border-gray-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be a global center of excellence nurturing innovation and entrepreneurship 
                  while contributing to sustainable national development.
                </p>
              </motion.article>

              <motion.article
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-200 rounded-xl shadow-xl border border-gray-300"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To establish world-class institutions delivering quality education in Engineering, 
                  Management, and IT, fostering socially responsible leaders.
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksPanel;