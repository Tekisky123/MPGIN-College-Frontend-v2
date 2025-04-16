// src/pages/DepartmentPage.tsx
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { motion } from "framer-motion";
import DepartmentSidebar from "../components/DepartmentSidebar";

const DepartmentPage = () => {
  const { collegeId, departmentId } = useParams();
  const navigate = useNavigate();

  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!college || !department) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 text-xl font-semibold">
        Department not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-72 sm:h-80 md:h-[22rem] lg:h-[24rem] bg-darkBlue">
        <img
          src={department.image}
          alt={department.name}
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
              {department.name}
            </h1>
            <p className="text-lg md:text-xl font-medium">{college.name}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <DepartmentSidebar college={college} department={department} />
        </div>

        {/* Main Content */}
        <motion.div
          className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentPage;
