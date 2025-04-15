// ProfilePage.tsx
import { motion } from 'framer-motion';
import { profiles } from '../data/profilesData';

const ProfilePage = ({ id }: { id: string }) => {
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800">Profile not found</h1>
          <p className="mt-2 text-gray-600">The requested profile does not exist.</p>
        </div>
      </div>
    );
  }

  const renderContent = (text: string) => {
    return text.split('\n\n').map((para, index) => {
      const isUnorderedList = para.startsWith('- ') || para.startsWith('* ');
      const isOrderedList = para.match(/^\d+\.|^\d+\)/);

      if (isUnorderedList || isOrderedList) {
        const ListTag = isUnorderedList ? 'ul' : 'ol';
        const listStyle = isUnorderedList ? 'list-disc' : 'list-decimal';

        return (
          <ListTag key={index} className={`${listStyle} pl-6 mb-4 space-y-2`}>
            {para.split('\n').map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed">
                {item.replace(/^[-*]\s|^\d+[.)]\s/, '')}
              </li>
            ))}
          </ListTag>
        );
      }

      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {para}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        <div className="lg:col-span-1 bg-mpgin-blue p-6 flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="mb-4">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-white rounded-full"
            />
          </motion.div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white">{profile.name}</h2>
            <p className="mt-1 text-md font-semibold text-mpgin-darkBlue">{profile.title}</p>
          </div>
        </div>

        <div className="lg:col-span-3 p-6 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose max-w-none"
          >
            {renderContent(profile.content)}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;