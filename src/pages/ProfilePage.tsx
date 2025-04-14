import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { profiles } from '../data/profilesData';

type ProfilePageProps = {
  id: string;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ id }) => {
  // const { id } = useParams<{ id: string }>();
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Profile not found</h1>
          <p className="mt-2 text-gray-600">The requested profile does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Profile Card */}
            <div className="lg:col-span-1 bg-mpgin-blue p-8 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-6"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover border-4 border-white"
                />
              </motion.div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">{profile.name}</h2>
                <p className="mt-2 text-lg font-bold text-mpgin-darkBlue">{profile.title}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3 p-6 sm:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-sm sm:prose-base max-w-none"
              >
                {profile.content.split('\n\n').map((para, index) => {
                  // Check for bullet points or lists
                  if (para.startsWith('- ') || para.startsWith('* ') || para.match(/^\d+\./)) {
                    return (
                      <ul key={index} className="list-disc pl-5 mb-4 space-y-2">
                        {para.split('\n').map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace(/^[-*]\s|^\d+\.\s/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Check for numbered lists
                  if (para.match(/^\d+\)/)) {
                    return (
                      <ol key={index} className="list-decimal pl-5 mb-4 space-y-2">
                        {para.split('\n').map((item, i) => (
                          <li key={i} className="text-gray-700">
                            {item.replace(/^\d+\)\s/, '')}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  // Regular paragraph
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;