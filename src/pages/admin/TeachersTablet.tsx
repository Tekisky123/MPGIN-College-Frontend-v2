// src/components/TeachersTable.tsx
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import api from '../../data/Api';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { collegeDepartments, CollegeType } from '../../data/colleges';
import { Pencil, Trash2, Plus } from 'lucide-react';

interface Faculty {
  _id: string;
  name: string;
  department: string;
  qualification: string;
  experience: string;
  photo: string;
}

interface Props {
  school: CollegeType;
}

const TeachersTable = ({ school }: Props) => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<Faculty | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    department: collegeDepartments[school][0],
    qualification: '',
    experience: '',
    photo: null as File | null,
  });
  const [preview, setPreview] = useState('');

  useEffect(() => {
    fetchFaculty();
  }, [school]);

  const fetchFaculty = async () => {
    try {
      const { data } = await api.get(`/faculty/college/${school}`);
      setFaculty(data);
    } catch {
      toast.error('Failed to fetch faculty');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleOpenEdit = (item: Faculty) => {
    setEditItem(item);
    setFormData({
      name: item.name,
      department: item.department,
      qualification: item.qualification,
      experience: item.experience,
      photo: null,
    });
    setPreview(item.photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({
      name: '',
      department: collegeDepartments[school][0],
      qualification: '',
      experience: '',
      photo: null,
    });
    setPreview('');
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || (!formData.photo && !editItem)) {
      toast.error('Please fill required fields');
      return;
    }

    try {
      setLoading(true);
      const form = new FormData();
      form.append('college', school);
      Object.entries(formData).forEach(([key, value]) => {
        if (value) form.append(key, value);
      });

      if (editItem) {
        await api.put(`/faculty/${editItem._id}`, form);
        toast.success('Faculty updated successfully');
      } else {
        await api.post('/faculty/add', form);
        toast.success('Faculty added successfully');
      }

      await fetchFaculty();
      handleCloseModal();
    } catch {
      toast.error(`Error ${editItem ? 'updating' : 'adding'} faculty`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this faculty member?')) return;

    try {
      await api.delete(`/faculty/${id}`);
      await fetchFaculty();
      toast.success('Faculty deleted successfully');
    } catch {
      toast.error('Error deleting faculty');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mt-8 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Faculty - {school}
        </h2>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <Plus size={18} /> Add Faculty
        </Button>
      </div>

      <table className="min-w-full text-sm border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Qualification</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(teacher => (
            <tr key={teacher._id} className="border-b hover:bg-gray-50 transition-all">
              <td className="p-3">
                <img src={teacher.photo} alt={teacher.name} className="w-12 h-12 rounded-full object-cover" />
              </td>
              <td className="p-3 font-medium text-gray-800">{teacher.name}</td>
              <td className="p-3">{teacher.qualification}</td>
              <td className="p-3">{teacher.experience}</td>
              <td className="p-3 capitalize">{teacher.department}</td>
              <td className="p-3 space-x-2">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => handleOpenEdit(teacher)}
                >
                  <Pencil size={18} />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(teacher._id)}
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${editItem ? 'Edit' : 'Add'} Faculty`}
      >
        <div className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />

          <Input
            label="Department"
            type="select"
            value={formData.department}
            options={collegeDepartments[school]}
            onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
          />

          <Input
            label="Qualification"
            value={formData.qualification}
            onChange={(e) => setFormData(prev => ({ ...prev, qualification: e.target.value }))}
          />

          <Input
            label="Experience"
            value={formData.experience}
            onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {editItem ? 'New Photo (optional)' : 'Photo'}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center relative">
              {preview && (
                <img src={preview} alt="Preview" className="max-h-48 mx-auto mb-4 rounded-lg" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {!preview && (
                <div className="py-8">
                  <p className="text-gray-500">Click to upload photo</p>
                  <p className="text-sm text-gray-400 mt-1">Recommended size 400x400px</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} isLoading={loading}>
              {editItem ? 'Update' : 'Add'} Faculty
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeachersTable;
