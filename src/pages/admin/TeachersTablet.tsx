// TeachersTable.tsx
import { useState } from 'react';
import { toast } from 'sonner';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

const TeachersTable = ({ school }: { school: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dummyData] = useState([
    { id: 1, name: 'John Doe', subject: 'Mechanical Engineering', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', subject: 'Computer Science', email: 'jane@example.com' },
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Teachers - {school}
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Manage all teaching staff details for {school} in one place.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Teacher</span>
          <span className="sm:hidden">Add New</span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dummyData.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-800">{teacher.name}</td>
                <td className="px-6 py-4 text-gray-700">{teacher.subject}</td>
                <td className="px-6 py-4 text-gray-600">{teacher.email}</td>
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
              <h3 className="text-2xl font-bold text-gray-900">Add New Teacher</h3>
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
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
                  toast.success('Teacher added successfully');
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all transform hover:scale-105 shadow-md"
              >
                Save Teacher
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersTable;
