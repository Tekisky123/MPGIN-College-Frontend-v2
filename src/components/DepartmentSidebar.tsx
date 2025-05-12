import { College, Department } from "../data/collegesData";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  college: College;
  department: Department;
}

const DepartmentSidebar = ({ college, department }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define tabs and their corresponding routes
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "overview", label: "Overview" },
    { id: "faculty", label: "Faculty" },
    { id: "gallery", label: "Gallery" },
    { id: "labs", label: "Labs" },
    // { id: "infrastructure", label: "Infrastructure" },
  ];

  // Determine the active tab based on the current route
  const activeTab = location.pathname.split("/").pop() || "profile";

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
      {/* Department Navigation */}
      <nav className="space-y-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeTab === tab.id
                ? "bg-blue-50 text-blue-700 font-semibold"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Other Departments */}
      <div className="border-t pt-4">
        <h3 className="font-semibold text-gray-800 mb-3">Other Departments</h3>
        <ul className="space-y-2">
          {college.departments.map((dept) => (
            <motion.li
              key={dept.id}
              whileHover={{ x: 5 }}
              className={`border-l-4 ${dept.id === department.id ? "border-blue-500" : "border-transparent hover:border-blue-500"
                }`}
            >
              <Link
                to={`/${college.id}/departments/${dept.id}/profile`}
                className={`block px-3 py-2 transition-colors ${dept.id === department.id
                    ? "text-blue-700 font-medium"
                    : "text-gray-600 hover:text-blue-700"
                  }`}
              >
                {dept.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentSidebar;