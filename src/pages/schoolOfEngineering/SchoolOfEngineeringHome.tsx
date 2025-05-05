import { motion } from "framer-motion";
import homeImg from "../../assets/images/homeimage.avif";
import SchoolOfEngineeringQuickLinks from "./SchoolOfEngineeringQuickLinks";

const SchoolOfEngineeringHome = () => {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <div className="absolute inset-0 bg-black/80">
          <img
            src={homeImg}
            alt="Engineering campus overview"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Engineering Excellence at
              <span className="block mt-4 text-mpgin-blue">Matoshri Pratishthan</span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-200">
                NAAC A++ Accredited | Industry-Aligned Curriculum | 95% Placement Record
              </p>
            </div>
          </motion.div>


        </div>
      </div>
      <SchoolOfEngineeringQuickLinks />

    </div>
  );
};

export default SchoolOfEngineeringHome;