
// src/components/DepartmentFaculty.tsx
import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { motion } from "framer-motion";

const DepartmentFaculty = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!department) return null;

  // Mock faculty data - replace with actual data
  const faculty = Array.from({ length: department.facultyCount }, (_, i) => ({
    id: i + 1,
    name: `Faculty Member ${i + 1}`,
    qualification: "M.Tech, PhD",
    expertise: "Core Subject Expert",
    image: `/images/faculty-${(i % 3) + 1}.jpg`,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faculty.map((member) => (
        <motion.div
          key={member.id}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="flex items-center p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.qualification}</p>
              <p className="text-sm text-gray-500">{member.expertise}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DepartmentFaculty;