// GalleryTable.tsx
import { useState } from 'react';
import { toast } from 'sonner';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

const GalleryTable = ({ school }: { school: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dummyData] = useState([
    { id: 1, title: 'Campus View', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHqWbJqsbkqiarDr4njKprxdSMMEPccmBTQ&s' },
    { id: 2, title: 'Lab Equipment', image: 'https://www.gkseries.com/blog/wp-content/uploads/2020/04/Matoshri-Pratishthans-Vishwabharti-Polytechnic-Institute-Nanded-1.jpg' },
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gallery - {school}
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Manage visual content for {school} with seamless interactions
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Item</span>
          <span className="sm:hidden">Add New</span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Preview</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dummyData.map((item) => (
              <tr 
                key={item.id} 
                className="hover:bg-gray-50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center transform transition-transform duration-200 hover:scale-105">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-xl shadow-sm border-2 border-gray-200"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent rounded-xl" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium text-lg">{item.title}</span>
                    <span className="text-gray-500 text-sm">Last updated: 2 hours ago</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="p-2.5 hover:bg-blue-50 rounded-xl text-blue-600 hover:text-blue-700 transition-all transform hover:scale-110">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2.5 hover:bg-red-50 rounded-xl text-red-600 hover:text-red-700 transition-all transform hover:scale-110">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 w-full max-w-xl shadow-2xl animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Upload New Media</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Media Title</label>
                <input
                  type="text"
                  placeholder="Enter media title"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                <div className="relative group">
                  <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center transition-all group-hover:border-blue-500 group-hover:bg-blue-50">
                    <svg 
                      className="w-12 h-12 text-gray-400 group-hover:text-blue-600 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500 group-hover:text-blue-600">
                      Drag & drop or click to upload
                    </p>
                  </div>
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Add detailed description..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  rows={4}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors font-medium"
              >
                Discard
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  toast.success('New media added to gallery');
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all transform hover:scale-105 shadow-md"
              >
                Publish Media
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTable;