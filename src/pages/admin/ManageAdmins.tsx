// ManageAdmins.tsx
import { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

const ManageAdmins = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [admins] = useState([
    { id: 1, name: 'Admin 1', email: 'admin1@example.com' },
    { id: 2, name: 'Admin 2', email: 'admin2@example.com' },
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Manage Admins
          </h2>
          <p className="text-sm text-gray-500">Add, edit, or remove admin accounts</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg"
        >
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Add New Admin</span>
          <span className="sm:hidden">Add New</span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">{admin.name}</td>
                <td className="px-4 py-3">{admin.email}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Admin</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  toast.success('Admin added successfully');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;
