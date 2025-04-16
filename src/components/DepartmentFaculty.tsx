import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../data/Api";

const DepartmentFaculty = () => {
  const { collegeId, departmentId } = useParams();
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await api.get(`/faculty/college/${collegeId}/department/${departmentId}`);
        setFaculty(response.data);
      } catch (err) {
        setError("Failed to load faculty data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faculty.length === 0 ? (
        <div className="text-gray-600 text-center mt-8">No faculty members found.</div>
      ) : (
        faculty.map((member) => (
          <motion.div
            key={member._id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="flex items-center p-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.qualification}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default DepartmentFaculty;