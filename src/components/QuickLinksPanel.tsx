import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import { useState } from "react";

const QuickLinksPanel = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string>("chairman");

  // Navigation items data
  const navItems = [
    { label: "Chairman", id: "chairman" },
    { label: "Principal's Desk", id: "principal" },
    { label: "President", id: "president" },
    { label: "Vice President", id: "vice-president" },
    { label: "Secretary", id: "secretary" },
    { label: "Board of Directors", id: "board" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <nav className="w-full flex gap-4 overflow-x-auto whitespace-nowrap pb-2">
            {navItems.map((item ,index) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                className="w-full p-2.5 text-left rounded-lg bg-mpgin-blue text-white hover:bg-blue-400 transition-colors text-lg"
                // onClick={() => navigate(`/profile/${item.id}`)}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

         <ProfilePage id={activeId}/>

          <div className="w-full lg:w-3/4 space-y-4 sm:space-y-6 md:space-y-8">
            {/* About Section */}
            <article className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                About MPGI
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Matoshri Pratishthan Group of Institutions (MPGI) has been a
                beacon of excellence in Engineering & Management Education since
                2009. Our integrated campus offers multidisciplinary programs
                bridging academic knowledge with industry requirements through
                hands-on learning and strong corporate partnerships.
              </p>
              <button
                className="text-mpgin-blue font-medium text-sm sm:text-base md:text-lg flex items-center hover:text-blue-400"
                onClick={() => navigate("/about")}
              >
                Read More
                <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <article className="p-4 sm:p-6 bg-gray-200 rounded-xl shadow-xl hover:animate-bounceHover">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                  Our Vision
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  To be a global center of excellence nurturing innovation and
                  entrepreneurship while contributing to sustainable national
                  development through holistic, value-based education.
                </p>
              </article>

              <article className="p-4 sm:p-6 bg-gray-200 rounded-xl shadow-xl hover:animate-bounceHover">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
                  To establish world-class institutions delivering quality
                  education in Engineering, Management, and IT, fostering
                  socially responsible leaders through innovative teaching and
                  industry-aligned programs.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksPanel;
