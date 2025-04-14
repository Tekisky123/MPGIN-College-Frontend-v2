import { motion } from "framer-motion";
import { ChevronRight, Building2, GraduationCap, School } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Department {
  title: string;
  code: string;
  content: string;
  icon: React.ReactNode;
  route: string;
}

const Departments = () => {
  const navigate = useNavigate();

  const departments: Department[] = [
    {
      title: "Vishwabharti Polytechnic Institute",
      code: "DTE CODE- 2194",
      content: `Matoshri Pratisthan Vishwabharti Polytechnic Institute was founded on the basic principle of serving the society, to provide affordable and quality education to the students and paves way for a wider variety of career options. The Institute aims to grow as one of the largest educational complexes in Nanded and around Marathwada Region.`,
      icon: <School className="w-6 h-6" />,
      route: "/vishwabharati-polytechnic-institute/home",
    },
    {
      title: "School Of Management",
      code: "DTE CODE- 2116",
      content: `The School of Management of Matoshri Pratishthan Group of Institutions offers two years postgraduate program in Business Administration with specialization in Marketing Management Finance, Human Resource Management, I.T. and Banking. The School is affiliated to Swami Ramanand Teerth Marathwada University Nanded and approved by AICTE, Govt. of Maharashtra.`,
      icon: <Building2 className="w-6 h-6" />,
      route: "/school-of-management/home",
    },
    {
      title: "School Of Engineering",
      code: "DTE CODE- 2116",
      content: `Matoshri Pratishthan School of Engineering offers full time four years Bachelor's Degree in Engineering approved by the All India Council for Technical Education (AICTE), New Delhi and sanctioned by Govt. of Maharashtra (DTE) and affiliated to DR BABA SAHEB AMBEDKAR TECHNOLOGICA UNIVERSITY LONERE (BATU).`,
      icon: <GraduationCap className="w-6 h-6" />,
      route: "/school-of-engineering/home",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -30,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Departments
          </h1>
          <div className="w-20 h-1 bg-mpgin-blue mx-auto"></div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {departments.map((dept, index) => (
            <motion.article
              key={`dept-${index}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="bg-gray-200 rounded-xl border border-gray-200 overflow-hidden cursor-pointer flex flex-col h-full"
              onClick={() => navigate(dept.route)}
              aria-label={`Navigate to ${dept.title}`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    {dept.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {dept.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {dept.code}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-1">
                  {dept.content}
                </p>

                <div className="flex items-center text-mpgin-blue font-medium">
                  <span>Explore Department</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;