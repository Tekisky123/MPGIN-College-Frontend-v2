// ManageAdmins.tsx
import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { toast } from 'sonner';
import api from '../../data/Api';

interface Admin {
  _id: string;
  name: string;
  email: string;
}



const ManageAdmins = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Admin | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [editData, setEditData] = useState<Partial<Admin>>({});
  const [loading, setLoading] = useState({ action: '', isLoading: false });

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const { data } = await api.get('/user/getAllUsers');
      setAdmins(data);
    } catch (error: any) {
      toast.error('Failed to fetch admins');

    }
  };

  const handleAddAdmin = async () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    setLoading({ action: 'add', isLoading: true });
    try {
      await api.post('/user/register', formData);
      toast.success('Admin added successfully');
      setFormData({ name: '', email: '', password: '' });
      setIsModalOpen(false);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error adding admin');

    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };

  const handleUpdateAdmin = async (_id: string) => {
    const { name, email } = editData;
    if (!name?.trim() || !email?.trim()) {
      toast.error('Please fill required fields');
      return;
    }

    setLoading({ action: 'update', isLoading: true });
    try {
      await api.put(`/user/updateOneUser/${_id}`, editData);
      toast.success('Admin updated successfully');
      setEditingId(null);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error updating admin');

    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };

  const handleDeleteAdmin = async () => {
    if (!deleteCandidate) return;

    setLoading({ action: 'delete', isLoading: true });
    try {
      await api.delete(`/user/deleteOneUser/${deleteCandidate._id}`);
      toast.success('Admin deleted successfully');
      setDeleteCandidate(null);
      await fetchAdmins();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error deleting admin');

    } finally {
      setLoading({ action: '', isLoading: false });
    }
  };


  const renderCell = (admin: Admin, field: 'name' | 'email') =>
    editingId === admin._id ? (
      <input
        value={editData[field] || ''}
        onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
        className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
      />
    ) : (
      <span className="px-2">{admin[field]}</span>
    );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Manage Admins
          </h2>
          <p className="text-sm text-gray-500 mt-1">Add, edit, or remove admin accounts</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
          disabled={loading.isLoading}
        >
          <PlusIcon className="w-5 h-5" />
          <span className="hidden sm:inline">Add Admin</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Email</th>
              <th className="px-4 py-3.5 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3.5">{renderCell(admin, 'name')}</td>
                <td className="px-4 py-3.5">{renderCell(admin, 'email')}</td>
                <td className="px-4 py-3.5">
                  {editingId === admin._id ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleUpdateAdmin(admin._id)}
                        className="text-green-600 hover:text-green-700 px-3 py-1.5 rounded-lg disabled:opacity-50"
                        disabled={loading.isLoading}
                      >
                        {loading.action === 'update' ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-gray-600 hover:text-gray-700 px-3 py-1.5 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingId(admin._id);
                          setEditData({ name: admin.name, email: admin.email });
                        }}
                        className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setDeleteCandidate(admin)}
                        className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Admin Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-xl font-semibold mb-4">Add New Admin</h3>
        <div className="space-y-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddAdmin} isLoading={loading.action === 'add'}>
              {loading.action === 'add' ? 'Adding...' : 'Add Admin'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={!!deleteCandidate} onClose={() => setDeleteCandidate(null)}>
        <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete admin {deleteCandidate?.name} ({deleteCandidate?.email})?
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setDeleteCandidate(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAdmin} isLoading={loading.action === 'delete'}>
            {loading.action === 'delete' ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

// Modal Component
const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) =>
  isOpen ? (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-scaleIn">
        {children}
      </div>
    </div>
  ) : null;

// Input Component
const Input = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

// Button Component
const Button = ({
  variant = 'primary',
  isLoading,
  children,
  ...props
}: {
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-xl font-medium transition-all ${variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'danger'
        ? 'bg-red-600 text-white hover:bg-red-700'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    disabled={isLoading || props.disabled}
  >
    {isLoading ? (
      <span className="flex items-center gap-2">
        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
        {children}
      </span>
    ) : (
      children
    )}
  </button>
);

export default ManageAdmins;
