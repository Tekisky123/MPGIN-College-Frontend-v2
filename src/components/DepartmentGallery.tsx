import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../data/Api";

const DepartmentGallery = () => {
  const { collegeId, departmentId } = useParams();
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get(`/gallery/college/${collegeId}/department/${departmentId}`);
        setGallery(response.data);
      } catch (err) {
        setError("Failed to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [collegeId, departmentId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center mt-8">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.length === 0 ? (
        <div className="text-gray-600 text-center mt-8">No gallery images found.</div>
      ) : (
        gallery.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="aspect-square overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image.image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default DepartmentGallery;