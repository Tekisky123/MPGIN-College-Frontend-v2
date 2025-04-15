// ManageAdmins.tsx
import { useState, useEffect, useCallback } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';

interface Admin {
  id: number;
  name: string;
  email: string;
}

const ManageAdmins = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Admin | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState<Partial<Admin>>({});

  // Fetch admins on mount
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await fetch('/api/admins');
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      toast.error('Failed to fetch admins');
    }
  };

  const handleAddAdmin = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to add admin');
      
      toast.success('Admin added successfully');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', password: '' });
      await fetchAdmins();
    } catch (error) {
      toast.error('Error adding admin');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateAdmin = async (id: number) => {
    if (!editData.name || !editData.email) {
      toast.error('Please fill required fields');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/admins/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      });

      if (!response.ok) throw new Error('Failed to update admin');
      
      toast.success('Admin updated successfully');
      setEditingId(null);
      await fetchAdmins();
    } catch (error) {
      toast.error('Error updating admin');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async () => {
    if (!deleteCandidate) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/admins/${deleteCandidate.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete admin');
      
      toast.success('Admin deleted successfully');
      setDeleteCandidate(null);
      await fetchAdmins();
    } catch (error) {
      toast.error('Error deleting admin');
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (admin: Admin) => {
    setEditingId(admin.id);
    setEditData({ name: admin.name, email: admin.email });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({});
  };

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
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 hover:shadow-lg disabled:opacity-50"
          disabled={loading}
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
                <td className="px-4 py-3">
                  {editingId === admin.id ? (
                    <input
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="border rounded-lg px-2 py-1"
                    />
                  ) : (
                    admin.name
                  )}
                </td>
                <td className="px-4 py-3">
                  {editingId === admin.id ? (
                    <input
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="border rounded-lg px-2 py-1"
                    />
                  ) : (
                    admin.email
                  )}
                </td>
                <td className="px-4 py-3 flex gap-2">
                  {editingId === admin.id ? (
                    <>
                      <button
                        onClick={() => handleUpdateAdmin(admin.id)}
                        className="text-green-600 hover:text-green-800 transition disabled:opacity-50"
                        disabled={loading}
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="text-gray-600 hover:text-gray-800 transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(admin)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        disabled={loading}
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setDeleteCandidate(admin)}
                        className="text-red-600 hover:text-red-800 transition"
                        disabled={loading}
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Admin Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Admin</h3>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl disabled:opacity-50"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleAddAdmin}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete admin {deleteCandidate.name} ({deleteCandidate.email})?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteCandidate(null)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl disabled:opacity-50"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAdmin}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAdmins;