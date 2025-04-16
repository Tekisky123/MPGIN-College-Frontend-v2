// src/components/DepartmentGallery.tsx
import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { motion } from "framer-motion";

const DepartmentGallery = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!department) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {department.gallery.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="aspect-square overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DepartmentGallery;