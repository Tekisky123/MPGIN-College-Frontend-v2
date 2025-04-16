import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Pencil, Trash, ImagePlus } from 'lucide-react';

import api from '../../data/Api';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { collegeDepartments, CollegeType } from '../../data/colleges';

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
  college: CollegeType;
  department: string;
}

interface Props {
  school: CollegeType;
}

const GalleryTable = ({ school }: Props) => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    department: collegeDepartments[school][0],
    image: null as File | null,
  });
  const [preview, setPreview] = useState('');

  useEffect(() => {
    fetchGallery();
  }, [school]);

  const fetchGallery = async () => {
    try {
      const { data } = await api.get(`/gallery/college/${school}`);
      setGallery(data);
    } catch {
      toast.error('Failed to fetch gallery');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const openModal = (item?: GalleryItem) => {
    setEditItem(item || null);
    setFormData({
      title: item?.title || '',
      department: item?.department || collegeDepartments[school][0],
      image: null,
    });
    setPreview(item?.image || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setFormData({ title: '', department: collegeDepartments[school][0], image: null });
    setPreview('');
  };

  const handleSubmit = async () => {
    if (!formData.title.trim() || (!formData.image && !editItem)) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      setLoading(true);
      const form = new FormData();
      form.append('title', formData.title);
      form.append('college', school);
      form.append('department', formData.department);
      if (formData.image) form.append('image', formData.image);

      if (editItem) {
        await api.put(`/gallery/${editItem._id}`, form);
        toast.success('Image updated successfully');
      } else {
        await api.post('/gallery/upload', form);
        toast.success('Image uploaded successfully');
      }

      await fetchGallery();
      closeModal();
    } catch {
      toast.error(`Error ${editItem ? 'updating' : 'uploading'} image`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      await api.delete(`/gallery/${id}`);
      await fetchGallery();
      toast.success('Image deleted successfully');
    } catch {
      toast.error('Error deleting image');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Gallery - {school}
        </h2>
        <Button onClick={() => openModal()} icon={<ImagePlus className="w-5 h-5" />}>
          Add New Image
        </Button>
      </div>

      <table className="min-w-full table-auto border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-600 text-sm">
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Department</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map(item => (
            <tr key={item._id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">
                <img src={item.image} alt={item.title} className="h-16 w-auto rounded-md" />
              </td>
              <td className="px-4 py-3 font-medium">{item.title}</td>
              <td className="px-4 py-3 text-blue-600">{item.department}</td>
              <td className="px-4 py-3 space-x-2 flex">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => openModal(item)}
                  icon={<Pencil className="w-4 h-4" />}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(item._id)}
                  icon={<Trash className="w-4 h-4" />}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={`${editItem ? 'Edit' : 'Upload'} Image`}>
        <div className="space-y-4">
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          />
          <Input
            label="Department"
            type="select"
            value={formData.department}
            options={collegeDepartments[school]}
            onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {editItem ? 'New Image (optional)' : 'Image'}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center relative">
              {preview && <img src={preview} alt="Preview" className="max-h-48 mx-auto mb-4 rounded-lg" />}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {!preview && (
                <div className="py-8">
                  <p className="text-gray-500">Click to upload image</p>
                  <p className="text-sm text-gray-400 mt-1">Recommended ratio 16:9</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} isLoading={loading}>
              {editItem ? 'Update' : 'Upload'} Image
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryTable;
