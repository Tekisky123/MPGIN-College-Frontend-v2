// src/pages/CollegeDepartments.tsx
import { Link, useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { motion } from "framer-motion";

const CollegeDepartments = () => {
  const { collegeId } = useParams();
  const college = colleges.find(c => c.id === collegeId);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        College not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-72 sm:h-80 md:h-[22rem] lg:h-[24rem] bg-darkBlue">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mpgin-blue/80 to-darkBlue/80 flex items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {college.name} Departments
            </h1>
            <p className="text-lg md:text-xl font-medium">Explore the departments</p>
          </motion.div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {college.departments.map((department) => (
            <motion.div
              key={department.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <Link to={`/${college.id}/departments/${department.id}`}>
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{department.name}</h3>
                  <p className="text-gray-600 line-clamp-3">{department.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeDepartments;
